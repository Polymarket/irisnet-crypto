
const Irisnet = require('../index');
const chai = require('chai');

const { assert } = chai;
const fetch = require('isomorphic-fetch');

const config = {
  iris: {
    host: 'http://irisnet-lcd.dev.rainbow.one',
    chainId: '',
  },
  cosmos: {

  },
  kava: {

  },
};

function randomWord(range) {
  let str = '';
  const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  for (let i = 0; i < range; i++) {
    const pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
}

function randomHex(range) {
  let str = '';
  const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  for (let i = 0; i < range; i++) {
    const pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str.toUpperCase();
}

async function verifyTx(url, tx, privateKey, chainName, callback) {
  const builder = Irisnet.getBuilder(chainName, 'testnet');
  const stdTx = builder.buildAndSignTx(tx, privateKey);
  const exp = stdTx.Hash();
  const payload = stdTx.GetData();
  const response = await sendByAsync('POST', url, payload);
  callback(response, exp, payload);
}

async function verifyAccount(url, account) {
  const payload = {
    password: '1234567890',
    seed: account.phrase,
  };
  const response = await sendByAsync('POST', url, payload);
  assert.strictEqual(response.address, account.address);
  assert.strictEqual(response.pub_key, account.publicKey);
}

function sendBySync(method, url, payload) {
  const req = require('sync-request');
  const res = req(method, url, {
    json: payload,
  });
  return JSON.parse(res.getBody('utf8'));
}

function getSequence(host, address) {
  const url = `${host}/auth/accounts/${address}`;
  const res = sendBySync('GET', url);
  const account = res.result.value;
  return account.sequence;
}

function sendByAsync(method, url, data) {
  const payload = {
    method,
    body: JSON.stringify(data),
  };
  return fetch(url, payload).then((response) => {
    if (!response.ok) {
      return Promise.reject(response.text().then((msg) => msg));
    }
    const contentType = response.headers.get('content-type');
    let result = '';
    if (contentType.includes('text/plain')) {
      result = response.text();
    } else if (contentType.includes('application/json')) {
      result = response.json();
    }
    return result;
  }).catch((err) => Promise.reject(err));
}

module.exports = {
  randomWord, randomHex, verifyTx, verifyAccount, sendBySync, getSequence,
};
