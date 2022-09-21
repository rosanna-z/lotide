const eqArrays = function (arrayOne, arrayTwo) { 
  if (arrayOne.length != arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  } 
  return true;
}

// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) == true) {
    console.log(`👍🏻Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🥶Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // false 
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // false

 