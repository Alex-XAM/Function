'use strict';

const random = (min, max) => {
  if (max === undefined) [min, max] = [0, min];
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = { random };
