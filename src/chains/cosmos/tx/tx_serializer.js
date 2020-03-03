const root = require('./tx');
const amino = require('../../base');
const config = require('../../../../config');
const codec = require('../../../util/codec');

/**
 *
 *  用于编码/解码 cosmos-sdk识别的StdTx交易模型
 *  当需要支持新的交易类型(msg)时,按照以下步骤执行：
 *
 *      1：在../proto/tx.proto中定义msg的数据结构(protobuf3)
 *      2: 使用pbjs -t static-module -w commonjs -o tx.js tx.proto生产信息tx编解码文件，注意和原文件比较(需要手动合并)
 *      3: 使用amino 注册新的msg信息
 *      4：TxSerializer类的编解码方法不用修改
 *
 *
 */
class TxSerializer {
  /**
     * 对StdTx编码(勿动)
     *
     * @param object: StdTx
     * @returns {{data: Buffer, hash: string}}
     */
  static encode(object) {
    const txMsg = object.msgs[0];
    const msg = txMsg.GetMsg();
    const info = amino.GetRegisterInfo(txMsg.type);
    const msgClass = info.classType;

    const sendMsg = msgClass.create(msg);
    const msgBytes = msgClass.encode(sendMsg).finish();

    const { fee } = object;
    const { StdFee } = root.cosmos;
    const feeMsg = StdFee.create(fee);

    const { StdSignature } = root.cosmos;
    let signature;
    if (object.signatures) {
      signature = [StdSignature.create({
        pubKey: object.signatures[0].pubKey,
        signature: object.signatures[0].signature,
      })];
    }

    const { memo } = object;

    const { StdTx } = root.cosmos;
    const tx = StdTx.create({
      msg: [msgBytes], fee: feeMsg, signatures: signature, memo,
    });
    const txMsgBuf = StdTx.encode(tx).finish();


    // stdTx amion编码前缀[auth/StdTx]
    const txPreBuf = Buffer.from(amino.GetRegisterInfo(config.cosmos.tx.stdTx.prefix).prefix);
    const msgPreBuf = Buffer.from(info.prefix);

    let buf = Buffer.from('');

    // 填充stdTx amion编码前缀
    buf = Buffer.concat([buf, txPreBuf]);

    // 填充txMsgBuf第一位编码字节(数组标识)
    buf = Buffer.concat([buf, txMsgBuf.slice(0, 1)]);

    const t = codec.Uvarint.decode(txMsgBuf.slice(1));

    // 填充txMsgBuf加入前缀后的编码长度
    const uvintMsgBuf = codec.Uvarint.encode(msgPreBuf.length + t.u);
    buf = Buffer.concat([buf, uvintMsgBuf]);

    // 填充msg amion编码前缀
    buf = Buffer.concat([buf, msgPreBuf]);

    // 填充交易内容字节
    buf = Buffer.concat([buf, txMsgBuf.slice(t.n + 1)]);

    const uvarintBuf = Buffer.from(codec.Uvarint.encode(buf.length));
    const bz = Buffer.concat([uvarintBuf, buf]);

    const crypto = require('crypto');
    const hash = crypto.createHash('sha256');
    hash.update(bz);
    const hashTx = hash.digest('hex').substring(0, 64);

    return {
      data: bz,
      hash: hashTx.toUpperCase(),
    };
  }
}
module.exports = TxSerializer;
