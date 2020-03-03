
const Old = require('old');
const Bip39 = require('bip39');
const Cryp = require('crypto-browserify');
const UUID = require('uuid');
const Crypto = require('../../crypto');
const IrisKeypair = require('./keypair');
const Codec = require('../../util/codec');
const Utils = require('../../util/utils');
const Config = require('../../../config');

class IrisCrypto extends Crypto {
  /**
     *
     * @param language
     * @returns {*}
     */
  create(language) {
    const keyPair = IrisKeypair.create(switchToWordList(language));
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
    const keyPair = IrisKeypair.recover(secret, switchToWordList(language));
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
    const keyPair = IrisKeypair.import(privateKey);
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
    return IrisKeypair.isValidAddress(address);
  }

  isValidPrivate(privateKey) {
    return IrisKeypair.isValidPrivate(privateKey);
  }

  getAddress(publicKey) {
    const pubKey = Codec.Hex.hexToBytes(publicKey);
    let address = IrisKeypair.getAddress(pubKey);
    address = Codec.Bech32.toBech32(Config.iris.bech32.accAddr, address);
    return address;
  }

  // @see:https://github.com/binance-chain/javascript-sdk/blob/master/src/crypto/index.js
  exportKeystore(privateKeyHex, password, opts = {}) {
    if (Utils.isEmpty(password) || password.length < 8) {
      throw new Error("password's length must be greater than 8");
    }
    if (Utils.isEmpty(privateKeyHex)) {
      throw new Error('private key must be not empty');
    }
    const salt = Cryp.randomBytes(32);
    const iv = Cryp.randomBytes(16);
    const cipherAlg = opts.cipherAlg ? opts.cipherAlg : Config.iris.keystore.cipherAlg;
    const kdf = opts.kdf ? opts.kdf : Config.iris.keystore.kdf;
    const c = opts.c ? opts.c : Config.iris.keystore.c;
    const { address } = this.import(privateKeyHex);

    const kdfparams = {
      dklen: 32,
      salt: salt.toString('hex'),
      c,
      prf: 'hmac-sha256',
    };
    const derivedKey = Cryp.pbkdf2Sync(Buffer.from(password), salt, kdfparams.c, kdfparams.dklen, 'sha256');
    const cipher = Cryp.createCipheriv(cipherAlg, derivedKey.slice(0, 16), iv);
    if (!cipher) {
      throw new Error('Unsupported cipher');
    }

    const cipherBuffer = Buffer.concat([cipher.update(Buffer.from(privateKeyHex, 'hex')), cipher.final()]);
    const bufferValue = Buffer.concat([derivedKey.slice(16, 32), cipherBuffer]);
    const hashCiper = Cryp.createHash('sha256');
    hashCiper.update(bufferValue);
    const mac = hashCiper.digest().toString('hex');
    return {
      version: '1',
      id: UUID.v4({
        random: Cryp.randomBytes(16),
      }),
      address,
      crypto: {
        ciphertext: cipherBuffer.toString('hex'),
        cipherparams: {
          iv: iv.toString('hex'),
        },
        cipher: cipherAlg,
        kdf,
        kdfparams,
        mac,
      },
    };
  }

  importKeystore(keystore, password) {
    if (Utils.isEmpty(password) || password.length < 8) {
      throw new Error("password's length must be greater than 8");
    }
    if (Utils.isEmpty(keystore)) {
      throw new Error('keystore file must be not empty');
    }

    const { kdfparams } = keystore.crypto;
    if (kdfparams.prf !== 'hmac-sha256') {
      throw new Error('Unsupported parameters to PBKDF2');
    }

    const derivedKey = Cryp.pbkdf2Sync(Buffer.from(password), Buffer.from(kdfparams.salt, 'hex'), kdfparams.c, kdfparams.dklen, 'sha256');
    const ciphertext = Buffer.from(keystore.crypto.ciphertext, 'hex');
    const bufferValue = Buffer.concat([derivedKey.slice(16, 32), ciphertext]);
    const hashCiper = Cryp.createHash('sha256');
    hashCiper.update(bufferValue);
    const mac = hashCiper.digest().toString('hex');
    if (mac !== keystore.crypto.mac) {
      throw new Error('wrong password');
    }
    const decipher = Cryp.createDecipheriv(keystore.crypto.cipher, derivedKey.slice(0, 16), Buffer.from(keystore.crypto.cipherparams.iv, 'hex'));
    const privateKey = Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('hex');

    return this.import(privateKey.toUpperCase());
  }
}

function encode(acc) {
  if (!Utils.isEmpty(acc)) {
    switch (Config.iris.defaultCoding) {
      case Config.iris.coding.bech32: {
        if (Codec.Hex.isHex(acc.address)) {
          acc.address = Codec.Bech32.toBech32(Config.iris.bech32.accAddr, acc.address);
        }
        if (Codec.Hex.isHex(acc.publicKey)) {
          acc.publicKey = Codec.Bech32.toBech32(Config.iris.bech32.accPub, acc.publicKey);
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

module.exports = Old(IrisCrypto);
