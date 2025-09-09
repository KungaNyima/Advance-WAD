'use strict';

// ===== Global scope =====
const site = 'Web Warriors';        // global: available everywhere in this file
let userCount = 0;                  // global (changeable)
console.log('GLOBAL site:', site);  

// ===== Function scope =====
function showScopes() {
  const insideFn = 'I live inside showScopes()';
  userCount += 1;                   // can read/update global let
  console.log('Inside function, site:', site);     // ✅ access global
  console.log('Inside function, insideFn:', insideFn); // ✅
}
showScopes();

// console.log(insideFn); //  ReferenceError (function-scoped)

// ===== Block scope (with let/const) =====
if (true) {
  let msg = 'hi';                   // block-scoped (only inside { })
  const count = 1;                  // block-scoped
  var leaked = 'var leaks out of blocks'; // function-scoped, IGNORES block
  console.log('Inside block:', msg, count, leaked); // ✅
}

// Accessing block-scoped variables outside → not defined
// console.log(msg);   //  ReferenceError
// console.log(count); //  ReferenceError

// `typeof` on an undeclared name returns "undefined" (doesn't throw)
console.log('Outside block, typeof msg:', typeof msg);     // "undefined"
console.log('Outside block, typeof count:', typeof count); // "undefined"

// `var` ignores block scope (function-scoped), so it's visible here:
console.log('Outside block, leaked via var:', leaked);     // "var leaks out of blocks"