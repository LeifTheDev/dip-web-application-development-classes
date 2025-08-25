// Challenge - Stage 1
let addBook = function (book) {
  // If there's no book to do, do nothing
  // data
  if (!book || book.length < 1) return;

  // Get the list
  // Create a new list item
  let list = document.querySelector("#list");

<<<<<<< HEAD
  // template
  let listItem = document.createElement("li");
  // Append the item to the list
  listItem.textContent = book;
  // render
  list.appendChild(listItem);
};
=======
// Get the list
var addBook = function (book) {
  if (!book || book.length < 1) return;
  var list = document.querySelector("#list");
  var listItem = document.createElement("li");
  listItem.textContent = book;
  list.appendChild(listItem);
};

// Create a new list item
// template

// Append the item to the list
// render
>>>>>>> 84b3aba (feat: Introduction to state tutorials)

let book = "Harry Potter IV";
let book1 = "Harry Potter III";

addBook(book);
addBook(book1);
