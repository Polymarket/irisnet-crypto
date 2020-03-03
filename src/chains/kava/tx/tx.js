/* eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars */


var $protobuf = require('protobufjs/minimal');

// Common aliases
var $Reader = $protobuf.Reader; var $Writer = $protobuf.Writer; var
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.default || ($protobuf.roots.default = {});

$root.kava = (function () {
  /**
     * Namespace kava.
     * @exports kava
     * @namespace
     */
  var kava = {};

  kava.Coin = (function () {
    /**
         * Properties of a Coin.
         * @memberof kava
         * @interface ICoin
         * @property {string} denom Coin denom
         * @property {string} amount Coin amount
         */

    /**
         * Constructs a new Coin.
         * @memberof kava
         * @classdesc Represents a Coin.
         * @implements ICoin
         * @constructor
         * @param {kava.ICoin=} [properties] Properties to set
         */
    function Coin(properties) {
      if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]; }
    }

    /**
         * Coin denom.
         * @member {string} denom
         * @memberof kava.Coin
         * @instance
         */
    Coin.prototype.denom = '';

    /**
         * Coin amount.
         * @member {string} amountKava
         * @memberof kava.Coin
         * @instance
         */
    Coin.prototype.amount = '';

    /**
         * Creates a new Coin instance using the specified properties.
         * @function create
         * @memberof kava.Coin
         * @static
         * @param {kava.ICoin=} [properties] Properties to set
         * @returns {kava.Coin} Coin instance
         */
    Coin.create = function create(properties) {
      return new Coin(properties);
    };

    /**
         * Encodes the specified Coin message. Does not implicitly {@link kava.Coin.verify|verify} messages.
         * @function encode
         * @memberof kava.Coin
         * @static
         * @param {kava.ICoin} message Coin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    Coin.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      writer.uint32(/* id 1, wireType 2 = */10).string(message.denom);
      writer.uint32(/* id 2, wireType 2 = */18).string(message.amount);
      return writer;
    };

    /**
         * Encodes the specified Coin message, length delimited. Does not implicitly {@link kava.Coin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kava.Coin
         * @static
         * @param {kava.ICoin} message Coin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    Coin.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
         * Decodes a Coin message from the specified reader or buffer.
         * @function decode
         * @memberof kava.Coin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kava.Coin} Coin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    Coin.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      var end = length === undefined ? reader.len : reader.pos + length; var
        message = new $root.kava.Coin();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.denom = reader.string();
            break;
          case 2:
            message.amount = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty('denom')) { throw $util.ProtocolError("missing required 'denom'", { instance: message }); }
      if (!message.hasOwnProperty('amount')) { throw $util.ProtocolError("missing required 'amount'", { instance: message }); }
      return message;
    };

    /**
         * Decodes a Coin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kava.Coin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kava.Coin} Coin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    Coin.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
         * Verifies a Coin message.
         * @function verify
         * @memberof kava.Coin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    Coin.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (!$util.isString(message.denom)) { return 'denom: string expected'; }
      if (!$util.isString(message.amount)) { return 'amount: string expected'; }
      return null;
    };

    /**
         * Creates a Coin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kava.Coin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kava.Coin} Coin
         */
    Coin.fromObject = function fromObject(object) {
      if (object instanceof $root.kava.Coin) { return object; }
      var message = new $root.kava.Coin();
      if (object.denom != null) { message.denom = String(object.denom); }
      if (object.amount != null) { message.amount = String(object.amount); }
      return message;
    };

    /**
         * Creates a plain object from a Coin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kava.Coin
         * @static
         * @param {kava.Coin} message Coin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    Coin.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      var object = {};
      if (options.defaults) {
        object.denom = '';
        object.amount = '';
      }
      if (message.denom != null && message.hasOwnProperty('denom')) { object.denom = message.denom; }
      if (message.amount != null && message.hasOwnProperty('amount')) { object.amount = message.amount; }
      return object;
    };

    /**
         * Converts this Coin to JSON.
         * @function toJSON
         * @memberof kava.Coin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    Coin.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Coin;
  }());

  kava.MsgSend = (function () {
    /**
         * Properties of a MsgSend.
         * @memberof kava
         * @interface IMsgSend
         * @property {Uint8Array} FromAddress MsgSend FromAddress
         * @property {Uint8Array} ToAddress MsgSend ToAddress
         * @property {Array.<kava.ICoin>|null} [Amount] MsgSend Amount
         */

    /**
         * Constructs a new MsgSend.
         * @memberof kava
         * @classdesc Represents a MsgSend.
         * @implements IMsgSend
         * @constructor
         * @param {kava.IMsgSend=} [properties] Properties to set
         */
    function MsgSend(properties) {
      this.Amount = [];
      if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]; }
    }

    /**
         * MsgSend FromAddress.
         * @member {Uint8Array} FromAddress
         * @memberof kava.MsgSend
         * @instance
         */
    MsgSend.prototype.FromAddress = $util.newBuffer([]);

    /**
         * MsgSend ToAddress.
         * @member {Uint8Array} ToAddress
         * @memberof kava.MsgSend
         * @instance
         */
    MsgSend.prototype.ToAddress = $util.newBuffer([]);

    /**
         * MsgSend Amount.
         * @member {Array.<kava.ICoin>} Amount
         * @memberof kava.MsgSend
         * @instance
         */
    MsgSend.prototype.Amount = $util.emptyArray;

    /**
         * Creates a new MsgSend instance using the specified properties.
         * @function create
         * @memberof kava.MsgSend
         * @static
         * @param {kava.IMsgSend=} [properties] Properties to set
         * @returns {kava.MsgSend} MsgSend instance
         */
    MsgSend.create = function create(properties) {
      return new MsgSend(properties);
    };

    /**
         * Encodes the specified MsgSend message. Does not implicitly {@link kava.MsgSend.verify|verify} messages.
         * @function encode
         * @memberof kava.MsgSend
         * @static
         * @param {kava.IMsgSend} message MsgSend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgSend.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      writer.uint32(/* id 1, wireType 2 = */10).bytes(message.FromAddress);
      writer.uint32(/* id 2, wireType 2 = */18).bytes(message.ToAddress);
      if (message.Amount != null && message.Amount.length) { for (var i = 0; i < message.Amount.length; ++i) $root.kava.Coin.encode(message.Amount[i], writer.uint32(/* id 3, wireType 2 = */26).fork()).ldelim(); }
      return writer;
    };

    /**
         * Encodes the specified MsgSend message, length delimited. Does not implicitly {@link kava.MsgSend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kava.MsgSend
         * @static
         * @param {kava.IMsgSend} message MsgSend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgSend.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
         * Decodes a MsgSend message from the specified reader or buffer.
         * @function decode
         * @memberof kava.MsgSend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kava.MsgSend} MsgSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgSend.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      var end = length === undefined ? reader.len : reader.pos + length; var
        message = new $root.kava.MsgSend();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.FromAddress = reader.bytes();
            break;
          case 2:
            message.ToAddress = reader.bytes();
            break;
          case 3:
            if (!(message.Amount && message.Amount.length)) { message.Amount = []; }
            message.Amount.push($root.kava.Coin.decode(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty('FromAddress')) { throw $util.ProtocolError("missing required 'FromAddress'", { instance: message }); }
      if (!message.hasOwnProperty('ToAddress')) { throw $util.ProtocolError("missing required 'ToAddress'", { instance: message }); }
      return message;
    };

    /**
         * Decodes a MsgSend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kava.MsgSend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kava.MsgSend} MsgSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgSend.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
         * Verifies a MsgSend message.
         * @function verify
         * @memberof kava.MsgSend
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    MsgSend.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (!(message.FromAddress && typeof message.FromAddress.length === 'number' || $util.isString(message.FromAddress))) { return 'FromAddress: buffer expected'; }
      if (!(message.ToAddress && typeof message.ToAddress.length === 'number' || $util.isString(message.ToAddress))) { return 'ToAddress: buffer expected'; }
      if (message.Amount != null && message.hasOwnProperty('Amount')) {
        if (!Array.isArray(message.Amount)) { return 'Amount: array expected'; }
        for (var i = 0; i < message.Amount.length; ++i) {
          var error = $root.kava.Coin.verify(message.Amount[i]);
          if (error) { return `Amount.${error}`; }
        }
      }
      return null;
    };

    /**
         * Creates a MsgSend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kava.MsgSend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kava.MsgSend} MsgSend
         */
    MsgSend.fromObject = function fromObject(object) {
      if (object instanceof $root.kava.MsgSend) { return object; }
      var message = new $root.kava.MsgSend();
      if (object.FromAddress != null) {
        if (typeof object.FromAddress === 'string') $util.base64.decode(object.FromAddress, message.FromAddress = $util.newBuffer($util.base64.length(object.FromAddress)), 0);
        else if (object.FromAddress.length) message.FromAddress = object.FromAddress;
      }
      if (object.ToAddress != null) {
        if (typeof object.ToAddress === 'string') $util.base64.decode(object.ToAddress, message.ToAddress = $util.newBuffer($util.base64.length(object.ToAddress)), 0);
        else if (object.ToAddress.length) message.ToAddress = object.ToAddress;
      }
      if (object.Amount) {
        if (!Array.isArray(object.Amount)) { throw TypeError('.kava.MsgSend.Amount: array expected'); }
        message.Amount = [];
        for (var i = 0; i < object.Amount.length; ++i) {
          if (typeof object.Amount[i] !== 'object') { throw TypeError('.kava.MsgSend.Amount: object expected'); }
          message.Amount[i] = $root.kava.Coin.fromObject(object.Amount[i]);
        }
      }
      return message;
    };

    /**
         * Creates a plain object from a MsgSend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kava.MsgSend
         * @static
         * @param {kava.MsgSend} message MsgSend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    MsgSend.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      var object = {};
      if (options.arrays || options.defaults) { object.Amount = []; }
      if (options.defaults) {
        if (options.bytes === String) { object.FromAddress = ''; } else {
          object.FromAddress = [];
          if (options.bytes !== Array) { object.FromAddress = $util.newBuffer(object.FromAddress); }
        }
        if (options.bytes === String) { object.ToAddress = ''; } else {
          object.ToAddress = [];
          if (options.bytes !== Array) { object.ToAddress = $util.newBuffer(object.ToAddress); }
        }
      }
      if (message.FromAddress != null && message.hasOwnProperty('FromAddress')) { object.FromAddress = options.bytes === String ? $util.base64.encode(message.FromAddress, 0, message.FromAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.FromAddress) : message.FromAddress; }
      if (message.ToAddress != null && message.hasOwnProperty('ToAddress')) { object.ToAddress = options.bytes === String ? $util.base64.encode(message.ToAddress, 0, message.ToAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ToAddress) : message.ToAddress; }
      if (message.Amount && message.Amount.length) {
        object.Amount = [];
        for (var j = 0; j < message.Amount.length; ++j) { object.Amount[j] = $root.kava.Coin.toObject(message.Amount[j], options); }
      }
      return object;
    };

    /**
         * Converts this MsgSend to JSON.
         * @function toJSON
         * @memberof kava.MsgSend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    MsgSend.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MsgSend;
  }());

  kava.MsgDelegate = (function () {
    /**
         * Properties of a MsgDelegate.
         * @memberof kava
         * @interface IMsgDelegate
         * @property {Uint8Array} DelegatorAddress MsgDelegate DelegatorAddress
         * @property {Uint8Array} ValidatorAddress MsgDelegate ValidatorAddress
         * @property {kava.ICoin} Amount MsgDelegate Amount
         */

    /**
         * Constructs a new MsgDelegate.
         * @memberof kava
         * @classdesc Represents a MsgDelegate.
         * @implements IMsgDelegate
         * @constructor
         * @param {kava.IMsgDelegate=} [properties] Properties to set
         */
    function MsgDelegate(properties) {
      if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]; }
    }

    /**
         * MsgDelegate DelegatorAddress.
         * @member {Uint8Array} DelegatorAddress
         * @memberof kava.MsgDelegate
         * @instance
         */
    MsgDelegate.prototype.DelegatorAddress = $util.newBuffer([]);

    /**
         * MsgDelegate ValidatorAddress.
         * @member {Uint8Array} ValidatorAddress
         * @memberof kava.MsgDelegate
         * @instance
         */
    MsgDelegate.prototype.ValidatorAddress = $util.newBuffer([]);

    /**
         * MsgDelegate Amount.
         * @member {kava.ICoin} Amount
         * @memberof kava.MsgDelegate
         * @instance
         */
    MsgDelegate.prototype.Amount = null;

    /**
         * Creates a new MsgDelegate instance using the specified properties.
         * @function create
         * @memberof kava.MsgDelegate
         * @static
         * @param {kava.IMsgDelegate=} [properties] Properties to set
         * @returns {kava.MsgDelegate} MsgDelegate instance
         */
    MsgDelegate.create = function create(properties) {
      return new MsgDelegate(properties);
    };

    /**
         * Encodes the specified MsgDelegate message. Does not implicitly {@link kava.MsgDelegate.verify|verify} messages.
         * @function encode
         * @memberof kava.MsgDelegate
         * @static
         * @param {kava.IMsgDelegate} message MsgDelegate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgDelegate.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      writer.uint32(/* id 1, wireType 2 = */10).bytes(message.DelegatorAddress);
      writer.uint32(/* id 2, wireType 2 = */18).bytes(message.ValidatorAddress);
      $root.kava.Coin.encode(message.Amount, writer.uint32(/* id 3, wireType 2 = */26).fork()).ldelim();
      return writer;
    };

    /**
         * Encodes the specified MsgDelegate message, length delimited. Does not implicitly {@link kava.MsgDelegate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kava.MsgDelegate
         * @static
         * @param {kava.IMsgDelegate} message MsgDelegate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgDelegate.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
         * Decodes a MsgDelegate message from the specified reader or buffer.
         * @function decode
         * @memberof kava.MsgDelegate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kava.MsgDelegate} MsgDelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgDelegate.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      var end = length === undefined ? reader.len : reader.pos + length; var
        message = new $root.kava.MsgDelegate();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.DelegatorAddress = reader.bytes();
            break;
          case 2:
            message.ValidatorAddress = reader.bytes();
            break;
          case 3:
            message.Amount = $root.kava.Coin.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty('DelegatorAddress')) { throw $util.ProtocolError("missing required 'DelegatorAddress'", { instance: message }); }
      if (!message.hasOwnProperty('ValidatorAddress')) { throw $util.ProtocolError("missing required 'ValidatorAddress'", { instance: message }); }
      if (!message.hasOwnProperty('Amount')) { throw $util.ProtocolError("missing required 'Amount'", { instance: message }); }
      return message;
    };

    /**
         * Decodes a MsgDelegate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kava.MsgDelegate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kava.MsgDelegate} MsgDelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgDelegate.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
         * Verifies a MsgDelegate message.
         * @function verify
         * @memberof kava.MsgDelegate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    MsgDelegate.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (!(message.DelegatorAddress && typeof message.DelegatorAddress.length === 'number' || $util.isString(message.DelegatorAddress))) { return 'DelegatorAddress: buffer expected'; }
      if (!(message.ValidatorAddress && typeof message.ValidatorAddress.length === 'number' || $util.isString(message.ValidatorAddress))) { return 'ValidatorAddress: buffer expected'; }
      {
        var error = $root.kava.Coin.verify(message.Amount);
        if (error) { return `Amount.${error}`; }
      }
      return null;
    };

    /**
         * Creates a MsgDelegate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kava.MsgDelegate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kava.MsgDelegate} MsgDelegate
         */
    MsgDelegate.fromObject = function fromObject(object) {
      if (object instanceof $root.kava.MsgDelegate) { return object; }
      var message = new $root.kava.MsgDelegate();
      if (object.DelegatorAddress != null) {
        if (typeof object.DelegatorAddress === 'string') $util.base64.decode(object.DelegatorAddress, message.DelegatorAddress = $util.newBuffer($util.base64.length(object.DelegatorAddress)), 0);
        else if (object.DelegatorAddress.length) message.DelegatorAddress = object.DelegatorAddress;
      }
      if (object.ValidatorAddress != null) {
        if (typeof object.ValidatorAddress === 'string') $util.base64.decode(object.ValidatorAddress, message.ValidatorAddress = $util.newBuffer($util.base64.length(object.ValidatorAddress)), 0);
        else if (object.ValidatorAddress.length) message.ValidatorAddress = object.ValidatorAddress;
      }
      if (object.Amount != null) {
        if (typeof object.Amount !== 'object') { throw TypeError('.kava.MsgDelegate.Amount: object expected'); }
        message.Amount = $root.kava.Coin.fromObject(object.Amount);
      }
      return message;
    };

    /**
         * Creates a plain object from a MsgDelegate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kava.MsgDelegate
         * @static
         * @param {kava.MsgDelegate} message MsgDelegate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    MsgDelegate.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      var object = {};
      if (options.defaults) {
        if (options.bytes === String) { object.DelegatorAddress = ''; } else {
          object.DelegatorAddress = [];
          if (options.bytes !== Array) { object.DelegatorAddress = $util.newBuffer(object.DelegatorAddress); }
        }
        if (options.bytes === String) { object.ValidatorAddress = ''; } else {
          object.ValidatorAddress = [];
          if (options.bytes !== Array) { object.ValidatorAddress = $util.newBuffer(object.ValidatorAddress); }
        }
        object.Amount = null;
      }
      if (message.DelegatorAddress != null && message.hasOwnProperty('DelegatorAddress')) { object.DelegatorAddress = options.bytes === String ? $util.base64.encode(message.DelegatorAddress, 0, message.DelegatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.DelegatorAddress) : message.DelegatorAddress; }
      if (message.ValidatorAddress != null && message.hasOwnProperty('ValidatorAddress')) { object.ValidatorAddress = options.bytes === String ? $util.base64.encode(message.ValidatorAddress, 0, message.ValidatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ValidatorAddress) : message.ValidatorAddress; }
      if (message.Amount != null && message.hasOwnProperty('Amount')) { object.Amount = $root.kava.Coin.toObject(message.Amount, options); }
      return object;
    };

    /**
         * Converts this MsgDelegate to JSON.
         * @function toJSON
         * @memberof kava.MsgDelegate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    MsgDelegate.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MsgDelegate;
  }());

  kava.MsgUndelegate = (function () {
    /**
         * Properties of a MsgUndelegate.
         * @memberof kava
         * @interface IMsgUndelegate
         * @property {Uint8Array} DelegatorAddress MsgUndelegate DelegatorAddress
         * @property {Uint8Array} ValidatorAddress MsgUndelegate ValidatorAddress
         * @property {kava.ICoin} Amount MsgUndelegate Amount
         */

    /**
         * Constructs a new MsgUndelegate.
         * @memberof kava
         * @classdesc Represents a MsgUndelegate.
         * @implements IMsgUndelegate
         * @constructor
         * @param {kava.IMsgUndelegate=} [properties] Properties to set
         */
    function MsgUndelegate(properties) {
      if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]; }
    }

    /**
         * MsgUndelegate DelegatorAddress.
         * @member {Uint8Array} DelegatorAddress
         * @memberof kava.MsgUndelegate
         * @instance
         */
    MsgUndelegate.prototype.DelegatorAddress = $util.newBuffer([]);

    /**
         * MsgUndelegate ValidatorAddress.
         * @member {Uint8Array} ValidatorAddress
         * @memberof kava.MsgUndelegate
         * @instance
         */
    MsgUndelegate.prototype.ValidatorAddress = $util.newBuffer([]);

    /**
         * MsgUndelegate Amount.
         * @member {kava.ICoin} Amount
         * @memberof kava.MsgUndelegate
         * @instance
         */
    MsgUndelegate.prototype.Amount = null;

    /**
         * Creates a new MsgUndelegate instance using the specified properties.
         * @function create
         * @memberof kava.MsgUndelegate
         * @static
         * @param {kava.IMsgUndelegate=} [properties] Properties to set
         * @returns {kava.MsgUndelegate} MsgUndelegate instance
         */
    MsgUndelegate.create = function create(properties) {
      return new MsgUndelegate(properties);
    };

    /**
         * Encodes the specified MsgUndelegate message. Does not implicitly {@link kava.MsgUndelegate.verify|verify} messages.
         * @function encode
         * @memberof kava.MsgUndelegate
         * @static
         * @param {kava.IMsgUndelegate} message MsgUndelegate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgUndelegate.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      writer.uint32(/* id 1, wireType 2 = */10).bytes(message.DelegatorAddress);
      writer.uint32(/* id 2, wireType 2 = */18).bytes(message.ValidatorAddress);
      $root.kava.Coin.encode(message.Amount, writer.uint32(/* id 3, wireType 2 = */26).fork()).ldelim();
      return writer;
    };

    /**
         * Encodes the specified MsgUndelegate message, length delimited. Does not implicitly {@link kava.MsgUndelegate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kava.MsgUndelegate
         * @static
         * @param {kava.IMsgUndelegate} message MsgUndelegate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgUndelegate.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
         * Decodes a MsgUndelegate message from the specified reader or buffer.
         * @function decode
         * @memberof kava.MsgUndelegate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kava.MsgUndelegate} MsgUndelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgUndelegate.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      var end = length === undefined ? reader.len : reader.pos + length; var
        message = new $root.kava.MsgUndelegate();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.DelegatorAddress = reader.bytes();
            break;
          case 2:
            message.ValidatorAddress = reader.bytes();
            break;
          case 3:
            message.Amount = $root.kava.Coin.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty('DelegatorAddress')) { throw $util.ProtocolError("missing required 'DelegatorAddress'", { instance: message }); }
      if (!message.hasOwnProperty('ValidatorAddress')) { throw $util.ProtocolError("missing required 'ValidatorAddress'", { instance: message }); }
      if (!message.hasOwnProperty('Amount')) { throw $util.ProtocolError("missing required 'Amount'", { instance: message }); }
      return message;
    };

    /**
         * Decodes a MsgUndelegate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kava.MsgUndelegate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kava.MsgUndelegate} MsgUndelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgUndelegate.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
         * Verifies a MsgUndelegate message.
         * @function verify
         * @memberof kava.MsgUndelegate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    MsgUndelegate.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (!(message.DelegatorAddress && typeof message.DelegatorAddress.length === 'number' || $util.isString(message.DelegatorAddress))) { return 'DelegatorAddress: buffer expected'; }
      if (!(message.ValidatorAddress && typeof message.ValidatorAddress.length === 'number' || $util.isString(message.ValidatorAddress))) { return 'ValidatorAddress: buffer expected'; }
      {
        var error = $root.kava.Coin.verify(message.Amount);
        if (error) { return `Amount.${error}`; }
      }
      return null;
    };

    /**
         * Creates a MsgUndelegate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kava.MsgUndelegate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kava.MsgUndelegate} MsgUndelegate
         */
    MsgUndelegate.fromObject = function fromObject(object) {
      if (object instanceof $root.kava.MsgUndelegate) { return object; }
      var message = new $root.kava.MsgUndelegate();
      if (object.DelegatorAddress != null) {
        if (typeof object.DelegatorAddress === 'string') $util.base64.decode(object.DelegatorAddress, message.DelegatorAddress = $util.newBuffer($util.base64.length(object.DelegatorAddress)), 0);
        else if (object.DelegatorAddress.length) message.DelegatorAddress = object.DelegatorAddress;
      }
      if (object.ValidatorAddress != null) {
        if (typeof object.ValidatorAddress === 'string') $util.base64.decode(object.ValidatorAddress, message.ValidatorAddress = $util.newBuffer($util.base64.length(object.ValidatorAddress)), 0);
        else if (object.ValidatorAddress.length) message.ValidatorAddress = object.ValidatorAddress;
      }
      if (object.Amount != null) {
        if (typeof object.Amount !== 'object') { throw TypeError('.kava.MsgUndelegate.Amount: object expected'); }
        message.Amount = $root.kava.Coin.fromObject(object.Amount);
      }
      return message;
    };

    /**
         * Creates a plain object from a MsgUndelegate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kava.MsgUndelegate
         * @static
         * @param {kava.MsgUndelegate} message MsgUndelegate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    MsgUndelegate.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      var object = {};
      if (options.defaults) {
        if (options.bytes === String) { object.DelegatorAddress = ''; } else {
          object.DelegatorAddress = [];
          if (options.bytes !== Array) { object.DelegatorAddress = $util.newBuffer(object.DelegatorAddress); }
        }
        if (options.bytes === String) { object.ValidatorAddress = ''; } else {
          object.ValidatorAddress = [];
          if (options.bytes !== Array) { object.ValidatorAddress = $util.newBuffer(object.ValidatorAddress); }
        }
        object.Amount = null;
      }
      if (message.DelegatorAddress != null && message.hasOwnProperty('DelegatorAddress')) { object.DelegatorAddress = options.bytes === String ? $util.base64.encode(message.DelegatorAddress, 0, message.DelegatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.DelegatorAddress) : message.DelegatorAddress; }
      if (message.ValidatorAddress != null && message.hasOwnProperty('ValidatorAddress')) { object.ValidatorAddress = options.bytes === String ? $util.base64.encode(message.ValidatorAddress, 0, message.ValidatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ValidatorAddress) : message.ValidatorAddress; }
      if (message.Amount != null && message.hasOwnProperty('Amount')) { object.Amount = $root.kava.Coin.toObject(message.Amount, options); }
      return object;
    };

    /**
         * Converts this MsgUndelegate to JSON.
         * @function toJSON
         * @memberof kava.MsgUndelegate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    MsgUndelegate.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MsgUndelegate;
  }());

  kava.MsgBeginRedelegate = (function () {
    /**
         * Properties of a MsgBeginRedelegate.
         * @memberof kava
         * @interface IMsgBeginRedelegate
         * @property {Uint8Array} DelegatorAddress MsgBeginRedelegate DelegatorAddress
         * @property {Uint8Array} ValidatorSrcAddress MsgBeginRedelegate ValidatorSrcAddress
         * @property {Uint8Array} ValidatorDstAddress MsgBeginRedelegate ValidatorDstAddress
         * @property {kava.ICoin} Amount MsgBeginRedelegate Amount
         */

    /**
         * Constructs a new MsgBeginRedelegate.
         * @memberof kava
         * @classdesc Represents a MsgBeginRedelegate.
         * @implements IMsgBeginRedelegate
         * @constructor
         * @param {kava.IMsgBeginRedelegate=} [properties] Properties to set
         */
    function MsgBeginRedelegate(properties) {
      if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]; }
    }

    /**
         * MsgBeginRedelegate DelegatorAddress.
         * @member {Uint8Array} DelegatorAddress
         * @memberof kava.MsgBeginRedelegate
         * @instance
         */
    MsgBeginRedelegate.prototype.DelegatorAddress = $util.newBuffer([]);

    /**
         * MsgBeginRedelegate ValidatorSrcAddress.
         * @member {Uint8Array} ValidatorSrcAddress
         * @memberof kava.MsgBeginRedelegate
         * @instance
         */
    MsgBeginRedelegate.prototype.ValidatorSrcAddress = $util.newBuffer([]);

    /**
         * MsgBeginRedelegate ValidatorDstAddress.
         * @member {Uint8Array} ValidatorDstAddress
         * @memberof kava.MsgBeginRedelegate
         * @instance
         */
    MsgBeginRedelegate.prototype.ValidatorDstAddress = $util.newBuffer([]);

    /**
         * MsgBeginRedelegate Amount.
         * @member {kava.ICoin} Amount
         * @memberof kava.MsgBeginRedelegate
         * @instance
         */
    MsgBeginRedelegate.prototype.Amount = null;

    /**
         * Creates a new MsgBeginRedelegate instance using the specified properties.
         * @function create
         * @memberof kava.MsgBeginRedelegate
         * @static
         * @param {kava.IMsgBeginRedelegate=} [properties] Properties to set
         * @returns {kava.MsgBeginRedelegate} MsgBeginRedelegate instance
         */
    MsgBeginRedelegate.create = function create(properties) {
      return new MsgBeginRedelegate(properties);
    };

    /**
         * Encodes the specified MsgBeginRedelegate message. Does not implicitly {@link kava.MsgBeginRedelegate.verify|verify} messages.
         * @function encode
         * @memberof kava.MsgBeginRedelegate
         * @static
         * @param {kava.IMsgBeginRedelegate} message MsgBeginRedelegate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgBeginRedelegate.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      writer.uint32(/* id 1, wireType 2 = */10).bytes(message.DelegatorAddress);
      writer.uint32(/* id 2, wireType 2 = */18).bytes(message.ValidatorSrcAddress);
      writer.uint32(/* id 3, wireType 2 = */26).bytes(message.ValidatorDstAddress);
      $root.kava.Coin.encode(message.Amount, writer.uint32(/* id 4, wireType 2 = */34).fork()).ldelim();
      return writer;
    };

    /**
         * Encodes the specified MsgBeginRedelegate message, length delimited. Does not implicitly {@link kava.MsgBeginRedelegate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kava.MsgBeginRedelegate
         * @static
         * @param {kava.IMsgBeginRedelegate} message MsgBeginRedelegate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgBeginRedelegate.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
         * Decodes a MsgBeginRedelegate message from the specified reader or buffer.
         * @function decode
         * @memberof kava.MsgBeginRedelegate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kava.MsgBeginRedelegate} MsgBeginRedelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgBeginRedelegate.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      var end = length === undefined ? reader.len : reader.pos + length; var
        message = new $root.kava.MsgBeginRedelegate();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.DelegatorAddress = reader.bytes();
            break;
          case 2:
            message.ValidatorSrcAddress = reader.bytes();
            break;
          case 3:
            message.ValidatorDstAddress = reader.bytes();
            break;
          case 4:
            message.Amount = $root.kava.Coin.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty('DelegatorAddress')) { throw $util.ProtocolError("missing required 'DelegatorAddress'", { instance: message }); }
      if (!message.hasOwnProperty('ValidatorSrcAddress')) { throw $util.ProtocolError("missing required 'ValidatorSrcAddress'", { instance: message }); }
      if (!message.hasOwnProperty('ValidatorDstAddress')) { throw $util.ProtocolError("missing required 'ValidatorDstAddress'", { instance: message }); }
      if (!message.hasOwnProperty('Amount')) { throw $util.ProtocolError("missing required 'Amount'", { instance: message }); }
      return message;
    };

    /**
         * Decodes a MsgBeginRedelegate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kava.MsgBeginRedelegate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kava.MsgBeginRedelegate} MsgBeginRedelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgBeginRedelegate.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
         * Verifies a MsgBeginRedelegate message.
         * @function verify
         * @memberof kava.MsgBeginRedelegate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    MsgBeginRedelegate.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (!(message.DelegatorAddress && typeof message.DelegatorAddress.length === 'number' || $util.isString(message.DelegatorAddress))) { return 'DelegatorAddress: buffer expected'; }
      if (!(message.ValidatorSrcAddress && typeof message.ValidatorSrcAddress.length === 'number' || $util.isString(message.ValidatorSrcAddress))) { return 'ValidatorSrcAddress: buffer expected'; }
      if (!(message.ValidatorDstAddress && typeof message.ValidatorDstAddress.length === 'number' || $util.isString(message.ValidatorDstAddress))) { return 'ValidatorDstAddress: buffer expected'; }
      {
        var error = $root.kava.Coin.verify(message.Amount);
        if (error) { return `Amount.${error}`; }
      }
      return null;
    };

    /**
         * Creates a MsgBeginRedelegate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kava.MsgBeginRedelegate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kava.MsgBeginRedelegate} MsgBeginRedelegate
         */
    MsgBeginRedelegate.fromObject = function fromObject(object) {
      if (object instanceof $root.kava.MsgBeginRedelegate) { return object; }
      var message = new $root.kava.MsgBeginRedelegate();
      if (object.DelegatorAddress != null) {
        if (typeof object.DelegatorAddress === 'string') $util.base64.decode(object.DelegatorAddress, message.DelegatorAddress = $util.newBuffer($util.base64.length(object.DelegatorAddress)), 0);
        else if (object.DelegatorAddress.length) message.DelegatorAddress = object.DelegatorAddress;
      }
      if (object.ValidatorSrcAddress != null) {
        if (typeof object.ValidatorSrcAddress === 'string') $util.base64.decode(object.ValidatorSrcAddress, message.ValidatorSrcAddress = $util.newBuffer($util.base64.length(object.ValidatorSrcAddress)), 0);
        else if (object.ValidatorSrcAddress.length) message.ValidatorSrcAddress = object.ValidatorSrcAddress;
      }
      if (object.ValidatorDstAddress != null) {
        if (typeof object.ValidatorDstAddress === 'string') $util.base64.decode(object.ValidatorDstAddress, message.ValidatorDstAddress = $util.newBuffer($util.base64.length(object.ValidatorDstAddress)), 0);
        else if (object.ValidatorDstAddress.length) message.ValidatorDstAddress = object.ValidatorDstAddress;
      }
      if (object.Amount != null) {
        if (typeof object.Amount !== 'object') { throw TypeError('.kava.MsgBeginRedelegate.Amount: object expected'); }
        message.Amount = $root.kava.Coin.fromObject(object.Amount);
      }
      return message;
    };

    /**
         * Creates a plain object from a MsgBeginRedelegate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kava.MsgBeginRedelegate
         * @static
         * @param {kava.MsgBeginRedelegate} message MsgBeginRedelegate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    MsgBeginRedelegate.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      var object = {};
      if (options.defaults) {
        if (options.bytes === String) { object.DelegatorAddress = ''; } else {
          object.DelegatorAddress = [];
          if (options.bytes !== Array) { object.DelegatorAddress = $util.newBuffer(object.DelegatorAddress); }
        }
        if (options.bytes === String) { object.ValidatorSrcAddress = ''; } else {
          object.ValidatorSrcAddress = [];
          if (options.bytes !== Array) { object.ValidatorSrcAddress = $util.newBuffer(object.ValidatorSrcAddress); }
        }
        if (options.bytes === String) { object.ValidatorDstAddress = ''; } else {
          object.ValidatorDstAddress = [];
          if (options.bytes !== Array) { object.ValidatorDstAddress = $util.newBuffer(object.ValidatorDstAddress); }
        }
        object.Amount = null;
      }
      if (message.DelegatorAddress != null && message.hasOwnProperty('DelegatorAddress')) { object.DelegatorAddress = options.bytes === String ? $util.base64.encode(message.DelegatorAddress, 0, message.DelegatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.DelegatorAddress) : message.DelegatorAddress; }
      if (message.ValidatorSrcAddress != null && message.hasOwnProperty('ValidatorSrcAddress')) { object.ValidatorSrcAddress = options.bytes === String ? $util.base64.encode(message.ValidatorSrcAddress, 0, message.ValidatorSrcAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ValidatorSrcAddress) : message.ValidatorSrcAddress; }
      if (message.ValidatorDstAddress != null && message.hasOwnProperty('ValidatorDstAddress')) { object.ValidatorDstAddress = options.bytes === String ? $util.base64.encode(message.ValidatorDstAddress, 0, message.ValidatorDstAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ValidatorDstAddress) : message.ValidatorDstAddress; }
      if (message.Amount != null && message.hasOwnProperty('Amount')) { object.Amount = $root.kava.Coin.toObject(message.Amount, options); }
      return object;
    };

    /**
         * Converts this MsgBeginRedelegate to JSON.
         * @function toJSON
         * @memberof kava.MsgBeginRedelegate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    MsgBeginRedelegate.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MsgBeginRedelegate;
  }());

  kava.MsgSetWithdrawAddress = (function () {
    /**
         * Properties of a MsgSetWithdrawAddress.
         * @memberof kava
         * @interface IMsgSetWithdrawAddress
         * @property {Uint8Array} DelegatorAddress MsgSetWithdrawAddress DelegatorAddress
         * @property {Uint8Array} WithdrawAddress MsgSetWithdrawAddress WithdrawAddress
         */

    /**
         * Constructs a new MsgSetWithdrawAddress.
         * @memberof kava
         * @classdesc Represents a MsgSetWithdrawAddress.
         * @implements IMsgSetWithdrawAddress
         * @constructor
         * @param {kava.IMsgSetWithdrawAddress=} [properties] Properties to set
         */
    function MsgSetWithdrawAddress(properties) {
      if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]; }
    }

    /**
         * MsgSetWithdrawAddress DelegatorAddress.
         * @member {Uint8Array} DelegatorAddress
         * @memberof kava.MsgSetWithdrawAddress
         * @instance
         */
    MsgSetWithdrawAddress.prototype.DelegatorAddress = $util.newBuffer([]);

    /**
         * MsgSetWithdrawAddress WithdrawAddress.
         * @member {Uint8Array} WithdrawAddress
         * @memberof kava.MsgSetWithdrawAddress
         * @instance
         */
    MsgSetWithdrawAddress.prototype.WithdrawAddress = $util.newBuffer([]);

    /**
         * Creates a new MsgSetWithdrawAddress instance using the specified properties.
         * @function create
         * @memberof kava.MsgSetWithdrawAddress
         * @static
         * @param {kava.IMsgSetWithdrawAddress=} [properties] Properties to set
         * @returns {kava.MsgSetWithdrawAddress} MsgSetWithdrawAddress instance
         */
    MsgSetWithdrawAddress.create = function create(properties) {
      return new MsgSetWithdrawAddress(properties);
    };

    /**
         * Encodes the specified MsgSetWithdrawAddress message. Does not implicitly {@link kava.MsgSetWithdrawAddress.verify|verify} messages.
         * @function encode
         * @memberof kava.MsgSetWithdrawAddress
         * @static
         * @param {kava.IMsgSetWithdrawAddress} message MsgSetWithdrawAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgSetWithdrawAddress.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      writer.uint32(/* id 1, wireType 2 = */10).bytes(message.DelegatorAddress);
      writer.uint32(/* id 2, wireType 2 = */18).bytes(message.WithdrawAddress);
      return writer;
    };

    /**
         * Encodes the specified MsgSetWithdrawAddress message, length delimited. Does not implicitly {@link kava.MsgSetWithdrawAddress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kava.MsgSetWithdrawAddress
         * @static
         * @param {kava.IMsgSetWithdrawAddress} message MsgSetWithdrawAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgSetWithdrawAddress.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
         * Decodes a MsgSetWithdrawAddress message from the specified reader or buffer.
         * @function decode
         * @memberof kava.MsgSetWithdrawAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kava.MsgSetWithdrawAddress} MsgSetWithdrawAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgSetWithdrawAddress.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      var end = length === undefined ? reader.len : reader.pos + length; var
        message = new $root.kava.MsgSetWithdrawAddress();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.DelegatorAddress = reader.bytes();
            break;
          case 2:
            message.WithdrawAddress = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty('DelegatorAddress')) { throw $util.ProtocolError("missing required 'DelegatorAddress'", { instance: message }); }
      if (!message.hasOwnProperty('WithdrawAddress')) { throw $util.ProtocolError("missing required 'WithdrawAddress'", { instance: message }); }
      return message;
    };

    /**
         * Decodes a MsgSetWithdrawAddress message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kava.MsgSetWithdrawAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kava.MsgSetWithdrawAddress} MsgSetWithdrawAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgSetWithdrawAddress.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
         * Verifies a MsgSetWithdrawAddress message.
         * @function verify
         * @memberof kava.MsgSetWithdrawAddress
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    MsgSetWithdrawAddress.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (!(message.DelegatorAddress && typeof message.DelegatorAddress.length === 'number' || $util.isString(message.DelegatorAddress))) { return 'DelegatorAddress: buffer expected'; }
      if (!(message.WithdrawAddress && typeof message.WithdrawAddress.length === 'number' || $util.isString(message.WithdrawAddress))) { return 'WithdrawAddress: buffer expected'; }
      return null;
    };

    /**
         * Creates a MsgSetWithdrawAddress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kava.MsgSetWithdrawAddress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kava.MsgSetWithdrawAddress} MsgSetWithdrawAddress
         */
    MsgSetWithdrawAddress.fromObject = function fromObject(object) {
      if (object instanceof $root.kava.MsgSetWithdrawAddress) { return object; }
      var message = new $root.kava.MsgSetWithdrawAddress();
      if (object.DelegatorAddress != null) {
        if (typeof object.DelegatorAddress === 'string') $util.base64.decode(object.DelegatorAddress, message.DelegatorAddress = $util.newBuffer($util.base64.length(object.DelegatorAddress)), 0);
        else if (object.DelegatorAddress.length) message.DelegatorAddress = object.DelegatorAddress;
      }
      if (object.WithdrawAddress != null) {
        if (typeof object.WithdrawAddress === 'string') $util.base64.decode(object.WithdrawAddress, message.WithdrawAddress = $util.newBuffer($util.base64.length(object.WithdrawAddress)), 0);
        else if (object.WithdrawAddress.length) message.WithdrawAddress = object.WithdrawAddress;
      }
      return message;
    };

    /**
         * Creates a plain object from a MsgSetWithdrawAddress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kava.MsgSetWithdrawAddress
         * @static
         * @param {kava.MsgSetWithdrawAddress} message MsgSetWithdrawAddress
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    MsgSetWithdrawAddress.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      var object = {};
      if (options.defaults) {
        if (options.bytes === String) { object.DelegatorAddress = ''; } else {
          object.DelegatorAddress = [];
          if (options.bytes !== Array) { object.DelegatorAddress = $util.newBuffer(object.DelegatorAddress); }
        }
        if (options.bytes === String) { object.WithdrawAddress = ''; } else {
          object.WithdrawAddress = [];
          if (options.bytes !== Array) { object.WithdrawAddress = $util.newBuffer(object.WithdrawAddress); }
        }
      }
      if (message.DelegatorAddress != null && message.hasOwnProperty('DelegatorAddress')) { object.DelegatorAddress = options.bytes === String ? $util.base64.encode(message.DelegatorAddress, 0, message.DelegatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.DelegatorAddress) : message.DelegatorAddress; }
      if (message.WithdrawAddress != null && message.hasOwnProperty('WithdrawAddress')) { object.WithdrawAddress = options.bytes === String ? $util.base64.encode(message.WithdrawAddress, 0, message.WithdrawAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.WithdrawAddress) : message.WithdrawAddress; }
      return object;
    };

    /**
         * Converts this MsgSetWithdrawAddress to JSON.
         * @function toJSON
         * @memberof kava.MsgSetWithdrawAddress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    MsgSetWithdrawAddress.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MsgSetWithdrawAddress;
  }());

  kava.MsgWithdrawDelegatorReward = (function () {
    /**
         * Properties of a MsgWithdrawDelegatorReward.
         * @memberof kava
         * @interface IMsgWithdrawDelegatorReward
         * @property {Uint8Array} DelegatorAddress MsgWithdrawDelegatorReward DelegatorAddress
         * @property {Uint8Array} ValidatorAddress MsgWithdrawDelegatorReward ValidatorAddress
         */

    /**
         * Constructs a new MsgWithdrawDelegatorReward.
         * @memberof kava
         * @classdesc Represents a MsgWithdrawDelegatorReward.
         * @implements IMsgWithdrawDelegatorReward
         * @constructor
         * @param {kava.IMsgWithdrawDelegatorReward=} [properties] Properties to set
         */
    function MsgWithdrawDelegatorReward(properties) {
      if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]; }
    }

    /**
         * MsgWithdrawDelegatorReward DelegatorAddress.
         * @member {Uint8Array} DelegatorAddress
         * @memberof kava.MsgWithdrawDelegatorReward
         * @instance
         */
    MsgWithdrawDelegatorReward.prototype.DelegatorAddress = $util.newBuffer([]);

    /**
         * MsgWithdrawDelegatorReward ValidatorAddress.
         * @member {Uint8Array} ValidatorAddress
         * @memberof kava.MsgWithdrawDelegatorReward
         * @instance
         */
    MsgWithdrawDelegatorReward.prototype.ValidatorAddress = $util.newBuffer([]);

    /**
         * Creates a new MsgWithdrawDelegatorReward instance using the specified properties.
         * @function create
         * @memberof kava.MsgWithdrawDelegatorReward
         * @static
         * @param {kava.IMsgWithdrawDelegatorReward=} [properties] Properties to set
         * @returns {kava.MsgWithdrawDelegatorReward} MsgWithdrawDelegatorReward instance
         */
    MsgWithdrawDelegatorReward.create = function create(properties) {
      return new MsgWithdrawDelegatorReward(properties);
    };

    /**
         * Encodes the specified MsgWithdrawDelegatorReward message. Does not implicitly {@link kava.MsgWithdrawDelegatorReward.verify|verify} messages.
         * @function encode
         * @memberof kava.MsgWithdrawDelegatorReward
         * @static
         * @param {kava.IMsgWithdrawDelegatorReward} message MsgWithdrawDelegatorReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgWithdrawDelegatorReward.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      writer.uint32(/* id 1, wireType 2 = */10).bytes(message.DelegatorAddress);
      writer.uint32(/* id 2, wireType 2 = */18).bytes(message.ValidatorAddress);
      return writer;
    };

    /**
         * Encodes the specified MsgWithdrawDelegatorReward message, length delimited. Does not implicitly {@link kava.MsgWithdrawDelegatorReward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kava.MsgWithdrawDelegatorReward
         * @static
         * @param {kava.IMsgWithdrawDelegatorReward} message MsgWithdrawDelegatorReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgWithdrawDelegatorReward.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
         * Decodes a MsgWithdrawDelegatorReward message from the specified reader or buffer.
         * @function decode
         * @memberof kava.MsgWithdrawDelegatorReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kava.MsgWithdrawDelegatorReward} MsgWithdrawDelegatorReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgWithdrawDelegatorReward.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      var end = length === undefined ? reader.len : reader.pos + length; var
        message = new $root.kava.MsgWithdrawDelegatorReward();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.DelegatorAddress = reader.bytes();
            break;
          case 2:
            message.ValidatorAddress = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty('DelegatorAddress')) { throw $util.ProtocolError("missing required 'DelegatorAddress'", { instance: message }); }
      if (!message.hasOwnProperty('ValidatorAddress')) { throw $util.ProtocolError("missing required 'ValidatorAddress'", { instance: message }); }
      return message;
    };

    /**
         * Decodes a MsgWithdrawDelegatorReward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kava.MsgWithdrawDelegatorReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kava.MsgWithdrawDelegatorReward} MsgWithdrawDelegatorReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgWithdrawDelegatorReward.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
         * Verifies a MsgWithdrawDelegatorReward message.
         * @function verify
         * @memberof kava.MsgWithdrawDelegatorReward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    MsgWithdrawDelegatorReward.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (!(message.DelegatorAddress && typeof message.DelegatorAddress.length === 'number' || $util.isString(message.DelegatorAddress))) { return 'DelegatorAddress: buffer expected'; }
      if (!(message.ValidatorAddress && typeof message.ValidatorAddress.length === 'number' || $util.isString(message.ValidatorAddress))) { return 'ValidatorAddress: buffer expected'; }
      return null;
    };

    /**
         * Creates a MsgWithdrawDelegatorReward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kava.MsgWithdrawDelegatorReward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kava.MsgWithdrawDelegatorReward} MsgWithdrawDelegatorReward
         */
    MsgWithdrawDelegatorReward.fromObject = function fromObject(object) {
      if (object instanceof $root.kava.MsgWithdrawDelegatorReward) { return object; }
      var message = new $root.kava.MsgWithdrawDelegatorReward();
      if (object.DelegatorAddress != null) {
        if (typeof object.DelegatorAddress === 'string') $util.base64.decode(object.DelegatorAddress, message.DelegatorAddress = $util.newBuffer($util.base64.length(object.DelegatorAddress)), 0);
        else if (object.DelegatorAddress.length) message.DelegatorAddress = object.DelegatorAddress;
      }
      if (object.ValidatorAddress != null) {
        if (typeof object.ValidatorAddress === 'string') $util.base64.decode(object.ValidatorAddress, message.ValidatorAddress = $util.newBuffer($util.base64.length(object.ValidatorAddress)), 0);
        else if (object.ValidatorAddress.length) message.ValidatorAddress = object.ValidatorAddress;
      }
      return message;
    };

    /**
         * Creates a plain object from a MsgWithdrawDelegatorReward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kava.MsgWithdrawDelegatorReward
         * @static
         * @param {kava.MsgWithdrawDelegatorReward} message MsgWithdrawDelegatorReward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    MsgWithdrawDelegatorReward.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      var object = {};
      if (options.defaults) {
        if (options.bytes === String) { object.DelegatorAddress = ''; } else {
          object.DelegatorAddress = [];
          if (options.bytes !== Array) { object.DelegatorAddress = $util.newBuffer(object.DelegatorAddress); }
        }
        if (options.bytes === String) { object.ValidatorAddress = ''; } else {
          object.ValidatorAddress = [];
          if (options.bytes !== Array) { object.ValidatorAddress = $util.newBuffer(object.ValidatorAddress); }
        }
      }
      if (message.DelegatorAddress != null && message.hasOwnProperty('DelegatorAddress')) { object.DelegatorAddress = options.bytes === String ? $util.base64.encode(message.DelegatorAddress, 0, message.DelegatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.DelegatorAddress) : message.DelegatorAddress; }
      if (message.ValidatorAddress != null && message.hasOwnProperty('ValidatorAddress')) { object.ValidatorAddress = options.bytes === String ? $util.base64.encode(message.ValidatorAddress, 0, message.ValidatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ValidatorAddress) : message.ValidatorAddress; }
      return object;
    };

    /**
         * Converts this MsgWithdrawDelegatorReward to JSON.
         * @function toJSON
         * @memberof kava.MsgWithdrawDelegatorReward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    MsgWithdrawDelegatorReward.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MsgWithdrawDelegatorReward;
  }());

  kava.MsgWithdrawValidatorCommission = (function () {
    /**
         * Properties of a MsgWithdrawValidatorCommission.
         * @memberof kava
         * @interface IMsgWithdrawValidatorCommission
         * @property {Uint8Array} ValidatorAddress MsgWithdrawValidatorCommission ValidatorAddress
         */

    /**
         * Constructs a new MsgWithdrawValidatorCommission.
         * @memberof kava
         * @classdesc Represents a MsgWithdrawValidatorCommission.
         * @implements IMsgWithdrawValidatorCommission
         * @constructor
         * @param {kava.IMsgWithdrawValidatorCommission=} [properties] Properties to set
         */
    function MsgWithdrawValidatorCommission(properties) {
      if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]; }
    }

    /**
         * MsgWithdrawValidatorCommission ValidatorAddress.
         * @member {Uint8Array} ValidatorAddress
         * @memberof kava.MsgWithdrawValidatorCommission
         * @instance
         */
    MsgWithdrawValidatorCommission.prototype.ValidatorAddress = $util.newBuffer([]);

    /**
         * Creates a new MsgWithdrawValidatorCommission instance using the specified properties.
         * @function create
         * @memberof kava.MsgWithdrawValidatorCommission
         * @static
         * @param {kava.IMsgWithdrawValidatorCommission=} [properties] Properties to set
         * @returns {kava.MsgWithdrawValidatorCommission} MsgWithdrawValidatorCommission instance
         */
    MsgWithdrawValidatorCommission.create = function create(properties) {
      return new MsgWithdrawValidatorCommission(properties);
    };

    /**
         * Encodes the specified MsgWithdrawValidatorCommission message. Does not implicitly {@link kava.MsgWithdrawValidatorCommission.verify|verify} messages.
         * @function encode
         * @memberof kava.MsgWithdrawValidatorCommission
         * @static
         * @param {kava.IMsgWithdrawValidatorCommission} message MsgWithdrawValidatorCommission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgWithdrawValidatorCommission.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      writer.uint32(/* id 1, wireType 2 = */10).bytes(message.ValidatorAddress);
      return writer;
    };

    /**
         * Encodes the specified MsgWithdrawValidatorCommission message, length delimited. Does not implicitly {@link kava.MsgWithdrawValidatorCommission.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kava.MsgWithdrawValidatorCommission
         * @static
         * @param {kava.IMsgWithdrawValidatorCommission} message MsgWithdrawValidatorCommission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgWithdrawValidatorCommission.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
         * Decodes a MsgWithdrawValidatorCommission message from the specified reader or buffer.
         * @function decode
         * @memberof kava.MsgWithdrawValidatorCommission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kava.MsgWithdrawValidatorCommission} MsgWithdrawValidatorCommission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgWithdrawValidatorCommission.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      var end = length === undefined ? reader.len : reader.pos + length; var
        message = new $root.kava.MsgWithdrawValidatorCommission();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.ValidatorAddress = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty('ValidatorAddress')) { throw $util.ProtocolError("missing required 'ValidatorAddress'", { instance: message }); }
      return message;
    };

    /**
         * Decodes a MsgWithdrawValidatorCommission message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kava.MsgWithdrawValidatorCommission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kava.MsgWithdrawValidatorCommission} MsgWithdrawValidatorCommission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgWithdrawValidatorCommission.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
         * Verifies a MsgWithdrawValidatorCommission message.
         * @function verify
         * @memberof kava.MsgWithdrawValidatorCommission
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    MsgWithdrawValidatorCommission.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (!(message.ValidatorAddress && typeof message.ValidatorAddress.length === 'number' || $util.isString(message.ValidatorAddress))) { return 'ValidatorAddress: buffer expected'; }
      return null;
    };

    /**
         * Creates a MsgWithdrawValidatorCommission message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kava.MsgWithdrawValidatorCommission
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kava.MsgWithdrawValidatorCommission} MsgWithdrawValidatorCommission
         */
    MsgWithdrawValidatorCommission.fromObject = function fromObject(object) {
      if (object instanceof $root.kava.MsgWithdrawValidatorCommission) { return object; }
      var message = new $root.kava.MsgWithdrawValidatorCommission();
      if (object.ValidatorAddress != null) {
        if (typeof object.ValidatorAddress === 'string') $util.base64.decode(object.ValidatorAddress, message.ValidatorAddress = $util.newBuffer($util.base64.length(object.ValidatorAddress)), 0);
        else if (object.ValidatorAddress.length) message.ValidatorAddress = object.ValidatorAddress;
      }
      return message;
    };

    /**
         * Creates a plain object from a MsgWithdrawValidatorCommission message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kava.MsgWithdrawValidatorCommission
         * @static
         * @param {kava.MsgWithdrawValidatorCommission} message MsgWithdrawValidatorCommission
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    MsgWithdrawValidatorCommission.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      var object = {};
      if (options.defaults) {
        if (options.bytes === String) object.ValidatorAddress = '';
        else {
          object.ValidatorAddress = [];
          if (options.bytes !== Array) object.ValidatorAddress = $util.newBuffer(object.ValidatorAddress);
        }
      }
      if (message.ValidatorAddress != null && message.hasOwnProperty('ValidatorAddress')) { object.ValidatorAddress = options.bytes === String ? $util.base64.encode(message.ValidatorAddress, 0, message.ValidatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ValidatorAddress) : message.ValidatorAddress; }
      return object;
    };

    /**
         * Converts this MsgWithdrawValidatorCommission to JSON.
         * @function toJSON
         * @memberof kava.MsgWithdrawValidatorCommission
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    MsgWithdrawValidatorCommission.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MsgWithdrawValidatorCommission;
  }());

  kava.MsgDeposit = (function () {
    /**
         * Properties of a MsgDeposit.
         * @memberof kava
         * @interface IMsgDeposit
         * @property {number|Long} proposalID MsgDeposit proposalID
         * @property {Uint8Array} depositor MsgDeposit depositor
         * @property {Array.<kava.ICoin>|null} [amount] MsgDeposit amount
         */

    /**
         * Constructs a new MsgDeposit.
         * @memberof kava
         * @classdesc Represents a MsgDeposit.
         * @implements IMsgDeposit
         * @constructor
         * @param {kava.IMsgDeposit=} [properties] Properties to set
         */
    function MsgDeposit(properties) {
      this.amount = [];
      if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]; }
    }

    /**
         * MsgDeposit proposalID.
         * @member {number|Long} proposalID
         * @memberof kava.MsgDeposit
         * @instance
         */
    MsgDeposit.prototype.proposalID = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
         * MsgDeposit depositor.
         * @member {Uint8Array} depositor
         * @memberof kava.MsgDeposit
         * @instance
         */
    MsgDeposit.prototype.depositor = $util.newBuffer([]);

    /**
         * MsgDeposit amount.
         * @member {Array.<kava.ICoin>} amount
         * @memberof kava.MsgDeposit
         * @instance
         */
    MsgDeposit.prototype.amount = $util.emptyArray;

    /**
         * Creates a new MsgDeposit instance using the specified properties.
         * @function create
         * @memberof kava.MsgDeposit
         * @static
         * @param {kava.IMsgDeposit=} [properties] Properties to set
         * @returns {kava.MsgDeposit} MsgDeposit instance
         */
    MsgDeposit.create = function create(properties) {
      return new MsgDeposit(properties);
    };

    /**
         * Encodes the specified MsgDeposit message. Does not implicitly {@link kava.MsgDeposit.verify|verify} messages.
         * @function encode
         * @memberof kava.MsgDeposit
         * @static
         * @param {kava.IMsgDeposit} message MsgDeposit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgDeposit.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      writer.uint32(/* id 1, wireType 0 = */8).int64(message.proposalID);
      writer.uint32(/* id 2, wireType 2 = */18).bytes(message.depositor);
      if (message.amount != null && message.amount.length) { for (var i = 0; i < message.amount.length; ++i) $root.kava.Coin.encode(message.amount[i], writer.uint32(/* id 3, wireType 2 = */26).fork()).ldelim(); }
      return writer;
    };

    /**
         * Encodes the specified MsgDeposit message, length delimited. Does not implicitly {@link kava.MsgDeposit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kava.MsgDeposit
         * @static
         * @param {kava.IMsgDeposit} message MsgDeposit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgDeposit.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
         * Decodes a MsgDeposit message from the specified reader or buffer.
         * @function decode
         * @memberof kava.MsgDeposit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kava.MsgDeposit} MsgDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgDeposit.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      var end = length === undefined ? reader.len : reader.pos + length; var
        message = new $root.kava.MsgDeposit();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.proposalID = reader.int64();
            break;
          case 2:
            message.depositor = reader.bytes();
            break;
          case 3:
            if (!(message.amount && message.amount.length)) { message.amount = []; }
            message.amount.push($root.kava.Coin.decode(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty('proposalID')) { throw $util.ProtocolError("missing required 'proposalID'", { instance: message }); }
      if (!message.hasOwnProperty('depositor')) { throw $util.ProtocolError("missing required 'depositor'", { instance: message }); }
      return message;
    };

    /**
         * Decodes a MsgDeposit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kava.MsgDeposit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kava.MsgDeposit} MsgDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgDeposit.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
         * Verifies a MsgDeposit message.
         * @function verify
         * @memberof kava.MsgDeposit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    MsgDeposit.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (!$util.isInteger(message.proposalID) && !(message.proposalID && $util.isInteger(message.proposalID.low) && $util.isInteger(message.proposalID.high))) { return 'proposalID: integer|Long expected'; }
      if (!(message.depositor && typeof message.depositor.length === 'number' || $util.isString(message.depositor))) { return 'depositor: buffer expected'; }
      if (message.amount != null && message.hasOwnProperty('amount')) {
        if (!Array.isArray(message.amount)) { return 'amount: array expected'; }
        for (var i = 0; i < message.amount.length; ++i) {
          var error = $root.kava.Coin.verify(message.amount[i]);
          if (error) { return `amount.${error}`; }
        }
      }
      return null;
    };

    /**
         * Creates a MsgDeposit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kava.MsgDeposit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kava.MsgDeposit} MsgDeposit
         */
    MsgDeposit.fromObject = function fromObject(object) {
      if (object instanceof $root.kava.MsgDeposit) { return object; }
      var message = new $root.kava.MsgDeposit();
      if (object.proposalID != null) {
        if ($util.Long) (message.proposalID = $util.Long.fromValue(object.proposalID)).unsigned = false;
        else if (typeof object.proposalID === 'string') message.proposalID = parseInt(object.proposalID, 10);
        else if (typeof object.proposalID === 'number') message.proposalID = object.proposalID;
        else if (typeof object.proposalID === 'object') message.proposalID = new $util.LongBits(object.proposalID.low >>> 0, object.proposalID.high >>> 0).toNumber();
      }
      if (object.depositor != null) {
        if (typeof object.depositor === 'string') $util.base64.decode(object.depositor, message.depositor = $util.newBuffer($util.base64.length(object.depositor)), 0);
        else if (object.depositor.length) message.depositor = object.depositor;
      }
      if (object.amount) {
        if (!Array.isArray(object.amount)) { throw TypeError('.kava.MsgDeposit.amount: array expected'); }
        message.amount = [];
        for (var i = 0; i < object.amount.length; ++i) {
          if (typeof object.amount[i] !== 'object') { throw TypeError('.kava.MsgDeposit.amount: object expected'); }
          message.amount[i] = $root.kava.Coin.fromObject(object.amount[i]);
        }
      }
      return message;
    };

    /**
         * Creates a plain object from a MsgDeposit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kava.MsgDeposit
         * @static
         * @param {kava.MsgDeposit} message MsgDeposit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    MsgDeposit.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      var object = {};
      if (options.arrays || options.defaults) { object.amount = []; }
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.proposalID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
        } else { object.proposalID = options.longs === String ? '0' : 0; }
        if (options.bytes === String) { object.depositor = ''; } else {
          object.depositor = [];
          if (options.bytes !== Array) { object.depositor = $util.newBuffer(object.depositor); }
        }
      }
      if (message.proposalID != null && message.hasOwnProperty('proposalID')) {
        if (typeof message.proposalID === 'number') object.proposalID = options.longs === String ? String(message.proposalID) : message.proposalID;
        else object.proposalID = options.longs === String ? $util.Long.prototype.toString.call(message.proposalID) : options.longs === Number ? new $util.LongBits(message.proposalID.low >>> 0, message.proposalID.high >>> 0).toNumber() : message.proposalID;
      }
      if (message.depositor != null && message.hasOwnProperty('depositor')) { object.depositor = options.bytes === String ? $util.base64.encode(message.depositor, 0, message.depositor.length) : options.bytes === Array ? Array.prototype.slice.call(message.depositor) : message.depositor; }
      if (message.amount && message.amount.length) {
        object.amount = [];
        for (var j = 0; j < message.amount.length; ++j) { object.amount[j] = $root.kava.Coin.toObject(message.amount[j], options); }
      }
      return object;
    };

    /**
         * Converts this MsgDeposit to JSON.
         * @function toJSON
         * @memberof kava.MsgDeposit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    MsgDeposit.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MsgDeposit;
  }());

  kava.MsgVote = (function () {
    /**
         * Properties of a MsgVote.
         * @memberof kava
         * @interface IMsgVote
         * @property {number|Long} proposalID MsgVote proposalID
         * @property {Uint8Array} voter MsgVote voter
         * @property {number|Long} option MsgVote option
         */

    /**
         * Constructs a new MsgVote.
         * @memberof kava
         * @classdesc Represents a MsgVote.
         * @implements IMsgVote
         * @constructor
         * @param {kava.IMsgVote=} [properties] Properties to set
         */
    function MsgVote(properties) {
      if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]; }
    }

    /**
         * MsgVote proposalID.
         * @member {number|Long} proposalID
         * @memberof kava.MsgVote
         * @instance
         */
    MsgVote.prototype.proposalID = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
         * MsgVote voter.
         * @member {Uint8Array} voter
         * @memberof kava.MsgVote
         * @instance
         */
    MsgVote.prototype.voter = $util.newBuffer([]);

    /**
         * MsgVote option.
         * @member {number|Long} option
         * @memberof kava.MsgVote
         * @instance
         */
    MsgVote.prototype.option = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
         * Creates a new MsgVote instance using the specified properties.
         * @function create
         * @memberof kava.MsgVote
         * @static
         * @param {kava.IMsgVote=} [properties] Properties to set
         * @returns {kava.MsgVote} MsgVote instance
         */
    MsgVote.create = function create(properties) {
      return new MsgVote(properties);
    };

    /**
         * Encodes the specified MsgVote message. Does not implicitly {@link kava.MsgVote.verify|verify} messages.
         * @function encode
         * @memberof kava.MsgVote
         * @static
         * @param {kava.IMsgVote} message MsgVote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgVote.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      writer.uint32(/* id 1, wireType 0 = */8).int64(message.proposalID);
      writer.uint32(/* id 2, wireType 2 = */18).bytes(message.voter);
      writer.uint32(/* id 3, wireType 0 = */24).uint64(message.option);
      return writer;
    };

    /**
         * Encodes the specified MsgVote message, length delimited. Does not implicitly {@link kava.MsgVote.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kava.MsgVote
         * @static
         * @param {kava.IMsgVote} message MsgVote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    MsgVote.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
         * Decodes a MsgVote message from the specified reader or buffer.
         * @function decode
         * @memberof kava.MsgVote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kava.MsgVote} MsgVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgVote.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      var end = length === undefined ? reader.len : reader.pos + length; var
        message = new $root.kava.MsgVote();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.proposalID = reader.int64();
            break;
          case 2:
            message.voter = reader.bytes();
            break;
          case 3:
            message.option = reader.uint64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty('proposalID')) { throw $util.ProtocolError("missing required 'proposalID'", { instance: message }); }
      if (!message.hasOwnProperty('voter')) { throw $util.ProtocolError("missing required 'voter'", { instance: message }); }
      if (!message.hasOwnProperty('option')) { throw $util.ProtocolError("missing required 'option'", { instance: message }); }
      return message;
    };

    /**
         * Decodes a MsgVote message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kava.MsgVote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kava.MsgVote} MsgVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    MsgVote.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
         * Verifies a MsgVote message.
         * @function verify
         * @memberof kava.MsgVote
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    MsgVote.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (!$util.isInteger(message.proposalID) && !(message.proposalID && $util.isInteger(message.proposalID.low) && $util.isInteger(message.proposalID.high))) { return 'proposalID: integer|Long expected'; }
      if (!(message.voter && typeof message.voter.length === 'number' || $util.isString(message.voter))) { return 'voter: buffer expected'; }
      if (!$util.isInteger(message.option) && !(message.option && $util.isInteger(message.option.low) && $util.isInteger(message.option.high))) { return 'option: integer|Long expected'; }
      return null;
    };

    /**
         * Creates a MsgVote message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kava.MsgVote
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kava.MsgVote} MsgVote
         */
    MsgVote.fromObject = function fromObject(object) {
      if (object instanceof $root.kava.MsgVote) { return object; }
      var message = new $root.kava.MsgVote();
      if (object.proposalID != null) {
        if ($util.Long) (message.proposalID = $util.Long.fromValue(object.proposalID)).unsigned = false;
        else if (typeof object.proposalID === 'string') message.proposalID = parseInt(object.proposalID, 10);
        else if (typeof object.proposalID === 'number') message.proposalID = object.proposalID;
        else if (typeof object.proposalID === 'object') message.proposalID = new $util.LongBits(object.proposalID.low >>> 0, object.proposalID.high >>> 0).toNumber();
      }
      if (object.voter != null) {
        if (typeof object.voter === 'string') $util.base64.decode(object.voter, message.voter = $util.newBuffer($util.base64.length(object.voter)), 0);
        else if (object.voter.length) message.voter = object.voter;
      }
      if (object.option != null) {
        if ($util.Long) (message.option = $util.Long.fromValue(object.option)).unsigned = true;
        else if (typeof object.option === 'string') message.option = parseInt(object.option, 10);
        else if (typeof object.option === 'number') message.option = object.option;
        else if (typeof object.option === 'object') message.option = new $util.LongBits(object.option.low >>> 0, object.option.high >>> 0).toNumber(true);
      }
      return message;
    };

    /**
         * Creates a plain object from a MsgVote message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kava.MsgVote
         * @static
         * @param {kava.MsgVote} message MsgVote
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    MsgVote.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.proposalID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
        } else { object.proposalID = options.longs === String ? '0' : 0; }
        if (options.bytes === String) { object.voter = ''; } else {
          object.voter = [];
          if (options.bytes !== Array) { object.voter = $util.newBuffer(object.voter); }
        }
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.option = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
        } else { object.option = options.longs === String ? '0' : 0; }
      }
      if (message.proposalID != null && message.hasOwnProperty('proposalID')) {
        if (typeof message.proposalID === 'number') object.proposalID = options.longs === String ? String(message.proposalID) : message.proposalID;
        else object.proposalID = options.longs === String ? $util.Long.prototype.toString.call(message.proposalID) : options.longs === Number ? new $util.LongBits(message.proposalID.low >>> 0, message.proposalID.high >>> 0).toNumber() : message.proposalID;
      }
      if (message.voter != null && message.hasOwnProperty('voter')) { object.voter = options.bytes === String ? $util.base64.encode(message.voter, 0, message.voter.length) : options.bytes === Array ? Array.prototype.slice.call(message.voter) : message.voter; }
      if (message.option != null && message.hasOwnProperty('option')) {
        if (typeof message.option === 'number') object.option = options.longs === String ? String(message.option) : message.option;
        else object.option = options.longs === String ? $util.Long.prototype.toString.call(message.option) : options.longs === Number ? new $util.LongBits(message.option.low >>> 0, message.option.high >>> 0).toNumber(true) : message.option;
      }
      return object;
    };

    /**
         * Converts this MsgVote to JSON.
         * @function toJSON
         * @memberof kava.MsgVote
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    MsgVote.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MsgVote;
  }());

  kava.StdFee = (function () {
    /**
         * Properties of a StdFee.
         * @memberof kava
         * @interface IStdFee
         * @property {Array.<kava.ICoin>|null} [amount] StdFee amount
         * @property {number|Long} gas StdFee gas
         */

    /**
         * Constructs a new StdFee.
         * @memberof kava
         * @classdesc Represents a StdFee.
         * @implements IStdFee
         * @constructor
         * @param {kava.IStdFee=} [properties] Properties to set
         */
    function StdFee(properties) {
      this.amount = [];
      if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]; }
    }

    /**
         * StdFee amount.
         * @member {Array.<kava.ICoin>} amount
         * @memberof kava.StdFee
         * @instance
         */
    StdFee.prototype.amount = $util.emptyArray;

    /**
         * StdFee gas.
         * @member {number|Long} gas
         * @memberof kava.StdFee
         * @instance
         */
    StdFee.prototype.gas = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
         * Creates a new StdFee instance using the specified properties.
         * @function create
         * @memberof kava.StdFee
         * @static
         * @param {kava.IStdFee=} [properties] Properties to set
         * @returns {kava.StdFee} StdFee instance
         */
    StdFee.create = function create(properties) {
      return new StdFee(properties);
    };

    /**
         * Encodes the specified StdFee message. Does not implicitly {@link kava.StdFee.verify|verify} messages.
         * @function encode
         * @memberof kava.StdFee
         * @static
         * @param {kava.IStdFee} message StdFee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    StdFee.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.amount != null && message.amount.length) { for (var i = 0; i < message.amount.length; ++i) $root.kava.Coin.encode(message.amount[i], writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim(); }
      writer.uint32(/* id 2, wireType 0 = */16).int64(message.gas);
      return writer;
    };

    /**
         * Encodes the specified StdFee message, length delimited. Does not implicitly {@link kava.StdFee.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kava.StdFee
         * @static
         * @param {kava.IStdFee} message StdFee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    StdFee.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
         * Decodes a StdFee message from the specified reader or buffer.
         * @function decode
         * @memberof kava.StdFee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kava.StdFee} StdFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    StdFee.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      var end = length === undefined ? reader.len : reader.pos + length; var
        message = new $root.kava.StdFee();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if (!(message.amount && message.amount.length)) { message.amount = []; }
            message.amount.push($root.kava.Coin.decode(reader, reader.uint32()));
            break;
          case 2:
            message.gas = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty('gas')) { throw $util.ProtocolError("missing required 'gas'", { instance: message }); }
      return message;
    };

    /**
         * Decodes a StdFee message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kava.StdFee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kava.StdFee} StdFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    StdFee.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
         * Verifies a StdFee message.
         * @function verify
         * @memberof kava.StdFee
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    StdFee.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.amount != null && message.hasOwnProperty('amount')) {
        if (!Array.isArray(message.amount)) { return 'amount: array expected'; }
        for (var i = 0; i < message.amount.length; ++i) {
          var error = $root.kava.Coin.verify(message.amount[i]);
          if (error) { return `amount.${error}`; }
        }
      }
      if (!$util.isInteger(message.gas) && !(message.gas && $util.isInteger(message.gas.low) && $util.isInteger(message.gas.high))) { return 'gas: integer|Long expected'; }
      return null;
    };

    /**
         * Creates a StdFee message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kava.StdFee
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kava.StdFee} StdFee
         */
    StdFee.fromObject = function fromObject(object) {
      if (object instanceof $root.kava.StdFee) { return object; }
      var message = new $root.kava.StdFee();
      if (object.amount) {
        if (!Array.isArray(object.amount)) { throw TypeError('.kava.StdFee.amount: array expected'); }
        message.amount = [];
        for (var i = 0; i < object.amount.length; ++i) {
          if (typeof object.amount[i] !== 'object') { throw TypeError('.kava.StdFee.amount: object expected'); }
          message.amount[i] = $root.kava.Coin.fromObject(object.amount[i]);
        }
      }
      if (object.gas != null) {
        if ($util.Long) (message.gas = $util.Long.fromValue(object.gas)).unsigned = false;
        else if (typeof object.gas === 'string') message.gas = parseInt(object.gas, 10);
        else if (typeof object.gas === 'number') message.gas = object.gas;
        else if (typeof object.gas === 'object') message.gas = new $util.LongBits(object.gas.low >>> 0, object.gas.high >>> 0).toNumber();
      }
      return message;
    };

    /**
         * Creates a plain object from a StdFee message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kava.StdFee
         * @static
         * @param {kava.StdFee} message StdFee
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    StdFee.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      var object = {};
      if (options.arrays || options.defaults) { object.amount = []; }
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.gas = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
        } else object.gas = options.longs === String ? '0' : 0;
      }
      if (message.amount && message.amount.length) {
        object.amount = [];
        for (var j = 0; j < message.amount.length; ++j) { object.amount[j] = $root.kava.Coin.toObject(message.amount[j], options); }
      }
      if (message.gas != null && message.hasOwnProperty('gas')) {
        if (typeof message.gas === 'number') object.gas = options.longs === String ? String(message.gas) : message.gas;
        else object.gas = options.longs === String ? $util.Long.prototype.toString.call(message.gas) : options.longs === Number ? new $util.LongBits(message.gas.low >>> 0, message.gas.high >>> 0).toNumber() : message.gas;
      }
      return object;
    };

    /**
         * Converts this StdFee to JSON.
         * @function toJSON
         * @memberof kava.StdFee
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    StdFee.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StdFee;
  }());

  kava.StdSignature = (function () {
    /**
         * Properties of a StdSignature.
         * @memberof kava
         * @interface IStdSignature
         * @property {Uint8Array} pubKey StdSignature pubKey
         * @property {Uint8Array} signature StdSignature signature
         */

    /**
         * Constructs a new StdSignature.
         * @memberof kava
         * @classdesc Represents a StdSignature.
         * @implements IStdSignature
         * @constructor
         * @param {kava.IStdSignature=} [properties] Properties to set
         */
    function StdSignature(properties) {
      if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]; }
    }

    /**
         * StdSignature pubKey.
         * @member {Uint8Array} pubKey
         * @memberof kava.StdSignature
         * @instance
         */
    StdSignature.prototype.pubKey = $util.newBuffer([]);

    /**
         * StdSignature signature.
         * @member {Uint8Array} signature
         * @memberof kava.StdSignature
         * @instance
         */
    StdSignature.prototype.signature = $util.newBuffer([]);

    /**
         * Creates a new StdSignature instance using the specified properties.
         * @function create
         * @memberof kava.StdSignature
         * @static
         * @param {kava.IStdSignature=} [properties] Properties to set
         * @returns {kava.StdSignature} StdSignature instance
         */
    StdSignature.create = function create(properties) {
      return new StdSignature(properties);
    };

    /**
         * Encodes the specified StdSignature message. Does not implicitly {@link kava.StdSignature.verify|verify} messages.
         * @function encode
         * @memberof kava.StdSignature
         * @static
         * @param {kava.IStdSignature} message StdSignature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    StdSignature.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      writer.uint32(/* id 1, wireType 2 = */10).bytes(message.pubKey);
      writer.uint32(/* id 2, wireType 2 = */18).bytes(message.signature);
      return writer;
    };

    /**
         * Encodes the specified StdSignature message, length delimited. Does not implicitly {@link kava.StdSignature.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kava.StdSignature
         * @static
         * @param {kava.IStdSignature} message StdSignature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    StdSignature.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
         * Decodes a StdSignature message from the specified reader or buffer.
         * @function decode
         * @memberof kava.StdSignature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kava.StdSignature} StdSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    StdSignature.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      var end = length === undefined ? reader.len : reader.pos + length; var
        message = new $root.kava.StdSignature();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.pubKey = reader.bytes();
            break;
          case 2:
            message.signature = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty('pubKey')) { throw $util.ProtocolError("missing required 'pubKey'", { instance: message }); }
      if (!message.hasOwnProperty('signature')) { throw $util.ProtocolError("missing required 'signature'", { instance: message }); }
      return message;
    };

    /**
         * Decodes a StdSignature message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kava.StdSignature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kava.StdSignature} StdSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    StdSignature.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
         * Verifies a StdSignature message.
         * @function verify
         * @memberof kava.StdSignature
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    StdSignature.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (!(message.pubKey && typeof message.pubKey.length === 'number' || $util.isString(message.pubKey))) { return 'pubKey: buffer expected'; }
      if (!(message.signature && typeof message.signature.length === 'number' || $util.isString(message.signature))) { return 'signature: buffer expected'; }
      return null;
    };

    /**
         * Creates a StdSignature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kava.StdSignature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kava.StdSignature} StdSignature
         */
    StdSignature.fromObject = function fromObject(object) {
      if (object instanceof $root.kava.StdSignature) { return object; }
      var message = new $root.kava.StdSignature();
      if (object.pubKey != null) {
        if (typeof object.pubKey === 'string') $util.base64.decode(object.pubKey, message.pubKey = $util.newBuffer($util.base64.length(object.pubKey)), 0);
        else if (object.pubKey.length) message.pubKey = object.pubKey;
      }
      if (object.signature != null) {
        if (typeof object.signature === 'string') $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
        else if (object.signature.length) message.signature = object.signature;
      }
      return message;
    };

    /**
         * Creates a plain object from a StdSignature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kava.StdSignature
         * @static
         * @param {kava.StdSignature} message StdSignature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    StdSignature.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      var object = {};
      if (options.defaults) {
        if (options.bytes === String) { object.pubKey = ''; } else {
          object.pubKey = [];
          if (options.bytes !== Array) { object.pubKey = $util.newBuffer(object.pubKey); }
        }
        if (options.bytes === String) { object.signature = ''; } else {
          object.signature = [];
          if (options.bytes !== Array) { object.signature = $util.newBuffer(object.signature); }
        }
      }
      if (message.pubKey != null && message.hasOwnProperty('pubKey')) { object.pubKey = options.bytes === String ? $util.base64.encode(message.pubKey, 0, message.pubKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.pubKey) : message.pubKey; }
      if (message.signature != null && message.hasOwnProperty('signature')) { object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature; }
      return object;
    };

    /**
         * Converts this StdSignature to JSON.
         * @function toJSON
         * @memberof kava.StdSignature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    StdSignature.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StdSignature;
  }());

  kava.StdTx = (function () {
    /**
         * Properties of a StdTx.
         * @memberof kava
         * @interface IStdTx
         * @property {Array.<Uint8Array>|null} [msg] StdTx msg
         * @property {kava.IStdFee} fee StdTx fee
         * @property {Array.<kava.IStdSignature>|null} [signatures] StdTx signatures
         * @property {string|null} [memo] StdTx memo
         */

    /**
         * Constructs a new StdTx.
         * @memberof kava
         * @classdesc Represents a StdTx.
         * @implements IStdTx
         * @constructor
         * @param {kava.IStdTx=} [properties] Properties to set
         */
    function StdTx(properties) {
      this.msg = [];
      this.signatures = [];
      if (properties) { for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]; }
    }

    /**
         * StdTx msg.
         * @member {Array.<Uint8Array>} msg
         * @memberof kava.StdTx
         * @instance
         */
    StdTx.prototype.msg = $util.emptyArray;

    /**
         * StdTx fee.
         * @member {kava.IStdFee} fee
         * @memberof kava.StdTx
         * @instance
         */
    StdTx.prototype.fee = null;

    /**
         * StdTx signatures.
         * @member {Array.<kava.IStdSignature>} signatures
         * @memberof kava.StdTx
         * @instance
         */
    StdTx.prototype.signatures = $util.emptyArray;

    /**
         * StdTx memo.
         * @member {string} memo
         * @memberof kava.StdTx
         * @instance
         */
    StdTx.prototype.memo = '';

    /**
         * Creates a new StdTx instance using the specified properties.
         * @function create
         * @memberof kava.StdTx
         * @static
         * @param {kava.IStdTx=} [properties] Properties to set
         * @returns {kava.StdTx} StdTx instance
         */
    StdTx.create = function create(properties) {
      return new StdTx(properties);
    };

    /**
         * Encodes the specified StdTx message. Does not implicitly {@link kava.StdTx.verify|verify} messages.
         * @function encode
         * @memberof kava.StdTx
         * @static
         * @param {kava.IStdTx} message StdTx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    StdTx.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.msg != null && message.msg.length) { for (var i = 0; i < message.msg.length; ++i) writer.uint32(/* id 1, wireType 2 = */10).bytes(message.msg[i]); }
      $root.kava.StdFee.encode(message.fee, writer.uint32(/* id 2, wireType 2 = */18).fork()).ldelim();
      if (message.signatures != null && message.signatures.length) { for (var i = 0; i < message.signatures.length; ++i) $root.kava.StdSignature.encode(message.signatures[i], writer.uint32(/* id 3, wireType 2 = */26).fork()).ldelim(); }
      if (message.memo != null && message.hasOwnProperty('memo') && message.memo !== '') { writer.uint32(/* id 4, wireType 2 = */34).string(message.memo); }
      return writer;
    };

    /**
         * Encodes the specified StdTx message, length delimited. Does not implicitly {@link kava.StdTx.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kava.StdTx
         * @static
         * @param {kava.IStdTx} message StdTx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    StdTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
         * Decodes a StdTx message from the specified reader or buffer.
         * @function decode
         * @memberof kava.StdTx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kava.StdTx} StdTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    StdTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      var end = length === undefined ? reader.len : reader.pos + length; var
        message = new $root.kava.StdTx();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if (!(message.msg && message.msg.length)) { message.msg = []; }
            message.msg.push(reader.bytes());
            break;
          case 2:
            message.fee = $root.kava.StdFee.decode(reader, reader.uint32());
            break;
          case 3:
            if (!(message.signatures && message.signatures.length)) { message.signatures = []; }
            message.signatures.push($root.kava.StdSignature.decode(reader, reader.uint32()));
            break;
          case 4:
            message.memo = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty('fee')) { throw $util.ProtocolError("missing required 'fee'", { instance: message }); }
      return message;
    };

    /**
         * Decodes a StdTx message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kava.StdTx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kava.StdTx} StdTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    StdTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
         * Verifies a StdTx message.
         * @function verify
         * @memberof kava.StdTx
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    StdTx.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.msg != null && message.hasOwnProperty('msg')) {
        if (!Array.isArray(message.msg)) { return 'msg: array expected'; }
        for (var i = 0; i < message.msg.length; ++i) { if (!(message.msg[i] && typeof message.msg[i].length === 'number' || $util.isString(message.msg[i]))) return 'msg: buffer[] expected'; }
      }
      {
        var error = $root.kava.StdFee.verify(message.fee);
        if (error) { return `fee.${error}`; }
      }
      if (message.signatures != null && message.hasOwnProperty('signatures')) {
        if (!Array.isArray(message.signatures)) { return 'signatures: array expected'; }
        for (var i = 0; i < message.signatures.length; ++i) {
          var error = $root.kava.StdSignature.verify(message.signatures[i]);
          if (error) { return `signatures.${error}`; }
        }
      }
      if (message.memo != null && message.hasOwnProperty('memo')) { if (!$util.isString(message.memo)) return 'memo: string expected'; }
      return null;
    };

    /**
         * Creates a StdTx message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kava.StdTx
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kava.StdTx} StdTx
         */
    StdTx.fromObject = function fromObject(object) {
      if (object instanceof $root.kava.StdTx) { return object; }
      var message = new $root.kava.StdTx();
      if (object.msg) {
        if (!Array.isArray(object.msg)) { throw TypeError('.kava.StdTx.msg: array expected'); }
        message.msg = [];
        for (var i = 0; i < object.msg.length; ++i) {
          if (typeof object.msg[i] === 'string') $util.base64.decode(object.msg[i], message.msg[i] = $util.newBuffer($util.base64.length(object.msg[i])), 0);
          else if (object.msg[i].length) message.msg[i] = object.msg[i];
        }
      }
      if (object.fee != null) {
        if (typeof object.fee !== 'object') { throw TypeError('.kava.StdTx.fee: object expected'); }
        message.fee = $root.kava.StdFee.fromObject(object.fee);
      }
      if (object.signatures) {
        if (!Array.isArray(object.signatures)) { throw TypeError('.kava.StdTx.signatures: array expected'); }
        message.signatures = [];
        for (var i = 0; i < object.signatures.length; ++i) {
          if (typeof object.signatures[i] !== 'object') { throw TypeError('.kava.StdTx.signatures: object expected'); }
          message.signatures[i] = $root.kava.StdSignature.fromObject(object.signatures[i]);
        }
      }
      if (object.memo != null) { message.memo = String(object.memo); }
      return message;
    };

    /**
         * Creates a plain object from a StdTx message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kava.StdTx
         * @static
         * @param {kava.StdTx} message StdTx
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    StdTx.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      var object = {};
      if (options.arrays || options.defaults) {
        object.msg = [];
        object.signatures = [];
      }
      if (options.defaults) {
        object.fee = null;
        object.memo = '';
      }
      if (message.msg && message.msg.length) {
        object.msg = [];
        for (var j = 0; j < message.msg.length; ++j) { object.msg[j] = options.bytes === String ? $util.base64.encode(message.msg[j], 0, message.msg[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.msg[j]) : message.msg[j]; }
      }
      if (message.fee != null && message.hasOwnProperty('fee')) { object.fee = $root.kava.StdFee.toObject(message.fee, options); }
      if (message.signatures && message.signatures.length) {
        object.signatures = [];
        for (var j = 0; j < message.signatures.length; ++j) { object.signatures[j] = $root.kava.StdSignature.toObject(message.signatures[j], options); }
      }
      if (message.memo != null && message.hasOwnProperty('memo')) { object.memo = message.memo; }
      return object;
    };

    /**
         * Converts this StdTx to JSON.
         * @function toJSON
         * @memberof kava.StdTx
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    StdTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StdTx;
  }());

  return kava;
}());

module.exports = $root;
