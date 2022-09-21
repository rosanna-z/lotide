const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏻Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥶Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function (arrayOne, arrayTwo) { 
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  } 
  return true;
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);