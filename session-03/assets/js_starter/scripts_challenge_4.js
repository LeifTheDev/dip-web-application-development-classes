// Get the form element
let form = document.querySelector("#save-me");

// localStorage prefix
let prefix = "autosave_";

/**
 * Handle input events
 * @param  {Event} event The event object
 */
function inputHandler(event) {
  localStorage.setItem(prefix + event.target.id, event.target.value);
  // switch (event.target.id) {
  //   case "name": {
  //   }
  // }
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 288b0e2 (feat: Form data local storage activity)
  // save the event target
  let field = event.target;
  localStorage.setItem(prefix + field.id, field.value);
  localStorage.setItem(prefix + event.target.id, event.target.value);
  // switch (event.target.id) {
  //   case "name": {
  //   }
  // }
=======
>>>>>>> ddc3c41 (feat: Form data local storage activity)
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    if (!saved) continue;
    field.value = saved;
=======
    if (saved) {
      field.value = saved;
    }
>>>>>>> ddc3c41 (feat: Form data local storage activity)
>>>>>>> 288b0e2 (feat: Form data local storage activity)
  }
}

// Load saved data from localStorage
loadSaved();
<<<<<<< HEAD
=======

>>>>>>> ddc3c41 (feat: Form data local storage activity)
// Listen for DOM events
form.addEventListener("input", inputHandler);
form.addEventListener("submit", clearStorage);
