const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏻Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥶Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* 
The function should take in a sentence (as a string) and 
then return a count of each of the letters in that sentence.
*/

const countLetters = function (word) {
  let totalLetters = {};
  
  for (const character of word.toLowerCase()) {
    if (character !== " ") {
      if (totalLetters[character]) {
        totalLetters[character] += 1
      } else {
        totalLetters[character] = 1;
      } 
    }
  } 
  return totalLetters;
} 

// {a: 1, p: 2, l: 1, e:1}
console.log(countLetters("lighthouse in the house"));