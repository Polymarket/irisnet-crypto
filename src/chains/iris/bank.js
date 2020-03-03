
const Base64 = require('base64-node');
const Utils = require('../../util/utils');
const Codec = require('../../util/codec');
const Config = require('../../../config');
const Builder = require('../../builder');
const Amino = require('../base');
const TxSerializer = require('./tx/tx_serializer');

class Coin {
  constructor(amount, denom) {
    this.denom = denom;
    this.amount = amount;
  }
}

class Input extends Builder.Validator {
  constructor(address, coins) {
    super();
    this.address = address;
    this.coins = coins;
  }

  GetSignBytes() {
    const msg = {
      address: this.address,
      coins: this.coins,
    };
    return Utils.sortObjectKeys(msg);
  }

  ValidateBasic() {
    if (Utils.isEmpty(this.address)) {
      throw new Error('address is empty');
    }

    if (Utils.isEmpty(this.coins)) {
      throw new Error('coins is empty');
    }
  }
}

class Output extends Builder.Validator {
  constructor(address, coins) {
    super();
    this.address = address;
    this.coins = coins;
  }

  GetSignBytes() {
    const msg = {
      address: this.address,
      coins: this.coins,
    };
    return Utils.sortObjectKeys(msg);
  }

  ValidateBasic() {
    if (Utils.isEmpty(this.address)) {
      throw new Error('address is empty');
    }

    if (Utils.isEmpty(this.coins)) {
      throw new Error('coins is empty');
    }
  }
}

class MsgSend extends Builder.Msg {
  constructor(from, to, coins) {
    super(Config.iris.tx.transfer.prefix);
    this.inputs = [new Input(from, coins)];
    this.outputs = [new Output(to, coins)];
  }

  GetSignBytes() {
    const inputs = [];
    const outputs = [];
    this.inputs.forEach((item) => {
      inputs.push(item.GetSignBytes());
    });
    this.outputs.forEach((item) => {
      outputs.push(item.GetSignBytes());
    });
    const msg = {
      inputs,
      outputs,
    };

    return Utils.sortObjectKeys(msg);
  }

  ValidateBasic() {
    if (Utils.isEmpty(this.inputs)) {
      throw new Error('sender is  empty');
    }
    if (Utils.isEmpty(this.outputs)) {
      throw new Error('sender is  empty');
    }

    this.inputs.forEach((input) => {
      input.ValidateBasic();
    });

    this.outputs.forEach((output) => {
      output.ValidateBasic();
    });
  }

  Type() {
    return Config.iris.tx.transfer.prefix;
  }

  GetMsg() {
    const inputs = [];
    const outputs = [];

    this.inputs.forEach((item) => {
      const BECH32 = require('bech32');
      const ownKey = BECH32.decode(item.address);
      const addrHex = BECH32.fromWords(ownKey.words);
      inputs.push({
        address: addrHex,
        coins: item.coins,
      });
    });

    this.outputs.forEach((item) => {
      const BECH32 = require('bech32');
      const ownKey = BECH32.decode(item.address);
      const addrHex = BECH32.fromWords(ownKey.words);
      outputs.push({
        address: addrHex,
        coins: item.coins,
      });
    });
    return {
      input: inputs,
      output: outputs,
    };
  }

  GetDisplayContent() {
    return {
      i18n_tx_type: 'i18n_transfer',
      i18n_from: this.inputs[0].address,
      i18n_to: this.outputs[0].address,
      i18n_amount: this.outputs[0].coins,
    };
  }
}

class StdFee {
  constructor(amount, gas) {
    this.amount = amount;
    if (!gas) {
      gas = Config.iris.maxGas;
    }
    this.gas = gas;
  }

  GetSignBytes() {
    if (Utils.isEmpty(this.amount)) {
      this.amount = [new Coin('0', '')];
    }
    return {
      amount: this.amount,
      gas: this.gas,
    };
  }
}

class StdSignMsg extends Builder.Msg {
  constructor(chainID, accnum, sequence, fee, msg, memo, msgType) {
    super(msgType);
    this.chain_id = chainID;
    this.account_number = accnum;
    this.sequence = sequence;
    this.fee = fee;
    this.msgs = [msg];
    this.memo = memo;
  }

  GetSignBytes() {
    const msgs = [];
    this.msgs.forEach((msg) => {
      msgs.push(msg.GetSignBytes());
    });

    const tx = {
      account_number: this.account_number,
      chain_id: this.chain_id,
      fee: this.fee.GetSignBytes(),
      memo: this.memo,
      msgs,
      sequence: this.sequence,
    };
    return Utils.sortObjectKeys(tx);
  }

  ValidateBasic() {
    if (Utils.isEmpty(this.chain_id)) {
      throw new Error('chain_id is  empty');
    }
    if (this.account_number < 0) {
      throw new Error('account_number is  empty');
    }
    if (this.sequence < 0) {
      throw new Error('sequence is  empty');
    }
    this.msgs.forEach((msg) => {
      msg.ValidateBasic();
    });
  }
}

class StdSignature {
  constructor(pub_key, signature, account_number, sequence) {
    this.pub_key = pub_key;
    this.signature = signature;
    this.account_number = account_number;
    this.sequence = sequence;
  }
}

class StdTx {
  constructor(properties) {
    this.msgs = properties.msgs;
    this.fee = properties.fee;
    this.signatures = null;
    this.memo = properties.memo;
    this.signMsg = properties;
  }

  SetSignature(sig) {
    if (typeof sig === 'string') {
      sig = JSON.parse(sig);
    }
    const signature = new StdSignature(sig.pub_key, sig.signature, this.signMsg.account_number, this.signMsg.sequence);
    this.signatures = [signature];
  }

  SetPubKey(pubkey) {
    if (Codec.Bech32.isBech32(Config.iris.bech32.accPub, pubkey)) {
      pubkey = Codec.Bech32.fromBech32(pubkey);
    }
    pubkey = Codec.Hex.hexToBytes(pubkey);
    if (!this.signatures || this.signatures.length == 0) {
      const signature = {
        pub_key: pubkey,
      };
      this.SetSignature(signature);
      return;
    }
    this.signatures[0].pub_key = pubkey;
  }

  GetData() {
    const signatures = [];
    if (this.signatures) {
      this.signatures.forEach((sig) => {
        let publicKey = '';
        let signature = '';
        if (sig.pub_key.length > 33) {
          // 去掉amino编码前缀
          publicKey = sig.pub_key.slice(5, sig.pub_key.length);
        }
        publicKey = Base64.encode(publicKey);

        if (!Utils.isEmpty(sig.signature)) {
          signature = Base64.encode(sig.signature);
        }

        signatures.push({
          pub_key: Amino.MarshalJSON(Config.iris.amino.pubKey, publicKey),
          signature,
          account_number: Utils.toString(sig.account_number),
          sequence: Utils.toString(sig.sequence),
        });
      });
    }

    const msgs = [];
    this.msgs.forEach((msg) => {
      msgs.push(Amino.MarshalJSON(msg.type, msg));
    });
    const fee = {
      amount: this.fee.amount,
      gas: Utils.toString(this.fee.gas),
    };
    return {
      tx: {
        msg: msgs,
        fee,
        signatures,
        memo: this.memo,
      },
    };
  }

  /**
     *  用于计算交易hash和签名后的交易内容(base64编码)
     *
     *  可以直接将data提交到irishub的/txs接口
     *
     * @returns {{data: *, hash: *}}
     * @constructor
     */
  Hash() {
    const result = TxSerializer.encode(this);
    return {
      data: Base64.encode(result.data),
      hash: result.hash,
    };
  }

  GetSignBytes() {
    return this.signMsg.GetSignBytes();
  }

  GetDisplayContent() {
    const msg = this.msgs[0];
    const content = msg.GetDisplayContent();
    content.i18n_fee = this.fee.amount;
    return content;
  }
}

module.exports = class Bank {
  static createMsgSend(req) {
    const coins = [];
    if (!Utils.isEmpty(req.msg.coins)) {
      req.msg.coins.forEach((item) => {
        coins.push({
          denom: item.denom,
          amount: Utils.toString(item.amount),
        });
      });
    }
    const msg = new MsgSend(req.from, req.msg.to, coins);
    return msg;
  }

  static NewStdSignature(pub_key, signature, account_number, sequence) {
    return new StdSignature(pub_key, signature, account_number, sequence);
  }

  static NewStdTx(properties) {
    return new StdTx(properties);
  }

  static NewStdFee(amount, gas) {
    return new StdFee(amount, gas);
  }

  static NewStdSignMsg(chainID, accnum, sequence, fee, msg, memo, msgType) {
    return new StdSignMsg(chainID, accnum, sequence, fee, msg, memo, msgType);
  }
};
