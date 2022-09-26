const eqArrays = require('./eqArrays');

// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) == true) {
    console.log(`👍🏻Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🥶Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

module.exports = assertArraysEqual;
 