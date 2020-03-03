
module.exports = class Utils {
  static sortObjectKeys(obj) {
    const sort = function (obj) {
      const tmp = {};
      Object.keys(obj).sort().forEach((k) => {
        if (Array.isArray(obj[k])) {
          const p = [];
          obj[k].forEach((item) => {
            if (item != null && typeof (item) === 'object') {
              p.push(sort(item));
            } else {
              p.push(item);
            }
          });
          tmp[k] = p;
        } else if (obj[k] != null && typeof (obj[k]) === 'object') {
          tmp[k] = sort(obj[k]);
        } else if (obj[k] != null && typeof (obj[k]) === 'function') {
          tmp[k] = evil(obj[k].toString());
        } else {
          tmp[k] = String(obj[k]).toString();
        }
      });
      return tmp;
    };
    return sort(obj);
  }

  static isEmpty(obj) {
    switch (typeof obj) {
      case 'undefined': {
        return true;
      }
      case 'string': {
        return obj.length === 0;
      }
      case 'number': {
        return obj === 0;
      }
      case 'object': {
        if (obj == null) {
          return true;
        } if (Array.isArray(obj)) {
          return obj.length === 0;
        }
        return Object.keys(obj).length === 0;
      }
    }
  }

  static toString(str) {
    if (typeof str === 'number') {
      str = str.toLocaleString('en');
      return str.replace(/[,]/g, '');
    } if (this.isEmpty(str)) {
      return '';
    }
    return str.toString();
  }

  static toDecString(str, precision = 10) {
    if (str === '' || str === null) return str;
    const item = str.split('.');
    if (item[1] && item[1].length > precision) {
      throw Error(`too much precision, maximum ${precision}, len decimal ${item[1].length}`);
    }
    let suffix = '';
    if (item.length === 1) {
      suffix = '.';
    }
    let bit = item[1] ? precision - item[1].length : precision;
    while (bit > 0) {
      suffix = `${suffix}0`;
      bit--;
    }
    return `${str}${suffix}`;
  }

  static hasRepeatElement(target, splitChar) {
    if (!(target instanceof Array)) {
      if (this.isEmpty(splitChar)) {
        throw new Error('split char is empty');
      }
      target = target.split(splitChar);
    }
    const srcLen = target.length;
    const eSet = new Set(target);
    return !(srcLen == eSet.size);
  }
};

function evil(fn) {
  const Fn = Function;
  return new Fn(`return ${fn}`)();
}
