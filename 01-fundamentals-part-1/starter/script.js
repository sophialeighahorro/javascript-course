// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js ="amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("GUMANA KA");

// console.log("=== VARIABLES ===");
// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age); 
// age = 50;
// console.log(age);

// const birthYear = 2005;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "designer";
// console.log(job); 

// let lastName = "Ahorro"

// console.log("=== DATA TYPES ===");

// //number
// age = 20;
// console.log(age);
// console.log(typeof age);

// //string
// let username = "iya";
// console.log(username);
// console.log(typeof username)

// //boolean
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun)

// //undefined
// let year;
// console.log(year);
// console.log(typeof year);

// //dynamic variable
// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// //change to string
// dynamicVariable = "Now I'm a string";
// console.log(dynamicVariable, typeof dynamicVariable);

// //change to boolean
// dynamicVariable = true
// console.log(dynamicVariable, typeof dynamicVariable);

//basic operators - math
console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log("Math operations");
console.log("Addition:", 10 + 5); //15
console.log("Subtraction:", 20 - 8); //12
console.log("Multiplication:", 4 * 7); //28
console.log("Division:", 15/3); //5
console.log("Exponentiation:", 2 ** 3); //8

//Math with strings
const firstName = "Jonas";
const lastName = "Doe";
console.log(firstName + " " + lastName);

console.log("Hello " + " " + "World" + "!");
console.log("I am " + 20 + " years old");

////
console.log("=== ASSIGNMENT OPERATORS===");

let x = 10 + 15;
console.log("x starts as: ", x);

x += 10;
console.log("x starts as: ", x);

x *= 4;
console.log("x starts as:", x);

x /= 2;
console.log("x starts as:", x);

x++;
console.log("x starts as:", x);

x--;
console.log("x starts as:", x);

/////
console.log("=== COMPARISON OPERATORS ===");

console.log("Age Comparison");

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageJonas < 30);

console.log("Number comparison");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15);

// storing comparison result
const isFullAge = ageSarah >= 18;
console.log("Sarah is adult", isFullAge);

console.log("Complex comparison");
console.log(now - 1991 > now - 2018);

let z, y; 'Doe';
z = y = 25 - 10 - 5;
console.log(z, y);

//How it works: 25 - 10 - 5 = 10, then y = 10, then x = 10

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// Without parentheses would be wrong:
// ageJonas + ageSarah / 2 = 46 + 9.5 = 55.5 ❌

///coding challenge 1

//test data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let markBMI = massMark / heightMark ** 2;
console.log(markBMI);

let johnBMI = massJohn / heightJohn **2;
console.log(johnBMI);

console.log("Mark's BMI: ", markBMI);
console.log("John's BMI: ", johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log("Mark has a higher BMI: ", markHigherBMI);

//test data 2

let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

let BMImark = markMass / markHeight ** 2;
console.log(BMImark);

let BMIjohn = johnMass / johnHeight **2;
console.log(BMIjohn);

console.log("Mark's BMI: ", BMImark);
console.log("John's BMI: ", BMIjohn);
console.log("Mark has a higher BMI: ", markHigherBMI);
