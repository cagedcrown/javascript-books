// Question 1: Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

var range = function(start, end) {
  // do something
  // return
}

// Part 2: Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.


// Question 2: Reversing and Array

function reverseArray(collection) {
  reversed = [];
  for(var i = collection.length - 1; i >= 0; i--) {
    reversed.push(collection[i]);
  }
  return reversed;
}

function reverseArrayInPlace(collection) {
  length = collection.length - 1;
  for(var i = 0; i < length / 2); i++) {
    temp = collection[i];
    collection[i] = collection[length - i];
    collection[length - i] = temp;
  }
}
