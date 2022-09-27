const eqArrays = function (arrayOne, arrayTwo) { 
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  } 
  return true;
}

const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) == true) {
    console.log(`👍🏻Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🥶Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

  // Implement without which will return a subset of a given array, removing unwanted elements.

const without = function (array, unwanted) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (unwanted.includes(array[i]) == false) {
      newArray.push(array[i])
    }
  } 
  console.log(newArray);
  return newArray;
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

module.exports = without;
