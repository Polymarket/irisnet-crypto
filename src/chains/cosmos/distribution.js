const BECH32 = require('bech32');
const Root = require('./tx/tx');
const Amino = require('../base');
const Utils = require('../../util/utils');
const Config = require('../../../config');

const { MsgSetWithdrawAddress } = Root.cosmos;
const { MsgWithdrawDelegatorReward } = Root.cosmos;
const { MsgWithdrawValidatorCommission } = Root.cosmos;

MsgSetWithdrawAddress.prototype.type = Config.cosmos.tx.setWithdrawAddress.prefix;
MsgSetWithdrawAddress.prototype.GetSignBytes = function () {
  const msg = {
    delegator_address: BECH32.encode(Config.cosmos.bech32.accAddr, this.DelegatorAddress),
    withdraw_address: BECH32.encode(Config.cosmos.bech32.accAddr, this.WithdrawAddress),
  };
  const sortMsg = Utils.sortObjectKeys(msg);
  return Amino.MarshalJSON(this.type, sortMsg);
};

MsgSetWithdrawAddress.prototype.ValidateBasic = function () {
  if (Utils.isEmpty(this.DelegatorAddress)) {
    throw new Error('delegatorAddr is  empty');
  }
  if (Utils.isEmpty(this.WithdrawAddress)) {
    throw new Error('WithdrawAddr is  empty');
  }
};

MsgSetWithdrawAddress.prototype.GetMsg = function () {
  const delegator_addr = BECH32.fromWords(this.DelegatorAddress);
  const withdraw_addr = BECH32.fromWords(this.WithdrawAddress);

  return {
    DelegatorAddress: delegator_addr,
    WithdrawAddress: withdraw_addr,
  };
};

MsgSetWithdrawAddress.prototype.toJSON = function () {
  const delegator_addr = BECH32.encode(Config.cosmos.bech32.accAddr, this.DelegatorAddress);
  const withdraw_addr = BECH32.encode(Config.cosmos.bech32.accAddr, this.WithdrawAddress);
  return {
    DelegatorAddress: delegator_addr,
    WithdrawAddress: withdraw_addr,
  };
};

MsgSetWithdrawAddress.prototype.GetDisplayContent = function (){
    let delegator_addr = BECH32.encode(Config.cosmos.bech32.accAddr,this.DelegatorAddress);
    let withdraw_addr = BECH32.encode(Config.cosmos.bech32.accAddr,this.WithdrawAddress);
    return {
        i18n_tx_type:"i18n_set_withdraw_address",
        i18n_delegator_addr:delegator_addr,
        i18n_withdraw_addr:withdraw_addr,
    };
};

MsgWithdrawDelegatorReward.prototype.type = Config.cosmos.tx.withdrawDelegatorReward.prefix;
MsgWithdrawDelegatorReward.prototype.GetSignBytes = function () {
  const msg = {
    delegator_address: BECH32.encode(Config.cosmos.bech32.accAddr, this.DelegatorAddress),
    validator_address: BECH32.encode(Config.cosmos.bech32.valAddr, this.ValidatorAddress),
  };
  const sortMsg = Utils.sortObjectKeys(msg);
  return Amino.MarshalJSON(this.type, sortMsg);
};

MsgWithdrawDelegatorReward.prototype.toJSON = function () {
  const delegatorAddr = BECH32.encode(Config.cosmos.bech32.accAddr, this.DelegatorAddress);
  const validatorAddress = BECH32.encode(Config.cosmos.bech32.accAddr, this.ValidatorAddress);
  return {
    DelegatorAddress: delegatorAddr,
    ValidatorAddress: validatorAddress,
  };
};

MsgWithdrawDelegatorReward.prototype.ValidateBasic = function () {
  if (Utils.isEmpty(this.DelegatorAddress)) {
    throw new Error('delegatorAddr is  empty');
  }
  if (Utils.isEmpty(this.ValidatorAddress)) {
    throw new Error('validatorAddr is  empty');
  }
};

MsgWithdrawDelegatorReward.prototype.GetMsg = function () {
  const delegator_addr = BECH32.fromWords(this.DelegatorAddress);
  const validator_addr = BECH32.fromWords(this.ValidatorAddress);

  return {
    DelegatorAddress: delegator_addr,
    ValidatorAddress: validator_addr,
  };
};
MsgWithdrawDelegatorReward.prototype.GetDisplayContent = function () {
  const delegatorAddress = BECH32.encode(Config.cosmos.bech32.accAddr, this.DelegatorAddress);
  const validatorAddress = BECH32.encode(Config.cosmos.bech32.valAddr, this.ValidatorAddress);

  return {
    i18n_tx_type: 'i18n_withdraw_delegation_reward',
    i18n_delegator_addr: delegatorAddress,
    i18n_validator_addr: validatorAddress,
  };
};


MsgWithdrawValidatorCommission.prototype.type = Config.cosmos.tx.withdrawValidatorCommission.prefix;
MsgWithdrawValidatorCommission.prototype.GetSignBytes = function () {
  const msg = {
    validator_address: BECH32.encode(Config.cosmos.bech32.valAddr, this.ValidatorAddress),
  };
  const sortMsg = Utils.sortObjectKeys(msg);
  return Amino.MarshalJSON(this.type, sortMsg);
};

MsgWithdrawValidatorCommission.prototype.ValidateBasic = function () {
  if (Utils.isEmpty(this.ValidatorAddress)) {
    throw new Error('validatorAddr is  empty');
  }
};

MsgWithdrawValidatorCommission.prototype.GetMsg = function () {
  const validator_addr = BECH32.fromWords(this.ValidatorAddress);

  return {
    ValidatorAddress: validator_addr,
  };
};
MsgWithdrawValidatorCommission.prototype.GetDisplayContent = function () {};
MsgWithdrawValidatorCommission.prototype.toJSON = function () {
  const validatorAddress = BECH32.encode(Config.cosmos.bech32.accAddr, this.ValidatorAddress);
  return {
    ValidatorAddress: validatorAddress,
  };
};

module.exports = class Distribution {
  static CreateMsgSetWithdrawAddress(req) {
    const delegator_addr = BECH32.decode(req.from).words;
    const withdraw_addr = BECH32.decode(req.msg.withdraw_addr).words;
    return new MsgSetWithdrawAddress({
      DelegatorAddress: delegator_addr,
      WithdrawAddress: withdraw_addr,
    });
  }

  static CreateMsgWithdrawDelegatorReward(req) {
    const delegator_addr = BECH32.decode(req.from).words;
    const validator_addr = BECH32.decode(req.msg.validator_addr).words;
    return new MsgWithdrawDelegatorReward({
      DelegatorAddress: delegator_addr,
      ValidatorAddress: validator_addr,
    });
  }

  static CreateMsgWithdrawAllDelegatorReward(req) {
    return req.msg.map( val_addr => {
      const delegator_addr = BECH32.decode(req.from).words;
      const validator_addr = BECH32.decode(val_addr).words;
      return new MsgWithdrawDelegatorReward({
        DelegatorAddress: delegator_addr,
        ValidatorAddress: validator_addr,
      });
    })
  }

  static CreateMsgWithdrawValidatorCommission(req) {
    const validator_addr = BECH32.decode(req.from).words;
    return new MsgWithdrawValidatorCommission({
      ValidatorAddress: validator_addr,
    });
  }
};
