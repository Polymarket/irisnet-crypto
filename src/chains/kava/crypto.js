
const Old = require('old');
const Bip39 = require('bip39');
const Crypto = require('../../crypto');
const KavaKeypair = require('./keypair');
const Codec = require('../../util/codec');
const Utils = require('../../util/utils');
const Config = require('../../../config');

class KavaCrypto extends Crypto {
  /**
     *
     * @param language
     * @returns {*}
     */
  create(language) {
    const keyPair = KavaKeypair.create(switchToWordList(language));
    if (keyPair) {
      return encode({
        address: keyPair.address,
        phrase: keyPair.secret,
        privateKey: keyPair.privateKey,
        publicKey: keyPair.publicKey,
      });
    }
    return keyPair;
  }

  recover(secret, language) {
    const keyPair = KavaKeypair.recover(secret, switchToWordList(language));
    if (keyPair) {
      return encode({
        address: keyPair.address,
        phrase: secret,
        privateKey: keyPair.privateKey,
        publicKey: keyPair.publicKey,
      });
    }
  }

  import(privateKey) {
    const keyPair = KavaKeypair.import(privateKey);
    if (keyPair) {
      return encode({
        address: keyPair.address,
        phrase: null,
        privateKey: keyPair.privateKey,
        publicKey: keyPair.publicKey,
      });
    }
  }

  isValidAddress(address) {
    return KavaKeypair.isValidAddress(address);
  }

  isValidPrivate(privateKey) {
    return KavaKeypair.isValidPrivate(privateKey);
  }

  getAddress(publicKey) {
    const pubKey = Codec.Hex.hexToBytes(publicKey);
    let address = KavaKeypair.getAddress(pubKey);
    address = Codec.Bech32.toBech32(Config.kava.bech32.accAddr, address);
    return address;
  }
}

function encode(acc) {
  if (!Utils.isEmpty(acc)) {
    switch (Config.kava.defaultCoding) {
      case Config.kava.coding.bech32: {
        if (Codec.Hex.isHex(acc.address)) {
          acc.address = Codec.Bech32.toBech32(Config.kava.bech32.accAddr, acc.address);
        }
        if (Codec.Hex.isHex(acc.publicKey)) {
          acc.publicKey = Codec.Bech32.toBech32(Config.kava.bech32.accPub, acc.publicKey);
        }
      }
    }
    return acc;
  }
}

function switchToWordList(language) {
  switch (language) {
    case Config.language.cn:
      return Bip39.wordlists.chinese_simplified;
    case Config.language.en:
      return Bip39.wordlists.english;
    case Config.language.jp:
      return Bip39.wordlists.japanese;
    case Config.language.sp:
      return Bip39.wordlists.spanish;
    default:
      return Bip39.wordlists.english;
  }
}

module.exports = Old(KavaCrypto);
