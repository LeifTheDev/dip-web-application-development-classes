// Challenge 2 Solution
// Initialise the arrays
let array1 = [1, 2, 3, 2];
let array2 = [4, 5, 6, 4];

// Use the spread operator to merge the two arrays
let mergedArray = [...array1, ...array2];

// Use the Set object to remove duplicates
<<<<<<< HEAD
<<<<<<< HEAD
let mySet = new Set(mergedArray); // let mySet = new Set([...array1, ...array2])

// Use array destructuring to assign the first three elements to variables
let [firstItem, secondItem, thirdItem, ...others] = mySet;

// Set the value of the output filed to be the second element of the unique array
let outputField = document.getElementById("OutputField");

outputField.innerHTML = secondItem;
<<<<<<< HEAD
let uniqueArray = [...new Set(mergedArray)];
let mySet = new Set(mergedArray); // let mySet = new Set([...array1, ...array2])

// Use array destructuring to assign the first three elements to variables
let [firstItem, secondItem, thirdItem, ...others] = mySet;
=======
=======
=======
>>>>>>> 7f2c3b7 (feat: Week 2 activity 2)
let uniqueArray = [...new Set(mergedArray)];

// Use array destructuring to assign the first three elements to variables
let [firstElement, secondElement, thirdElement] = uniqueArray;
>>>>>>> 5ffc780 (feat: session 2)

// Set the value of the output filed to be the second element of the unique array
let outputField = document.getElementById("OutputField");
outputField.innerHTML = secondElement;
<<<<<<< HEAD
<<<<<<< HEAD
let outputField = document.getElementById("OutputField");

outputField.innerHTML = secondItem;
=======
>>>>>>> 7b4d112 (feat: session 2)
>>>>>>> 5ffc780 (feat: session 2)
=======
>>>>>>> 7b4d112 (feat: session 2)
=======
=======
let mySet = new Set(mergedArray); // let mySet = new Set([...array1, ...array2])

// Use array destructuring to assign the first three elements to variables
let [firstItem, secondItem, thirdItem, ...others] = mySet;

// Set the value of the output filed to be the second element of the unique array
let outputField = document.getElementById("OutputField");

outputField.innerHTML = secondItem;
>>>>>>> bea7e64 (feat: Week 2 activity 2)
>>>>>>> 7f2c3b7 (feat: Week 2 activity 2)
>>>>>>> 323c808 (feat: Week 2 activity 2)
