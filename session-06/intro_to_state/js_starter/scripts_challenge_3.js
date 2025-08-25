// Challenge 3 Book constructor

// Creating instances using the Book constructor
function Book(title, author) {
  (this.title = title), (this.author = author);

  this.displayInfo = function (html = false) {
    msg = `Book(title='${this.title}', author='${this.author}')`;
    console.log(msg);
  };
  this.template = () => {
    `<li>
        <article>
            <h2>${this.title}</h2>
            <p>No description found.</p>
            <footer>Written by: ${this.author}</footer>
        </article>
       </li>`;
  };
}

var addBook = function (book) {
  if (!book || book.length < 1) return;
  var list = document.querySelector("#list");
  var listItem = document.createElement("li");
  listItem.textContent = book;
  list.appendChild(listItem);
};

// var loadData = function (props) {
//   let list = document.getElementById("list");
//   let html = `
//   <ul>
//     // ${props.forEach((item) => {
//     //   "<li><ul>" + component;
//     //   console.log(component)(
//     //     // item.map((component) => {
//     //     //   component.template();
//     //     // }) +
//     //     "</ul></li>"
//     //   );
//     // })}
//     //</ul>`;
//     `
// };

book1 = new Book("Python notes", "Leif Bayley");
book2 = new Book("JS Notes", "Leif Bayley");

data = {
  books: [
    new Book("Python notes", "Leif Bayley"),
    new Book("JS Notes", "Leif Bayley"),
  ],
};
// Displaying book information
book1.displayInfo();
book2.displayInfo();

let list = document.getElementById("list");
loadData(data);
//list.innerHTML = template(data);
