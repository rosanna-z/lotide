const middle = require('../middle');
const assertArraysEqual = require('../assertArrayEqual');



assertArraysEqual(middle([1]), []) // => [], true
assertArraysEqual(middle([1, 2]), []) // => [], true
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2], true
assertArraysEqual(middle([1, 2, 3, 4, 5]), [6]) // => [3], false
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3], true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 5]) // => [3, 4] false