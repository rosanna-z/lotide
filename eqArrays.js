// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
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

module.exports = eqArrays;