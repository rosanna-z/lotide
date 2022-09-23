/* Implement takeUntil which will keep collecting items from a 
provided array until the callback provided returns a truthy value.
*/

const takeUntil = function(array, callback){
  let newOutput = [];
  for (let x of array) {
    if (!callback(x)) {
    newOutput.push(x);
    } else {
      // break;
      return newOutput;
    }
  } 
  return newOutput;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/* Expected Output:
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

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

assertArraysEqual((takeUntil(data1, x => x < 0)), [ 1, 2, 5, 7, 2 ])
assertArraysEqual((takeUntil(data2, x => x === ',')), [ 'I\'ve', 'been', 'to', 'Hollywood' ])