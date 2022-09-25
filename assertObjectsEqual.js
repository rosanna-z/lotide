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

const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect; 
  if (eqObjects(object1, object2)){
    console.log(`👍🏻Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
  console.log(`🥶Assertion Failed: ${inspect(object1)} === ${inspect(object2)}`);
  }
};


assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 3 })