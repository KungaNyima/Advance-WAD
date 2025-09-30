'use strict';

/*
SLIDE 2 — querySelector (first match)
- Live-code:
  const one = document.querySelector('#one');
  const firstPick = document.querySelector('.pick');
  const anyH2 = document.querySelector('section h2');
- Demo null case by selecting something that doesn't exist.
*/

const one = document.querySelector('#one');
const pick = document.querySelector('.pick');




/*
SLIDE 3 — querySelectorAll (many / static NodeList)
- Buttons already on page:
  #addTodo      -> add a new <li class="todo">
  #markInitial  -> add 'loaded' to the INITIAL snapshot
  #markFresh    -> re-query and then add style to all
- Show that the initial NodeList doesn't auto-update (static snapshot).
*/

const todosInitial = document.querySelectorAll('.todo'); // static snapshot
document.querySelector('#markInitial').addEventListener('click',()=>{
  for(const el of todosInitial) el.classList.add('loaded');
})
document.querySelector('#addTodo').addEventListener('click',()=>{
  const ListItem = document.createElement('li');
  ListItem.className = 'todo';
  ListItem.textContent='new todo';
  document.querySelector('#todos').append(ListItem);
});


document.querySelector('#markFresh').addEventListener('click',() => {
  const newTodos = document.querySelectorAll('.todo');
  for(const newTodo of newTodos) newTodo.classList.add('loaded');
});





/*
SLIDE 4 — textContent vs innerText
- Demo:
  const el = document.querySelector('#hiddenText');
  textOut.textContent = 'textContent: ' + el.textContent;
  textOut.innerHTML += '<br>innerText: ' + el.innerText;
*/
document.querySelector('#textOut').innerHTML=(function(){
  const el=document.querySelector('#hiddenText');
  return `textContent: "${el.textContent}"<br>innerText:"${el.innerText}"`;
});



/*
SLIDE 5 — Setting content safely (textContent)
- Use user input but set via textContent to avoid HTML parsing.
*/
document.querySelector('#nameInput').addEventListener('input',(e)=>{
  const name =e.target.value.trim()
  document.querySelector('#safeMsg').textContent = name? `Hello, ${name}!`: ''
})



/*
SLIDE 6 — innerHTML (trusted only)
- Show a trusted mini template. Do NOT insert user input here.
*/

document.querySelector('#addCard').addEventListener('click',()=>{
  const card = document.querySelector('#cards');
  const title = 'Trusted Card';
  card.innerHTML += `<article class="card old"><h3>${title}</h3></article>`;
});



/*
SLIDE 7 — classList basics
- Add/remove/toggle/replace/contains
*/

const box = document.querySelector('#box');



/*
SLIDE 8 — State via classes (JS + CSS)
- Toggle .open on the panel to animate max-height.
*/




/*
SLIDE 9 — Null checks & timing
- Show a safe select + guard:
  const maybe = document.querySelector('.does-not-exist');
  if (!maybe) { nullOut.textContent = 'Element not found (safe check)'; }
*/


