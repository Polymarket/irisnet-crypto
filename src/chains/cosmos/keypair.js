
const Sha256 = require('sha256');
const RIPEMD160 = require('ripemd160');
const Bip39 = require('bip39');
const Random = require('randombytes');
const Secp256k1 = require('secp256k1');
const BN = require('bn');
const Util = require('../../util/utils');
const Codec = require('../../util/codec');
const Config = require('../../../config');
const Amino = require('../base');

class CosmosKeypair {
  static getPrivateKeyFromSecret(mnemonicS) {
    const seed = Bip39.mnemonicToSeed(mnemonicS);
    const master = Hd.ComputeMastersFromSeed(seed);
    const derivedPriv = Hd.DerivePrivateKeyForPath(master.secret, master.chainCode, Config.cosmos.bip39Path);
    return derivedPriv;
  }

  static sign(private_key, msg) {
    // 将签名字符串使用Sha256构造32位byte数组
    const sigByte = Buffer.from(JSON.stringify(msg));
    const sig32 = Buffer.from(Sha256(sigByte, { asBytes: true }));

    // 对数据签名
    const prikeyArr = Buffer.from(new Uint8Array(Codec.Hex.hexToBytes(private_key)));
    const sig = Secp256k1.sign(sig32, prikeyArr);
    // let signature = Buffer.from(Hd.Serialize(sig.signature));
    return Array.from(sig.signature);
  }

  static getAddress(publicKey) {
    if (publicKey.length > 33) {
      // 去掉amino编码前缀
      publicKey = publicKey.slice(5, publicKey.length);
    }
    const hmac = Sha256(publicKey);
    const b = Buffer.from(Codec.Hex.hexToBytes(hmac));
    const addr = new RIPEMD160().update(b);
    return addr.digest('hex').toUpperCase();
  }

  static create(language) {
    // 生成24位助记词
    const entropySize = 24 * 11 - 8;
    let entropy = Random(entropySize / 8);
    let mnemonicS = Bip39.entropyToMnemonic(entropy, language);
    while (Util.hasRepeatElement(mnemonicS, ' ')) {
      entropy = Random(entropySize / 8);
      mnemonicS = Bip39.entropyToMnemonic(entropy, language);
    }

    // 生成私钥
    const secretKey = this.getPrivateKeyFromSecret(mnemonicS);
    // 构造公钥
    let pubKey = Secp256k1.publicKeyCreate(secretKey);
    pubKey = Amino.MarshalBinary(Config.cosmos.amino.pubKey, pubKey);

    return {
      secret: mnemonicS,
      address: this.getAddress(pubKey),
      privateKey: Codec.Hex.bytesToHex(secretKey),
      publicKey: Codec.Hex.bytesToHex(pubKey),
    };
  }

  static recover(mnemonic, language) {
    this.checkSeed(mnemonic, language);
    // 生成私钥
    const secretKey = this.getPrivateKeyFromSecret(mnemonic);
    // 构造公钥
    let pubKey = Secp256k1.publicKeyCreate(secretKey);
    pubKey = Amino.MarshalBinary(Config.cosmos.amino.pubKey, pubKey);

    return {
      secret: mnemonic,
      address: this.getAddress(pubKey),
      privateKey: Codec.Hex.bytesToHex(secretKey),
      publicKey: Codec.Hex.bytesToHex(pubKey),
    };
  }

  static checkSeed(mnemonic, language) {
    const seed = mnemonic.split(' ');
    if (seed.length != 12 && seed.length != 24) {
      throw new Error('seed length must be equal 12 or 24');
    }
    if (!Bip39.validateMnemonic(mnemonic, language)) {
      throw new Error('seed is invalid');
    }
  }

  static import(secretKey) {
    const secretBytes = Buffer.from(secretKey, 'hex');
    // 构造公钥
    let pubKey = Secp256k1.publicKeyCreate(secretBytes);
    pubKey = Amino.MarshalBinary(Config.cosmos.amino.pubKey, pubKey);
    return {
      address: this.getAddress(pubKey),
      privateKey: secretKey,
      publicKey: Codec.Hex.bytesToHex(pubKey),
    };
  }

  static isValidAddress(address) {
    const prefix = Config.cosmos.bech32.accAddr;
    return Codec.Bech32.isBech32(prefix, address);
  }

  static isValidPrivate(privateKey) {
    return /^[0-9a-fA-F]{64}$/i.test(privateKey);
  }
}

class Hd {
  static ComputeMastersFromSeed(seed) {
    const masterSecret = Buffer.from('Bitcoin seed');
    const master = Hd.I64(masterSecret, seed);
    return master;
  }

  static DerivePrivateKeyForPath(privKeyBytes, chainCode, path) {
    let data = privKeyBytes;
    const parts = path.split('/');
    parts.forEach((part) => {
      const harden = part.slice(part.length - 1, part.length) === "'";
      if (harden) {
        part = part.slice(0, part.length - 1);
      }
      const idx = parseInt(part);
      const json = Hd.DerivePrivateKey(data, chainCode, idx, harden);
      data = json.data;
      chainCode = json.chainCode;
    });
    const derivedKey = data;
    return derivedKey;
  }

  static I64(key, data) {
    const createHmac = require('create-hmac');
    const hmac = createHmac('sha512', key);
    hmac.update(data); // optional encoding parameter
    const i = hmac.digest(); // synchronously get result with optional encoding parameter
    return {
      secret: i.slice(0, 32),
      chainCode: i.slice(32, i.length),
    };
  }

  static DerivePrivateKey(privKeyBytes, chainCode, index, harden) {
    let data;
    let indexBuffer = Buffer.from([index]);
    if (harden) {
      const c = new BN(index).or(new BN(0x80000000));
      indexBuffer = c.toBuffer();

      const privKeyBuffer = Buffer.from(privKeyBytes);
      data = Buffer.from([0]);
      data = Buffer.concat([data, privKeyBuffer]);
    } else {
      const pubKey = Secp256k1.publicKeyCreate(privKeyBytes);
      if (index == 0) {
        indexBuffer = Buffer.from([0, 0, 0, 0]);
      }
      data = pubKey;
    }
    data = Buffer.concat([data, indexBuffer]);
    const i64P = Hd.I64(chainCode, Uint8Array.from(data));
    const aInt = new BN(privKeyBytes);
    const bInt = new BN(i64P.secret);
    const x = Hd.AddScalars(aInt, bInt);

    return {
      data: x,
      chainCode: i64P.chainCode,
    };
  }

  static AddScalars(a, b) {
    const c = a.add(b);
    const bn = require('secp256k1/lib/js/bn');
    const n = bn.n.toBuffer();
    const x = c.mod(new BN(n)).toBuffer();
    const buf = Buffer.alloc(32);
    buf.fill(x, 32 - x.length);
    return buf;
  }

  static Serialize(sig) {
    const sigObj = { r: sig.slice(0, 32), s: sig.slice(32, 64) };
    const SignatureFun = require('elliptic/lib/elliptic/ec/signature');
    const signature = new SignatureFun(sigObj);

    return signature.toDER();
  }
}


module.exports = CosmosKeypair;
