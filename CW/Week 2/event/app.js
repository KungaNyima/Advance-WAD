'use strict';

// 1) CLICK EVENT -- show greeting set text content in helloOut
const helloBtn = document.querySelector('#helloBtn');
const helloOut = document.querySelector('#helloOut');

function showGreetings(){
  helloOut.textContent = 'Hello World !';
}
helloBtn.addEventListener('click',showGreetings);

/*
helloBtn.addEventListener('click',()=>{
  helloOut.textContent='Hello from New York!'
});
*/




// 2) LIVE INPUT + ENTER KEY -- show greeting with live input
const nick = document.querySelector('#nick');
const nickOut = document.querySelector('#nickOut');

nick.addEventListener('input',(e)=>{
  const val = nick.value.trim();
  nickOut.textContent=val
})


// Update as the user types ('input'), set user type value in nickout and press enter
//create  a new event listener for input event

// Press Enter to “submit” nickname
nick.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); 
    const val = nick.value.trim();
    nickOut.textContent = val ? `Saved nickname: ${val}` : 'Please type a nickname.';
  }
});


// 3) FORM SUBMIT (with preventDefault and validation)
const tipForm   = document.querySelector('#tipForm');
const billInput = document.querySelector('#bill');
const tipInput  = document.querySelector('#tip');
const totalOut  = document.querySelector('#totalOut');

tipForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent page reload

  const bill = parseFloat(billInput.value);
  const tip  = parseFloat(tipInput.value);

  const total = bill + bill * (tip / 100);
  totalOut.textContent = `Total: $${total.toFixed(2)}`;
  totalOut.className = 'out success';
});



// 4) PASSING ARGUMENTS VIA WRAPPER
const saveBtn   = document.querySelector('#saveBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const actionOut = document.querySelector('#actionOut');

function handleAction(action) {
  actionOut.textContent = `Action: ${action}`;
}

// Pass our own argument using a tiny arrow wrapper
saveBtn.addEventListener('click',()=>handleAction('Save'));
deleteBtn.addEventListener('click',()=>handleAction('Delete'));
