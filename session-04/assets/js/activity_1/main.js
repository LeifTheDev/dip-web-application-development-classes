import multiply, { add, subtract, divide as myDivide } from "./math.js";

<<<<<<< HEAD
// console.log(add(3, 2)); // 5
// console.log(subtract(5, 2)); // 3
// console.log(myDivide(6, 3)); // 2
// console.log(multiply(6, 2)); // 12

let add_result = add(3, 2); // 5
let subtract_result = subtract(5, 2); // 3
let divide_result = myDivide(6, 3); // 2
let multiply_result = multiply(6, 2); // 12

let results = [add_result, subtract_result, divide_result, multiply_result];
// results = [add(3, 2), subtract(5, 2), myDivide(6, 3), multiply(6, 2)];

let app = document.getElementById("results");

let show = true;

show
  ? (app.innerHTML = `<ol>${results
      .map((result) => `<li>${result}</li>`)
      .join("")}
      </ol>`)
  : `<div>Nothing to show</div>`;
=======
let outputSection = document.getElementById("results");

// Class not required in this case, should just be a function really. (Class used for syntax practice)
class DisplayTemplate {
  parse = function (value) {
    let parser = new DOMParser();
    return parser.parseFromString(`<p>${value} - Template Used<p>`, "text/html")
      .body.firstChild;
    // let element = document.createElement("");
    // element.innerHTML = `<p>${this.value}<p>`;
    // return element;
  };
}

let templateGenerator = new DisplayTemplate();

function renderResult(value) {
  let node = templateGenerator.parse(value);
  outputSection.appendChild(node);
}

renderResult(`Multiply: ${multiply(3, 4)}`);
renderResult(`Add: ${add(3, 4)}`);
renderResult(`Subtract: ${subtract(4, 1)}`);
renderResult(`Divide: ${myDivide(20, 4)}`);
>>>>>>> 9d8403c (feat: Session 4 activity 1)
