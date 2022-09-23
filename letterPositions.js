// Use assertArraysEqual to compare the 4 letters and their expected positions. 
//   { 
//   h: [0],
//   e: [1],
//   l: [2, 3],
//   o: [4] 
//   }

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = [i];
      } 
  }console.log(results)
  return results;
}

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

const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) == true) {
    console.log(`👍🏻Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🥶Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

console.log((assertArraysEqual(letterPositions("hello").e, [1])));