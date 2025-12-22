// ================================
// Kunga Nyima 
// Week 4- Assignment
// ================================

/*
Homework — DOM (Part 1)
This file intentionally contains ONLY instructions (no code). Write your solutions in this file.



/*
Task A — Announcements (text vs HTML)
Goal:
- Read from #announceInput.
- When #announceTextBtn is clicked:
  a) Create a new .post element and append it to #announceFeed.
  b) Set the announcement text using textContent (safe).
  c) Include a small time string (e.g., new Date().toLocaleTimeString()) as a separate node.
- When #announceHtmlBtn is clicked:
  a) Create a trusted card for the feed using innerHTML (no user input inside innerHTML).
  b) Example structure: <article class="post"><h4>Notice</h4><p>Trusted body…</p><div class="time">...</div></article>
  c) Demonstrate that innerHTML removes previous listeners if you overwrite the entire container (explain in a comment; do not break your app).
Hints:
- Select: #announceInput, #announceTextBtn, #announceHtmlBtn, #announceFeed.
- Use document.createElement for the safe version; assign text via textContent.
- For innerHTML, append using element.innerHTML += '...' (trusted static string only).
*/

// Select key DOM elements
const announceInput = document.querySelector("#announceInput");
const announceTextBtn = document.querySelector("#announceTextBtn");
const announceHtmlBtn = document.querySelector("#announceHtmlBtn");
const announceFeed = document.querySelector("#announceFeed");

// --- (a) Safe version — textContent ---
announceTextBtn.addEventListener("click", () => {
  const text = announceInput.value.trim();
  if (!text) return; // don't post empty messages

  // Create elements safely
  const post = document.createElement("div");
  post.classList.add("post");

  const msg = document.createElement("p");
  msg.textContent = text; // SAFE — user input inserted as plain text

  const time = document.createElement("span");
  time.classList.add("time");
  time.textContent = new Date().toLocaleTimeString();

  // Assemble the post
  post.appendChild(msg);
  post.appendChild(time);

  // Add it to the feed
  announceFeed.appendChild(post);

  // Clear the input
  announceInput.value = "";
});

// --- (b) Trusted HTML version — innerHTML ---
announceHtmlBtn.addEventListener("click", () => {
  // Create a trusted announcement (no user input!)
  const now = new Date().toLocaleTimeString();
  const trustedCard = `
    <article class="post">
      <h4>Notice</h4>
      <p>This is a trusted, static announcement.</p>
      <div class="time">${now}</div>
    </article>
  `;

  // Append using += to keep existing content and listeners intact
  announceFeed.innerHTML += trustedCard;

  // ⚠️ Note:
  // If we used `announceFeed.innerHTML = trustedCard;`
  // it would overwrite the entire container,
  // REMOVING any existing posts and their event listeners.
  // Using `+=` only appends new HTML safely.
});




/*
Task B — Gallery (querySelectorAll + classList)
Goal:
- Take a static snapshot of all .tile elements (NodeList from querySelectorAll) on load.
- Clicking #markInitialBtn should add class "selected" to tiles in the initial snapshot.
- Clicking #addTileBtn should append a new <figure class="tile">…</figure> to #gallery.
- Clicking #markFreshBtn should re-query .tile and mark all current tiles (including new ones) as "selected".
Extras:
- Add click-to-toggle on each .tile (use event delegation on #gallery).
- Show in console that the initial NodeList length does not change after adding a tile.
*/

// Select the main gallery container and buttons
const gallery = document.querySelector("#gallery");
const markInitialBtn = document.querySelector("#markInitialBtn");
const markFreshBtn = document.querySelector("#markFreshBtn");
const addTileBtn = document.querySelector("#addTileBtn");

// 1️⃣ Take a static snapshot of all .tile elements on load
const initialTiles = document.querySelectorAll(".tile");
console.log("Initial tile count (snapshot):", initialTiles.length);

// 2️⃣ Mark (snapshot) — add 'selected' to tiles from the static NodeList
markInitialBtn.addEventListener("click", () => {
  initialTiles.forEach(tile => tile.classList.add("selected"));
});

// 3️⃣ Add Tile — append a new <figure class="tile"> to #gallery
let tileSeed = 4; // continue from 3 since initial had 3
addTileBtn.addEventListener("click", () => {
  const newTile = document.createElement("figure");
  newTile.classList.add("tile");
  newTile.innerHTML = `
    <img src="https://picsum.photos/seed/${tileSeed}/160/100" alt="">
    <figcaption>Tile ${tileSeed}</figcaption>
  `;
  tileSeed++;
  gallery.appendChild(newTile);

  // Show that the original NodeList length did NOT change
  console.log("After adding tile → initial snapshot length:", initialTiles.length);
});

// 4️⃣ Mark (fresh) — re-query .tile and mark all current tiles
markFreshBtn.addEventListener("click", () => {
  const currentTiles = document.querySelectorAll(".tile"); // new live query
  currentTiles.forEach(tile => tile.classList.add("selected"));
  console.log("Fresh mark applied. Total current tiles:", currentTiles.length);
});

// 5️⃣ Event Delegation — click any tile to toggle 'selected' state
gallery.addEventListener("click", event => {
  const tile = event.target.closest(".tile");
  if (!tile) return; // ignore clicks outside tiles
  tile.classList.toggle("selected");
});


/*
Task C — Todo List (safe creation + state classes)
Goal:
- Add new items by clicking #addTodoBtn. Use text from #todoInput.
- Create each <li class="todo"> with a <span class="label"> and a <button class="todo-toggle">Done</button>.
- Use textContent for the label (do not inject raw input via innerHTML).
- Clicking the "Done" button toggles class "done" on its parent .todo (event delegation recommended on #todoList).
- Clicking #clearDoneBtn removes all .todo items that have class "done".
- Update #todoStats with counts (total, done, remaining).
*/

// Select key elements
const todoInput = document.querySelector("#todoInput");
const addTodoBtn = document.querySelector("#addTodoBtn");
const clearDoneBtn = document.querySelector("#clearDoneBtn");
const todoList = document.querySelector("#todoList");
const todoStats = document.querySelector("#todoStats");

// 🔁 Helper function to update statistics
function updateStats() {
  const todos = todoList.querySelectorAll(".todo");
  const done = todoList.querySelectorAll(".todo.done");
  const total = todos.length;
  const completed = done.length;
  const remaining = total - completed;

  todoStats.textContent = `Total: ${total} | Done: ${completed} | Remaining: ${remaining}`;
}

// 🟢 Add new todo item
addTodoBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (!text) return; // Ignore empty input

  // Create elements safely (no innerHTML injection)
  const li = document.createElement("li");
  li.classList.add("todo");

  const label = document.createElement("span");
  label.classList.add("label");
  label.textContent = text;

  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add("todo-toggle");
  toggleBtn.textContent = "Done";

  li.appendChild(label);
  li.appendChild(toggleBtn);
  todoList.appendChild(li);

  // Clear input and update stats
  todoInput.value = "";
  updateStats();
});

// 🟡 Toggle done state using event delegation
todoList.addEventListener("click", (event) => {
  const toggleBtn = event.target.closest(".todo-toggle");
  if (!toggleBtn) return;

  const todoItem = toggleBtn.closest(".todo");
  todoItem.classList.toggle("done");

  updateStats();
});

// 🔴 Clear all done todos
clearDoneBtn.addEventListener("click", () => {
  const doneTodos = todoList.querySelectorAll(".todo.done");
  doneTodos.forEach(todo => todo.remove());
  updateStats();
});

// Initialize stats on load
updateStats();



/*
Task D — Panel
Goal:
- Clicking "Toggle Panel" toggles the visibility of #panel.
- Clicking "Toggle Panel" → toggle class "open" on #panel.
- "Add warn" / "Remove warn" → add/remove class "warn" on #panel.
*/

// Select all necessary elements
const panel = document.querySelector("#panel");
const openPanelBtn = document.querySelector("#openPanelBtn");
const addWarnBtn = document.querySelector("#addWarnBtn");
const removeWarnBtn = document.querySelector("#removeWarnBtn");

// 🟢 Toggle visibility (open/close)
openPanelBtn.addEventListener("click", () => {
  panel.classList.toggle("open");
});

// 🟡 Add warn class
addWarnBtn.addEventListener("click", () => {
  panel.classList.add("warn");
});

// 🔴 Remove warn class
removeWarnBtn.addEventListener("click", () => {
  panel.classList.remove("warn");
});



/*
Task E — Safe Select
- Try to select an element that may not exist.
- If it’s null, show a friendly message in #nullOutput (no errors).
*/

// Try to select something that might not exist
const maybeElement = document.querySelector("#notReal"); // this element doesn't exist
const nullOutput = document.querySelector("#nullOutput");

// Check safely before using it
if (maybeElement) {
  nullOutput.textContent = "✅ Found the element!";
} else {
  nullOutput.textContent = "⚠️ Element not found — handled safely (no errors).";
}
