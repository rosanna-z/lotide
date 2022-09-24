const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏻Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥶Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let objectKeys1 = Object.keys(object1);
  let objectKeys2 = Object.keys(object2);

  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  } 
  for (let key of objectKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
      continue;
    } if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}; 

  const eqArrays = function (arrayOne, arrayTwo) { 
    if (arrayOne.length !== arrayTwo.length) {
      return false;
    }
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false