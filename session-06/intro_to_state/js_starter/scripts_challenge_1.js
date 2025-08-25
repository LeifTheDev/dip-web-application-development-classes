// Challenge - Stage 1

// If there's no book to do, do nothing
// data

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

let book = "Harry Potter IV";

addBook(book);
