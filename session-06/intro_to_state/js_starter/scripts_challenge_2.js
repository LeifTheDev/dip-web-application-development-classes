let data = {
  books: ["Harry Potter I", "Harry Potter II", "Harry Potter III"],
};

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
<<<<<<< HEAD
=======
  return html;
};
>>>>>>> 84b3aba56cacd8690594e54e793c011963277c00

  return html;
};
// Render the template into the UI
<<<<<<< HEAD
let app = document.querySelector("#list");
=======
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
>>>>>>> 84b3aba56cacd8690594e54e793c011963277c00

// Update the UI
data.books.push("Harry Potter IV");
data.books.push("Harry Potter V");
<<<<<<< HEAD
// data.books.pop();
// data.books[1] = "Harry Potter V";
app.innerHTML = template(data);
=======

let list = document.getElementById("list");
list.innerHTML = template(data);
>>>>>>> 84b3aba56cacd8690594e54e793c011963277c00
