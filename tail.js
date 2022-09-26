const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏻Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥶Assertion Failed: ${actual} !== ${expected}`);
  }
};

// The tail is meant to be every element except the head (first element) of the array.
const tail = function(array) {
  return array.slice(1);
};


module.exports = tail;