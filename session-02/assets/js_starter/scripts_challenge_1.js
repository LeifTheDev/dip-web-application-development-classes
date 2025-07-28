// Challenge 1 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5];
let numbersCopy = [...numbers];

// Use the pop() method to remove the last element from the array
<<<<<<< HEAD
let lastElement = numbers.pop();

// Use the unshift() method to add the last element to the beginning of the array
numbers.unshift(lastElement);

// Use the slice() method to exclude the first 3 elements and return a new array
let newArray = numbers.slice(3);

// Set the value of the output field inner html to the new array
let outField = document.getElementById("Output field");
outputField.innerHTML = newArray;
=======
let deletedNumber = numbersCopy.pop();

// Use the unshift() method to add the last element to the beginning of the array
numbersCopy.unshift(deletedNumber);

// Use the slice() method to exclude the first 3 elements and return a new array
let outputNumbers = numbersCopy.slice(3);

// Set the value of the output field inner html to the new array
let outputField = document.getElementById("OutputField");

outputField.innerHTML = outputNumbers;
>>>>>>> bea7e64 (feat: Week 2 activity 2)
