
const BigNumber = require('bignumber.js/bignumber.js');
const EthereumTx = require('ethereumjs-tx');
const Old = require('old');
const { Builder } = require('../../builder');


class EthermintBuilder extends Builder {
  buildTx(tx) {
    const req = super.buildParam(tx);
    const ether = new BigNumber(10e+17);
    const rawTx = new EthermintMsg(req.fees[0].amount, new BigNumber(req.coins[0].amount).times(ether), 21000, req.to, req.acc.sequence);
    rawTx.ValidateBasic();
    return rawTx;
  }

  signTx(tx, privateKey) {
    const ethereumTx = new EthereumTx(tx);
    ethereumTx.sign(new Buffer(privateKey));
    const serializedTx = ethereumTx.serialize();
    return serializedTx.toString('hex');
  }

  buildAndSignTx(tx, privateKey) {
    const rawTx = this.buildTx(tx);
    const ethereumTx = new EthereumTx(rawTx);
    ethereumTx.sign(new Buffer(privateKey));
    const serializedTx = ethereumTx.serialize();
    return serializedTx.toString('hex');
  }
}

class EthermintMsg extends Builder.SignMsg {
  constructor(gasPrice, value, gasLimit, to, nonce) {
    super();
    this.gasPrice = gasPrice;
    this.value = value;
    this.gasLimit = gasLimit;
    this.to = to;
    this.nonce = nonce;
  }

  GetSignBytes() {
    return this;
  }

  ValidateBasic() {
    if (this.gasPrice <= 0) {
      throw new Error('gasPrice must be more than 0');
    }

    if (this.value <= 0) {
      throw new Error('value must be more than 0');
    }

    if (this.gasLimit <= 0) {
      throw new Error('gasLimit must be more than 0');
    }

    if (!this.to || this.to.length == 0) {
      throw new Error('to is empty');
    }

    if (!this.nonce || this.to.nonce == 0) {
      throw new Error('nonce is empty');
    }
  }
}

module.exports = Old(EthermintBuilder);
