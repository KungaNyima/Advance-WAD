'use strict';
console.log(' HOISTING & TDZ DEMO START ');

//1) Function declaration — fully hoisted (callable early)


greet(); //works (declaration is hoisted)
function greet() {
  console.log('1) function declaration: hello');
}

//  2) var — name is hoisted as `undefined` (function-scoped)


console.log('\n2) var before assignment:', v); // undefined
var v = 42;
console.log('2) var after  assignment:', v);   // 42


//  3) let / const — binding hoisted but TDZ-blocked (ReferenceError if touched early)

// console.log('3) let before line:', a); // ReferenceError (TDZ)
let a = 10;
console.log('3) let after line:', a);     // 10



// console.log('3) const before line:', b); // ReferenceError (TDZ)
const b = 20;
console.log('3) const after line:', b);     // 20


// 4) Function expression / arrow assigned to const/let — NOT callable before their line (TDZ)


// shout(); // ReferenceError (TDZ: shout exists but not initialized)
const shout = function () { console.log('4) function expression: shout'); };
shout(); // ✅ works here


// wave();  //  ReferenceError (TDZ)
const wave = () => console.log('4) arrow function: wave');
wave(); // ✅ works here

//  5) Function expression assigned to var — name hoisted as undefined
//Calling early ⇒ TypeError (undefined is not a function)


// say(); //TypeError: say is not a function (var is undefined at this point)
var say = function () { console.log('5) var + function expression: say'); };
say(); // ✅ works here
