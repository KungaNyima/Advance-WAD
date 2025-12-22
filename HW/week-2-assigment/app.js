'use strict';

/* ===== DO NOT CHANGE THESE SELECTIONS ===== */
const input  = document.querySelector('#userInput');
const mirror = document.querySelector('#mirror');
const btn    = document.querySelector('#actionBtn');


/* ===== Provided helper: requires a parameter ===== */
function handleAction(action, value) {
  // This is here to FORCE using an arrow wrapper with an argument.
  console.log(`[${action}]`, value);


}

/* ===== please go through the instruction===== */

// only 2 event listeners are required

// TODO 1: Add an 'input' event listener on `input` that
// updates #mirror so it always shows the current text the user types.
// Hint: mirror.textContent = input.value (trim if you like).
input.addEventListener('input', () => {
  mirror.textContent = input.value.trim();
});


// TODO 2: Add a 'click' event listener on `btn` that:
// - logs the current input value to the Console
// - shows window.alert with the current input value
// - calls handleAction with a custom action string (e.g., 'show')
//   AND the current input value, using an ARROW WRAPPER to pass the parameter:
//   btn.addEventListener('click', () => handleAction('show', input.value));
btn.addEventListener('click', () => {
  console.log(input.value);
  window.alert(input.value);
  handleAction('show', input.value);
});
