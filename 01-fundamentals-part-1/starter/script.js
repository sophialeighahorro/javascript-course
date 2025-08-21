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
// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations");
// console.log("Addition:", 10 + 5); //15
// console.log("Subtraction:", 20 - 8); //12
// console.log("Multiplication:", 4 * 7); //28
// console.log("Division:", 15/3); //5
// console.log("Exponentiation:", 2 ** 3); //8

// //Math with strings
// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);

// console.log("Hello " + " " + "World" + "!");
// console.log("I am " + 20 + " years old");

// ////
// console.log("=== ASSIGNMENT OPERATORS===");

// let x = 10 + 15;
// console.log("x starts as: ", x);

// x += 10;
// console.log("x starts as: ", x);

// x *= 4;
// console.log("x starts as:", x);

// x /= 2;
// console.log("x starts as:", x);

// x++;
// console.log("x starts as:", x);

// x--;
// console.log("x starts as:", x);

// /////
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age Comparison");

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparison");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// // storing comparison result
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult", isFullAge);

// console.log("Complex comparison");
// console.log(now - 1991 > now - 2018);

// let z, y; 'Doe';
// z = y = 25 - 10 - 5;
// console.log(z, y);

// //How it works: 25 - 10 - 5 = 10, then y = 10, then x = 10

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// // Without parentheses would be wrong:
// // ageJonas + ageSarah / 2 = 46 + 9.5 = 55.5 ❌

// ///coding challenge 1

// //test data 1
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let markBMI = massMark / heightMark ** 2;
// console.log(markBMI);

// let johnBMI = massJohn / heightJohn **2;
// console.log(johnBMI);

// console.log("Mark's BMI: ", markBMI);
// console.log("John's BMI: ", johnBMI);
// let markHigherBMI = markBMI > johnBMI;
// console.log("Mark has a higher BMI: ", markHigherBMI);

// //test data 2

// let markMass = 95;
// let markHeight = 1.88;
// let johnMass = 85;
// let johnHeight = 1.76;

// let BMImark = markMass / markHeight ** 2;
// console.log(BMImark);

// let BMIjohn = johnMass / johnHeight **2;
// console.log(BMIjohn);

// console.log("Mark's BMI: ", BMImark);
// console.log("John's BMI: ", BMIjohn);
// console.log("Mark has a higher BMI: ", markHigherBMI);

/////////////
// strings and template literals

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// // The modern way - ES6 Template Literals
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// //Use backticks (`) instead of quotes
// // Variables inside ${variable} placeholders
// // No more + signs or space management
// // Much cleaner and readable!

// // Any expression works inside ${}
// console.log(`I'm ${2037-1991} years old`);
// console.log(`Math works: ${2+3} equals five`);
// console.log(`Comparisons too: ${5>3}`);

// // You can use backticks for any string
// console.log(`Just a regular string`);

// // Old way - painful
// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// // New way - natural
// console.log(`String
// multiple
// lines`);

// // Backticks (`) are above the Tab key
// // ${expression} can contain any JavaScript expression
// // Multiline strings work naturally
// // Professional and modern approach

// /// EXERCISE 1
// const myName = "Sophia Leigh Ahorro"; // Your name
// const myAge = 20; // Your age
// const myJob = "IT student"; // Your job/student status
// const currentYear = 2025;

// // Use template literals to create:
// // "Hi, I'm [name], a [age] year old [job]!"
// // Log it to the console
// const iya = `Hi, I'm ${myName}, a ${myAge} year old ${myJob}!`;
// console.log(iya);

// // EXERCISE 2
// // Create a template literal that:
// // 1. Calculates your birth year: currentYear - myAge
// // 2. Shows a calculation: 10 * 5
// // 3. Includes a comparison: myAge >= 18
// // Example: "Born in ${}, 10*5 = ${}, Adult: ${}"

// const iya2 = `Born in ${currentYear - myAge}, 10 * 5 = ${10 * 5}, Adult: ${myAge >= 18}`;
// console.log(iya2);

// /// Making Decisions with if/else

// // Basic if/else Structure

// // Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// // How it works:

// if keyword starts the decision
// Condition in parentheses (must be true/false)
// Code block in curly braces {}
// else is optional - alternative path

// Variable Assignment with Decisions
const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); // 21

// Real-World Decision Making
const score = 85;

if (score >= 60) {
  console.log(`You passed with ${score} points! 🎉`);
  console.log("Congratulations!");
} else {
  const pointsNeeded = 60 - score;
  console.log(`You failed. Need ${pointsNeeded} more points.`);
}

//Key Points:

// Control structures change program flow
// Boolean conditions must evaluate to true/false
// Block scope - variables inside {} have limited scope
// Real-world applications - age verification, permissions, games

//Exercise 1: Grade Calculator

// Create a grade calculator:
const testScore = 87; // Change this to test different scores

// Use if/else to determine:
// 90+: "Excellent! Grade A"
// 80-89: "Good job! Grade B"
// 70-79: "Not bad! Grade C"
// 60-69: "You passed! Grade D"
// Below 60: "You failed! Study harder"

if (testScore >= 90) {
  console.log("Excellent! Grade A");
} else if (testScore >= 80) {
  console.log("Good job! Grade B");
} else if (testScore >= 70) {
  console.log("Not bad! Grade C");
} else if (testScore >= 60) {
console.log("You passed! Grade D");
} else {
  console.log("You failed! Study harder");
}

//Exercise 2: Age Verification

// Create an age verification system:
const userAge = 5; // Change this to test

// Rules:
// - 18+: "Welcome! You can access all content"
// - 13-17: "Welcome! Restricted content only"
// - Under 13: "Sorry, you're too young"

if (userAge >= 18){
  console.log("Welcome! You can access all content");
} else if (userAge >= 13) {
  console.log("Welcome! Restricted content only");
} else {
  console.log("Sorry, you're too young");
}

/// Truthy and Falsy Values (JavaScript's Secret!)
// JavaScript has a secret: not everything that looks true or false is actually true or false!

// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true (empty object)
console.log(Boolean("")); // false (empty string)


const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}
// Test with money = 0 - what happens?

//Common Gotcha - Be Careful!
let height = 0; // This is a valid height!
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED"); // This runs even though height IS defined!
}

// Better approach for checking if defined:
if (height !== undefined) {
  console.log("Height is defined");
}

// != → loose inequality → allows type conversion.
// !== → strict inequality → checks both value and type, without conversion

//Exercise: Truth Detector

// Test these values with Boolean() and if statements:
const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

// For each value, log:
// 1. The value itself
// 2. Boolean(value)
// 3. Whether it passes an if statement

// Example for first value:
console.log("Value:", 0);
console.log("Boolean:", Boolean(0));
if (0) {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}

console.log("Value:", 1);
console.log("Boolean:", Boolean(1));
if (1) {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}

console.log("Value:", "");
console.log("Boolean:", Boolean(""));
if ("") {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}

console.log("Value:", "hello");
console.log("Boolean:", Boolean("hello"));
if ("hello") {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}

console.log("Value:", undefined);
console.log("Boolean:", Boolean(undefined));
if (undefined) {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}

console.log("Value:", null);
console.log("Boolean:", Boolean(null));
if (null) {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}

console.log("Value:", NaN);
console.log("Boolean:", Boolean(NaN));
if (NaN) {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}

console.log("Value:", {});
console.log("Boolean:", Boolean({}));
if ({}) {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}

console.log("Value:", []);
console.log("Boolean:", Boolean([]));
if ([]) {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}

/// Coding Challenge #2: BMI Comparison

// Print a nice output to the console, saying who has the higher BMI.
// The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

// Use a template literal to include the BMI values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
// Use an if/else statement 


// Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Your if/else statement here:
// Compare BMIs and create intelligent messages
// Use template literals for beautiful output

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

