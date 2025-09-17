/**
 * Flow + Arrays (Part 1) — Class Exercise (Node.js Worksheet)
 * Run with: node app.js
 *
 * INSTRUCTIONS
 * - Answer directly in this file.
 * - Write your code BELOW each prompt.
 * - Keep each task self-contained (you can reuse variables per task).
 * - Use console.log to check results as you go.
 */

/* Part A — Decisions (if/else, ternary, optional switch). */

/**
 * 1) Grade label
 * Input: score (0–100)
 * Output: 'A' | 'B' | 'C' | 'D/F' using if / else if / else
 * Edge: <0 or >100 → 'Invalid'
 */

// Your code:
const score = 90;
if (score >= 90) {
   console.log("A");
}
else if (score >= 80) {
   console.log("B");
}
else if (score >= 70) {
   console.log("C");
}
else {
   console.log("D/F");
}

/**
 * 1.1) Grade label
 * Input: score (0–100)
 * Output: 'A' | 'B' | 'C' | 'D/F' using switch case
 * Edge: <0 or >100 → 'Invalid'
 */


let score2 = 87;
switch (true) {
   case (score2 >= 90):
      console.log("A");
      break;
   case (score2 >= 80):
      console.log("B");
      break;
   case (score2 >= 70):
      console.log("C");
      break;
   default:
      console.log("D/F");
}




/**
 * 2) Adult or Minor (ternary)
 * Input: age
 * label = age >= 18 ? 'Adult' : 'Minor'
 */

// Your code:
let age = 26;
const label = age >= 18 ? 'Adult' : 'Minor'
console.log(label)



/**
 * 3) (Optional) Role access (switch)
 * Input: role in ['admin','editor','viewer']
 * Print permissions; include a default
 */

// Your code:
const role = "admin";
switch (role){
   case "admin":
      console.log('Full access');
      break;
   case 'editor':
      console.log('Edit permissions');
      break;
   case 'viewer':
      console.log('Read only');
      break;
   default:
      console.log("No Access");
}


/*   Part B — Loops (for, while, for…of). */

/**
 * 4) Count up with for
 * Print 1…10 (watch off-by-one) 
 */

// Your code:
for (let i = 1; i <= 10; i++) {
   console.log(i);
}




/**
 * 4.1) print triangle using for loop 
 */

// Your code:


let height = 5;
for (let i = 1; i <= height; i++) {
  let row = ' '.repeat(height - i) + '*'.repeat(2 * i - 1);
  console.log(row);
}



/**
 * 5) Countdown with while
 * From 5 down to 1; skip printing 2 using continue
 */

// Your code:
let count = 5;
while (count > 0) {
if (count === 2) {
count--;
continue; // Skip this iteration
}
if (count === 1) {
console.log(`Count: ${count}`);
break; // Exit the loop early
}
console.log(`Count: ${count}`); count--;
}

/**
 * 6) Visit items with for…of
 * const skills = ['HTML','CSS','JS'];
 * Log "Learn: <skill>" for each
 */

// Your code:




/* =========================
   Part C — Arrays: create, read, write, methods
   ========================= */

/**
 * 7) Create & edit
 * const colors = ['red','green'];
 * Replace 'green' with 'lime'
 * push('blue'), then pop() into lastColor
 */

// Your code:




/**
 * 8) First/last & length
 * const items = ['a','b','c','d'];
 * Save first and last using indexes and length
 */

// Your code:




/**
 * 9) Check & copy
 * Array.isArray(items) → true
 * Make a shallow copy with spread [...items]
 * Change copy[0]; original must remain 'a'
 */

// Your code:




/**
 * 10) includes, indexOf, slice, splice
 * const list = ['a','b','c','d'];
 * Check if 'b' exists
 * Get firstTwo with slice (non-destructive)
 * Remove 'c' with splice (destructive) — explain difference in a comment
 */

// Your code:




/* Part D — Loop + Array patterns */

/**
 * 11) Sum / Min / Max / Avg (single pass)
 * const prices = [12, 5, 9, 20, 3];
 * Compute { count, sum, min, max, avg }
 * Handle empty array (define what to show)
 */

// Your code:




/**
 * 12) Filter (manual)
 * Build expensive with prices >= 10 using a loop + push
 */

// Your code:




/**
 * 13) Find first match
 * const names = ['sam','lee','sam','ana'];
 * Set foundSam = true if any 'sam' exists; stop early when found
 */

// Your code:




/**
 * 14) Count occurrences
 * Count how many times 'sam' appears
 * Bonus: build an object frequency map for all names, e.g. { sam: 2, lee: 1, ana: 1 }
 */

// Your code:




/* =========================
   Part E — Mini Project (15–20 min)
   ========================= */

/**
 * "Receipt Stats"
 * const cart = [4.99, 14.5, 3, 12.25, 7.75];
 * Compute and log:
 *  - items (count), subtotal (sum), min, max, avg
 *  - over10 (array of prices >= 10)
 * Then log a summary string:
 *  "Items: X | Subtotal: $Y.YY | Min: $ | Max: $ | Avg: $ | Over10: [ ... ]"
 * Stretch: add taxRate (e.g., 0.0875) and compute total
 */

// Your code:





/**
 * End of worksheet — great job!
 */
