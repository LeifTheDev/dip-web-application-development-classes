// Challenge 1 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5];
let numbersCopy = [...numbers];

// Use the pop() method to remove the last element from the array
<<<<<<< HEAD
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
=======
>>>>>>> 5ffc780 (feat: session 2)
let deletedNumber = numbersCopy.pop();

// Use the unshift() method to add the last element to the beginning of the array
numbersCopy.unshift(deletedNumber);

// Use the slice() method to exclude the first 3 elements and return a new array
let outputNumbers = numbersCopy.slice(3);

// Set the value of the output field inner html to the new array
let outputField = document.getElementById("OutputField");

outputField.innerHTML = outputNumbers;
<<<<<<< HEAD
>>>>>>> bea7e64 (feat: Week 2 activity 2)
=======
=======
let lastElement = numbers.pop();

// Use the unshift() method to add the last element to the beginning of the array
numbers.unshift(lastElement);

// Use the slice() method to exclude the first 3 elements and return a new array
let newArray = numbers.slice(3);

// Set the value of the output field inner html to the new array
let outField = document.getElementById("Output field");
outputField.innerHTML = newArray;
>>>>>>> 7b4d112 (feat: session 2)
>>>>>>> 5ffc780 (feat: session 2)
