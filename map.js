// The map function will return a new array based on the results of the callback function.
const words = ["ground", "control", "to", "major", "tom"];
const foods = ["kimchi", "stinkytofu", "bleh"];
const cats = ["fat", "skinny", "buff"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
  console.log('item BEFORE', item);
  console.log('item AFTER', callback(item));
  console.log('--------')
  }
  return results;
}

const eqArrays = function (arrayOne, arrayTwo) { 
  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
    return arrayOne === arrayTwo;
  }
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  } console.log('pass')
  return true;
}


const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`👍🏻Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🥶Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const results1 = map(words, word => word[0]);
const results2 = map(foods, word => word[0]) 
const results3 = map(cats, word => word[0])

assertArraysEqual(eqArrays(results1, ['g','c','t','m','t']), false)
assertArraysEqual(eqArrays(results2, [ 'k', 's', 'b' ]), true)
assertArraysEqual(eqArrays(results3, [ 'f', 's', 'b' ]), false)
assertArraysEqual(eqArrays(['a', 'b', 'c', ['d', 'e']], ['a', 'b', 'c', ['e']]), true)
assertArraysEqual(eqArrays(['a', 'b', 'c'], ['a', 2, 'c']), false)

module.exports = map;
