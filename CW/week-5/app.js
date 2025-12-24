
// SLIDE 2: Event Listener Essentials
const normalBtn = document.querySelector('#normal-btn');
const onceBtn = document.querySelector('#once-btn');
const captureBtn = document.querySelector('#capture-btn');
const output1 = document.querySelector('#output-1');

let normalCount = 0;

normalBtn.addEventListener('click', () => {
  normalCount++;
  output1.textContent = `Normal button clicked ${normalCount} times`;
  console.log('Normal button clicked');
});

// Once option - only fires once!
let onceCount = 0;
onceBtn.addEventListener('click', () => {
  onceCount++;
  output1.textContent = `Once button clicked ${onceCount} time (will disable after first click)`;
  console.log('Once button clicked - listener will remove itself');
  onceBtn.textContent = 'Once Only (Used!)';
  onceBtn.disabled = true;
}, { once: true });

// Capture phase example
const captureParent = captureBtn.parentElement;
captureParent.addEventListener('click', () => {
  console.log('1️⃣ Parent clicked in CAPTURE phase (fires FIRST)');
}, { capture: true });

captureBtn.addEventListener('click', () => {
  output1.textContent = 'Capture button clicked - check console to see order!';
  console.log('2️⃣ Capture button clicked in BUBBLE phase (fires SECOND)');
});


// SLIDE 3: The Event Object


const eventBox = document.querySelector('#event-box');
const output2 = document.querySelector('#output-2');

eventBox.addEventListener('click', (e) => {
  output2.innerHTML = `
    Event Type: ${e.type}<br>
    Target (what was clicked): ${e.target.tagName}.${e.target.className || 'no-class'}<br>
    CurrentTarget (listener on): ${e.currentTarget.id}<br>
    Mouse Position: X: ${e.clientX}, Y: ${e.clientY}
  `;
  console.log('Event Object:', {
    type: e.type,
    target: e.target,
    currentTarget: e.currentTarget,
    clientX: e.clientX,
    clientY: e.clientY
  });
});


// SLIDE 4: Prevent Default


const demoForm = document.querySelector('#demo-form');
const demoLink = document.querySelector('#demo-link');
const output3 = document.querySelector('#output-3');

demoForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop page reload!
  const username = demoForm.username.value;
  output3.textContent = `Form submitted! Username: ${username} (Page didn't reload!)`;
  console.log('Form submitted with username:', username);
  demoForm.reset();
});

demoLink.addEventListener('click', (e) => {
  e.preventDefault(); // Stop navigation
  output3.textContent = 'Link clicked but navigation prevented!';
  console.log('Link click prevented from navigating');
});


// SLIDE 5: Bubbling & Capturing


const outerBox = document.querySelector('#outer-box');
const middleBox = document.querySelector('#middle-box');
const innerBox = document.querySelector('#inner-box');
const toggleStop = document.querySelector('#toggle-stop');

let stopPropagation = false;

toggleStop.addEventListener('click', () => {
  stopPropagation = !stopPropagation;
  toggleStop.textContent = `stopPropagation: ${stopPropagation ? 'ON' : 'OFF'}`;
  console.log(`stopPropagation toggled: ${stopPropagation}`);
});

// Capture phase listeners (fire first, going DOWN)
outerBox.addEventListener('click', () => {
  console.log('↓ CAPTURE: Outer box (going down)');
}, { capture: true });

middleBox.addEventListener('click', () => {
  console.log('↓ CAPTURE: Middle box (going down)');
}, { capture: true });

innerBox.addEventListener('click', () => {
  console.log('↓ CAPTURE: Inner box (going down)');
}, { capture: true });

// Bubble phase listeners (fire last, going UP)
innerBox.addEventListener('click', (e) => {
  if (stopPropagation) {
    e.stopPropagation();
    console.log(' TARGET: Inner box clicked - STOPPED propagation!');
  } else {
    console.log('TARGET: Inner box clicked (will bubble up)');
  }
});

middleBox.addEventListener('click', () => {
  console.log('↑ BUBBLE: Middle box (going up)');
});

outerBox.addEventListener('click', () => {
  console.log('↑ BUBBLE: Outer box (going up)');
});


// SLIDE 6 & 7: Event Delegation


const todoList = document.querySelector('#todo-list');
const addTodoBtn = document.querySelector('#add-todo');
const output5 = document.querySelector('#output-5');

let todoCounter = 2;

// ONE listener for ALL todos (including future ones!)
todoList.addEventListener('click', (e) => {
  // Check if toggle was clicked
  if (e.target.matches('.toggle')) {
    const todo = e.target.closest('.todo');
    if (!todo || !todoList.contains(todo)) return; // Guard clause
    
    todo.classList.toggle('done');
    const isDone = todo.classList.contains('done');
    e.target.textContent = isDone ? '☑' : '☐';
    output5.textContent = `Todo ${isDone ? 'completed' : 'uncompleted'}!`;
    console.log('Todo toggled:', isDone ? 'done' : 'undone');
  }
  
  // Check if delete was clicked
  if (e.target.matches('.delete')) {
    const todo = e.target.closest('.todo');
    if (!todo || !todoList.contains(todo)) return; // Guard clause
    
    const text = todo.querySelector('.text').textContent;
    todo.remove();
    output5.textContent = `Deleted: "${text}"`;
    console.log('Todo deleted:', text);
  }
});

// Add new todo (delegation works automatically!)
addTodoBtn.addEventListener('click', () => {
  todoCounter++;
  const li = document.createElement('li');
  li.className = 'todo';
  li.innerHTML = `
    <span class="toggle">☐</span>
    <span class="text">New Todo #${todoCounter}</span>
    <button class="delete">Delete</button>
  `;
  todoList.appendChild(li);
  output5.textContent = `Added new todo #${todoCounter} - try clicking it!`;
  console.log('New todo added:', todoCounter);
});


// SLIDE 8: Keyboard Events


const keyboardInput = document.querySelector('#keyboard-input');
const output6 = document.querySelector('#output-6');
const keyInfo = document.querySelector('#key-info');

keyboardInput.addEventListener('keydown', (e) => {
  keyInfo.textContent = `Key: "${e.key}" | Code: ${e.code} | Ctrl: ${e.ctrlKey} | Shift: ${e.shiftKey} | Alt: ${e.altKey}`;
  
  console.log('Keydown:', {
    key: e.key,
    code: e.code,
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    altKey: e.altKey
  });
  
  // Enter to save
  if (e.key === 'Enter') {
    output6.textContent = `Saved: "${keyboardInput.value}"`;
    console.log('Enter pressed - saved:', keyboardInput.value);
    keyboardInput.value = '';
  }
  
  // Escape to clear
  if (e.key === 'Escape') {
    keyboardInput.value = '';
    output6.textContent = 'Cleared!';
    console.log('Escape pressed - input cleared');
  }
  
  // Ctrl + S
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    output6.textContent = 'Ctrl+S detected (browser save prevented)';
    console.log('Ctrl+S shortcut detected');
  }
});

keyboardInput.addEventListener('keyup', (e) => {
  console.log('Key released:', e.key);
});


// SLIDE 9: Focus & Blur


const focusInputs = document.querySelectorAll('.focus-input');
const output7 = document.querySelector('#output-7');

// Using focusin/focusout for delegation
document.querySelector('.demo-section:nth-child(8)').addEventListener('focusin', (e) => {
  if (e.target.matches('.focus-input')) {
    output7.textContent = `Focused: ${e.target.placeholder}`;
    console.log('Input focused:', e.target.placeholder);
  }
});

document.querySelector('.demo-section:nth-child(8)').addEventListener('focusout', (e) => {
  if (e.target.matches('.focus-input')) {
    output7.textContent = `Blurred: ${e.target.placeholder}`;
    console.log('Input blurred:', e.target.placeholder);
  }
});


// SLIDE 10: Forms (input, change, submit)


const nameField = document.querySelector('#name-field');
const charCount = document.querySelector('#char-count');
const emailField = document.querySelector('#email-field');
const emailStatus = document.querySelector('#email-status');
const nameForm = document.querySelector('#name-form');
const output8 = document.querySelector('#output-8');

// INPUT event - fires on every keystroke
nameField.addEventListener('input', () => {
  const length = nameField.value.length;
  const max = 20;
  charCount.textContent = `${length} / ${max}`;
  console.log('Input event - character count:', length);
});

// CHANGE event - fires when done (blur)
emailField.addEventListener('change', () => {
  const email = emailField.value;
  const isValid = email.includes('@') && email.includes('.');
  
  if (isValid) {
    emailStatus.textContent = 'Valid';
  } else {
    emailStatus.textContent = 'Invalid';
  }
  console.log('Email validated:', email, isValid ? '(valid)' : '(invalid)');
});

// SUBMIT event
nameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = nameField.value;
  const email = emailField.value;
  
  output8.textContent = `Form submitted! Name: ${name}, Email: ${email}`;
  console.log('Form submitted - Name:', name, 'Email:', email);
  
  nameForm.reset();
  charCount.textContent = '0 / 20';
  emailStatus.textContent = '';
});
