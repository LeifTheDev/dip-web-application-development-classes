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
  localStorage.setItem(prefix + event.target.id, event.target.value);
  // switch (event.target.id) {
  //   case "name": {
  //   }
  // }

=======
>>>>>>> 7b72284 (feat: load and remove storage)
  // save the event target
  let field = event.target;
  localStorage.setItem(prefix + field.id, field.value);
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
  //
  let fields = form.elements;

  for (let field of fields) {
    let saved = localStorage.getItem(prefix + field.id);
    if (!saved) continue;
    field.value = saved;
  }
}

// Load saved data from localStorage
<<<<<<< HEAD
=======
function loadSaved() {
    if (!saved) {continue };
    field.value = saved;
}

>>>>>>> 7b72284 (feat: load and remove storage)
loadSaved();

// Listen for DOM events
form.addEventListener("input", inputHandler);
form.addEventListener("submit", clearStorage);
