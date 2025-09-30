// Behind the Scenes Development Hour 1 - Scoping & Hoisting
'use strict';

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

/*
In this hour, we'll explore:
1. How JavaScript executes code (execution contexts)
2. Where variables are accessible (scoping)
3. Why some code works before declaration (hoisting)
4. How to avoid common pitfalls (TDZ and strict mode)

This foundation is crucial for understanding JavaScript's behavior!
*/

// // Global Execution Context
// console.log('Starting program');

// function alpha() {
//   console.log('aplha:start');
//   beta();
//   console.log('alpha:end');
// }

// function beta() {
//   console.log('beta');
// }

// alpha();

// function outerFunction() {
//   console.log('Outer function start');
//   innerFunction();
//   console.log('Outer function end');
// }

// function innerFunction() {
//   console.log('Inner Function');
//   console.trace();
// }

// outerFunction();

// Section 3: hoisting and temporal dead zone

// //  hoisted - initialized to undefined
// console.log(varX);
// // they exists but uninitialized, or temporal dead zone magagamit lng pag na initialize ng tama
// console.log(letX);
// console.log(constX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// // hoisted
// console.log(addDecl(5, 3));
// function addDecl(a, b) {
//   return a + b;
// }

// // temporal dead zone. it cant run because addExpr is just a variable that initialized
// // console.log(addExpr(3,2));
// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;