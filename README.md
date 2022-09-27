# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rosanna-z/lotide`

**Require it:**

`const _ = require('@rosanna-z/lotide');`

**Call it:**

* head([1, 2, 3]) // => [1]
* tail([1, 2, 3]) // => [2, 3]
* middle([1, 2, 3]) // => [2]
* takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)) // => [ 1, 2, 5, 7, 2 ]
* without([1, 2, 3], [1]) // => [2, 3]
* map(["hi", "bye"], word => word[0]) // => ['h', 'b']
* letterPositions('hello') // =>  { h: [0], e: [1], l: [2, 3], o: [4] }
* findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"
* findKeyByValue({ 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};, "The Wire") // => drama
* countOnly(["Jason", "Salima", "Joe"], { "Jason": true,}) // => {Jason: 1}
* countLetters("apple") // => // {a: 1, p: 2, l: 1, e:1}
* eqArrays([1, 2], [1, 2]) // => true
* eqObects({1, 2}, {1, 2}) // => true
* assertEqual("5", "5") // => Assertion Passed
* assertArraysEqual([1, 2], [1, 2]) // => Assertion Passed
* assertObjectsEqual({1, 2}, {1, 2}) // => Assertion Passed

## Documentation

The following functions are currently implemented:

* head(array): returns the first element of an array
* tail(array): returns all the elements except for the head (first element) of an array
* middle(array): returns the middle-most element(s) of the array. If there are less than two elements, it returns an empty array. For arrays with odd number of elements, an array containing a single middle element will be returned. For arrays with an even number of elements, an array containing the two elements in the middle will be returned.
* takeUntil(array, function): returns an array when the callback provided returns a truthy value
* without(array, toRemoveFromArray): returns a subset of a given array, removing the unwanted elements
* map(array, function): returns a new array based on the results of the callback function
* letterPositions(string): returns an object where the keys are the letters, and the indexes are the values
* findKey(object, function): returns the first key when the callback returns a truthy value. If no key is found, then it will return undefined.
* findKeyByValue(object, string): returs the first key which contains the given value. 
If no key with that given value is found, then it will return undefined.
* countOnly(array, object): returns an object where the keys are the elements in the array that matched with a key in the object and each value is the number of times the key appeared in the array
* countLetters(string): returns an object that counts each letter in the string
* eqArrays(array, array): returns true or false, comparing two arrays based on a perfect match
* eqObjects(object, object): returns true or false if both objects have identical keys with identical values
* assertEqual(value, value): prints an assert message whether the two values are equal
* assertArraysEqual(array, array): prints an assert message whether the two arrays are equal
* assertObjectsEqual(object, object): prints an assert message whether the two objects are equal



