// Challenge - Stage 2
// The data

// The template
let template = function (props) {
  let html =
    "<ul>" +
    props.books
      .map(function (book) {
        return "<li>" + book + "</li>";
      })
      .join("") +
    "</ul>";
  return html;
};

// Render the template into the UI
var addBook = function (book) {
  if (!book || book.length < 1) return;
  var list = document.querySelector("#list");
  var listItem = document.createElement("li");
  listItem.textContent = book;
  list.appendChild(listItem);
};

data = {
  books: ["Book1", "Book2"],
};

// Update the UI
data.books.push("Harry Potter IV");
data.books.push("Harry Potter V");

let list = document.getElementById("list");
list.innerHTML = template(data);
