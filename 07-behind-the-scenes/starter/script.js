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


console.log('=== `this` KEYWORD & ARROW FUNCTIONS ===');

////////// Understanding the `this` Keyword
// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello, I am ${this.name}`);
//   },
// };

// person.greet();

// // Method borrowing
// const anotherPerson = {
//   name: 'Sarah',
// };

// // Borrow greet function
// anotherPerson.greetAnotherPerson = person.greet;
// // Dosplay or run the greet function for anotherPerson
// anotherPerson.greetAnotherPerson();

// // Detached function
// const greetFunction = person.greet;
// greetFunction();

////////// Arrow Functions vs Regular Functions
// const obj = {
//   name: 'Object',
//   regularMethod: function () {
//     console.log(`Regular: ${this.name}`);
//   },

//   arrowMethod: () => {
//     console.log(`Arrow: ${this.name}`);
//   },
// };

// obj.regularMethod();
// obj.arrowMethod();

// const timer = {
//   name: 'Timer',
//   start: function () {
//     console.log(`${this.name} starting...`);

//     // to call the property name we need to create this self pattern
//     // so that js can access it easily
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },

//   // In modern approch you just need a parent function to have a arrow function in it
//   // so that we can call the property without creating self pattern

//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern...`);
//     }, 1500);
//   },
// };

// timer.start();
// timer.startModern();

////////// The `arguments` Keyword & Advanced Scenarios

// const functionTypes = {
//   regularFunction: function () {
//     console.log(`Arguments length: ${arguments.length}`);
//     console.log(`First argument: ${arguments[0]}`);
//   },

//   arrowFunction: () => {
//     console.log(arguments);
//     console.log(`Arrow function called`);
//   },

//   modernFunction: (...args) => {
//     console.log(`Args length ${args.length}`);
//     console.log(`First arg: ${args[0]}`);
//   },
// };

// functionTypes.regularFunction('hello', 'nga');
// // functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach')
