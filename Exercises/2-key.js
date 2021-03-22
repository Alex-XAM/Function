'use strict';

const generateKey = (length, possible) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    const indexRandom = Math.floor(Math.random() * possible.length);
    result += possible[indexRandom];
  }
  return result;
};

module.exports = { generateKey };
