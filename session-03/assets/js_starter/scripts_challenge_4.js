// Get the form element
let form = document.querySelector("#save-me");

// localStorage prefix
let prefix = "autosave_";

/**
 * Handle input events
 * @param  {Event} event The event object
 */
function inputHandler(event) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 76df78d64432fb40257d7c068591ee3efdcd5bb8
  // save the event target
  let field = event.target;

  localStorage.setItem(prefix + field.id, field.value);
<<<<<<< HEAD
=======
  localStorage.setItem(prefix + event.target.id, event.target.value);
  // switch (event.target.id) {
  //   case "name": {
  //   }
  // }
>>>>>>> ddc3c41 (feat: Form data local storage activity)
=======
>>>>>>> 76df78d64432fb40257d7c068591ee3efdcd5bb8
}

/**
 * Clear all of the saved fields from storage
 */
function clearStorage() {
  let fields = form.elements;

  for (let field of fields) {
    localStorage.removeItem(prefix + field.id);
  }
}

/**
 * Load saved data from localStorage
 */
function loadSaved() {

  let fields = form.elements;

  for (let field of fields) {
    let saved = localStorage.getItem(prefix + field.id);
  }}
  

// Load saved data from localStorage
loadSaved();

// Listen for DOM events
form.addEventListener("input", inputHandler);
form.addEventListener("submit", clearStorage);
