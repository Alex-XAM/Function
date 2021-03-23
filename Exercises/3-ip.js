'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const arr = ip.split('.').map(x => +x);
  const res = arr.reduce((a, el, i) => a += el << (3 - i) * 8, 0);
  return res;
};

module.exports = { ipToInt };
