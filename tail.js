// The tail is meant to be every element except the head (first element) of the array.
const tail = function(array) {
  return array.slice(1);
};


module.exports = tail;