// Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function (array) {
  let middleNum = 0;
  let newArray = [];
// For arrays with one or two elements, there is no middle. Return an empty array
    if (array.length < 3) {
      return newArray;
    } 

// For arrays with odd number of elements, an array containing a single middle element should be returned.
    else if (array.length % 2 != 0) {
      middleNum = Math.floor(array.length / 2);
      newArray.push(array[middleNum]);
      return newArray;
    } 

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    else if (array.length % 2 == 0) {
      middleNum = array.length / 2
      newArray.push(array[middleNum - 1], array[middleNum]);
      return newArray;
    } 
  }

  module.exports = middle;