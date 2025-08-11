import { add, subtract } from "./math.js";

<<<<<<< HEAD
// console.log(add(3, 2)); // 5
// console.log(subtract(5, 2)); // 3
// console.log(myDivide(6, 3)); // 2
// console.log(multiply(6, 2)); // 12
let outputSection = document.getElementById("results");

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 84b3aba56cacd8690594e54e793c011963277c00

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

<<<<<<< HEAD
>>>>>>> 00ef7f8 (docs: Add activity comment)
=======
>>>>>>> 84b3aba56cacd8690594e54e793c011963277c00
renderResult(`Multiply: ${multiply(3, 4)}`);
renderResult(`Add: ${add(3, 4)}`);
renderResult(`Subtract: ${subtract(4, 1)}`);
renderResult(`Divide: ${myDivide(20, 4)}`);
<<<<<<< HEAD
<<<<<<< HEAD

// Potentially falling into the habit of overengineering - function/class use was not necessary
// console.log(add(3, 2)); // 5
// console.log(subtract(5, 2)); // 3
// console.log(myDivide(6, 3)); // 2
// console.log(multiply(6, 2)); // 12
=======
>>>>>>> 00ef7f8 (docs: Add activity comment)
=======
=======
>>>>>>> 76df78d64432fb40257d7c068591ee3efdcd5bb8
>>>>>>> 84b3aba56cacd8690594e54e793c011963277c00
=======
console.log(add(3, 2)); // 5
console.log(subtract(5, 2)); // 3
>>>>>>> 8ad8e49 (feat: tidy up web storage form)
