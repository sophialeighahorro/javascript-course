// // // JavaScript Fundamentals - Part 1
// // // We'll write our code here!

// // let js ="amazing";
// // console.log(40 + 8 + 23 - 10);
// // console.log("GUMANA KA");

// // console.log("=== VARIABLES ===");
// // let firstName = "Jonas";
// // console.log(firstName);

// // let age = 30;
// // console.log(age); 
// // age = 50;
// // console.log(age);

// // const birthYear = 2005;
// // console.log(birthYear);

// // const PI = 3.1415;
// // console.log(PI);

// // var job = "programmer";
// // job = "designer";
// // console.log(job); 

// // let lastName = "Ahorro"

// // console.log("=== DATA TYPES ===");

// // //number
// // age = 20;
// // console.log(age);
// // console.log(typeof age);

// // //string
// // let username = "iya";
// // console.log(username);
// // console.log(typeof username)

// // //boolean
// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof javaScriptIsFun)

// // //undefined
// // let year;
// // console.log(year);
// // console.log(typeof year);

// // //dynamic variable
// // let dynamicVariable = 23;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // //change to string
// // dynamicVariable = "Now I'm a string";
// // console.log(dynamicVariable, typeof dynamicVariable);

// // //change to boolean
// // dynamicVariable = true
// // console.log(dynamicVariable, typeof dynamicVariable);

// //basic operators - math
// // console.log("=== MATH OPERATORS ===");

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // console.log("Math operations");
// // console.log("Addition:", 10 + 5); //15
// // console.log("Subtraction:", 20 - 8); //12
// // console.log("Multiplication:", 4 * 7); //28
// // console.log("Division:", 15/3); //5
// // console.log("Exponentiation:", 2 ** 3); //8

// // //Math with strings
// // const firstName = "Jonas";
// // const lastName = "Doe";
// // console.log(firstName + " " + lastName);

// // console.log("Hello " + " " + "World" + "!");
// // console.log("I am " + 20 + " years old");

// // ////
// // console.log("=== ASSIGNMENT OPERATORS===");

// // let x = 10 + 15;
// // console.log("x starts as: ", x);

// // x += 10;
// // console.log("x starts as: ", x);

// // x *= 4;
// // console.log("x starts as:", x);

// // x /= 2;
// // console.log("x starts as:", x);

// // x++;
// // console.log("x starts as:", x);

// // x--;
// // console.log("x starts as:", x);

// // /////
// // console.log("=== COMPARISON OPERATORS ===");

// // console.log("Age Comparison");

// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);
// // console.log(ageJonas < 30);

// // console.log("Number comparison");
// // console.log(25 > 20);
// // console.log(15 < 10);
// // console.log(18 >= 18);
// // console.log(16 <= 15);

// // // storing comparison result
// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is adult", isFullAge);

// // console.log("Complex comparison");
// // console.log(now - 1991 > now - 2018);

// // let z, y; 'Doe';
// // z = y = 25 - 10 - 5;
// // console.log(z, y);

// // //How it works: 25 - 10 - 5 = 10, then y = 10, then x = 10

// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge);

// // // Without parentheses would be wrong:
// // // ageJonas + ageSarah / 2 = 46 + 9.5 = 55.5 ❌

// // ///coding challenge 1

// // //test data 1
// // let massMark = 78;
// // let heightMark = 1.69;
// // let massJohn = 92;
// // let heightJohn = 1.95;

// // let markBMI = massMark / heightMark ** 2;
// // console.log(markBMI);

// // let johnBMI = massJohn / heightJohn **2;
// // console.log(johnBMI);

// // console.log("Mark's BMI: ", markBMI);
// // console.log("John's BMI: ", johnBMI);
// // let markHigherBMI = markBMI > johnBMI;
// // console.log("Mark has a higher BMI: ", markHigherBMI);

// // //test data 2

// // let markMass = 95;
// // let markHeight = 1.88;
// // let johnMass = 85;
// // let johnHeight = 1.76;

// // let BMImark = markMass / markHeight ** 2;
// // console.log(BMImark);

// // let BMIjohn = johnMass / johnHeight **2;
// // console.log(BMIjohn);

// // console.log("Mark's BMI: ", BMImark);
// // console.log("John's BMI: ", BMIjohn);
// // console.log("Mark has a higher BMI: ", markHigherBMI);

// /////////////
// // strings and template literals

// // const firstName = "Jonas";
// // const job = "teacher";
// // const birthYear = 1991;
// // const year = 2037;

// // const jonas =
// //   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// // console.log(jonas);

// // // The modern way - ES6 Template Literals
// // const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// // console.log(jonasNew);

// // //Use backticks (`) instead of quotes
// // // Variables inside ${variable} placeholders
// // // No more + signs or space management
// // // Much cleaner and readable!

// // // Any expression works inside ${}
// // console.log(`I'm ${2037-1991} years old`);
// // console.log(`Math works: ${2+3} equals five`);
// // console.log(`Comparisons too: ${5>3}`);

// // // You can use backticks for any string
// // console.log(`Just a regular string`);

// // // Old way - painful
// // console.log(
// //   "String with \n\
// // multiple \n\
// // lines"
// // );

// // // New way - natural
// // console.log(`String
// // multiple
// // lines`);

// // // Backticks (`) are above the Tab key
// // // ${expression} can contain any JavaScript expression
// // // Multiline strings work naturally
// // // Professional and modern approach

// // /// EXERCISE 1
// // const myName = "Sophia Leigh Ahorro"; // Your name
// // const myAge = 20; // Your age
// // const myJob = "IT student"; // Your job/student status
// // const currentYear = 2025;

// // // Use template literals to create:
// // // "Hi, I'm [name], a [age] year old [job]!"
// // // Log it to the console
// // const iya = `Hi, I'm ${myName}, a ${myAge} year old ${myJob}!`;
// // console.log(iya);

// // // EXERCISE 2
// // // Create a template literal that:
// // // 1. Calculates your birth year: currentYear - myAge
// // // 2. Shows a calculation: 10 * 5
// // // 3. Includes a comparison: myAge >= 18
// // // Example: "Born in ${}, 10*5 = ${}, Adult: ${}"

// // const iya2 = `Born in ${currentYear - myAge}, 10 * 5 = ${10 * 5}, Adult: ${myAge >= 18}`;
// // console.log(iya2);

// // /// Making Decisions with if/else

// // // Basic if/else Structure

// // // Taking Decisions: if / else Statements
// // const age = 15;

// // if (age >= 18) {
// //   console.log("Sarah can start driving license 🚗");
// // } else {
// //   const yearsLeft = 18 - age;
// //   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// // }

// // // How it works:

// // if keyword starts the decision
// // Condition in parentheses (must be true/false)
// // Code block in curly braces {}
// // else is optional - alternative path

// // Variable Assignment with Decisions
// // const birthYear = 2012;

// // let century;
// // if (birthYear <= 2000) {
// //   century = 20;
// // } else {
// //   century = 21;
// // }
// // console.log(century); // 21

// // // Real-World Decision Making
// // const score = 85;

// // if (score >= 60) {
// //   console.log(`You passed with ${score} points! 🎉`);
// //   console.log("Congratulations!");
// // } else {
// //   const pointsNeeded = 60 - score;
// //   console.log(`You failed. Need ${pointsNeeded} more points.`);
// // }

// // //Key Points:

// // // Control structures change program flow
// // // Boolean conditions must evaluate to true/false
// // // Block scope - variables inside {} have limited scope
// // // Real-world applications - age verification, permissions, games

// // //Exercise 1: Grade Calculator

// // // Create a grade calculator:
// // const testScore = 87; // Change this to test different scores

// // // Use if/else to determine:
// // // 90+: "Excellent! Grade A"
// // // 80-89: "Good job! Grade B"
// // // 70-79: "Not bad! Grade C"
// // // 60-69: "You passed! Grade D"
// // // Below 60: "You failed! Study harder"

// // if (testScore >= 90) {
// //   console.log("Excellent! Grade A");
// // } else if (testScore >= 80) {
// //   console.log("Good job! Grade B");
// // } else if (testScore >= 70) {
// //   console.log("Not bad! Grade C");
// // } else if (testScore >= 60) {
// // console.log("You passed! Grade D");
// // } else {
// //   console.log("You failed! Study harder");
// // }

// // //Exercise 2: Age Verification

// // // Create an age verification system:
// // const userAge = 5; // Change this to test

// // // Rules:
// // // - 18+: "Welcome! You can access all content"
// // // - 13-17: "Welcome! Restricted content only"
// // // - Under 13: "Sorry, you're too young"

// // if (userAge >= 18){
// //   console.log("Welcome! You can access all content");
// // } else if (userAge >= 13) {
// //   console.log("Welcome! Restricted content only");
// // } else {
// //   console.log("Sorry, you're too young");
// // }

// // /// Truthy and Falsy Values (JavaScript's Secret!)
// // // JavaScript has a secret: not everything that looks true or false is actually true or false!

// // // Truthy and Falsy Values

// // // 5 falsy values: 0, '', undefined, null, NaN
// // console.log(Boolean(0)); // false
// // console.log(Boolean(undefined)); // false
// // console.log(Boolean("Jonas")); // true
// // console.log(Boolean({})); // true (empty object)
// // console.log(Boolean("")); // false (empty string)


// // const money = 0;
// // if (money) {
// //   console.log("Don't spend it all ;)");
// // } else {
// //   console.log("You should get a job!");
// // }
// // // Test with money = 0 - what happens?

// // //Common Gotcha - Be Careful!
// // let height = 0; // This is a valid height!
// // if (height) {
// //   console.log("YAY! Height is defined");
// // } else {
// //   console.log("Height is UNDEFINED"); // This runs even though height IS defined!
// // }

// // // Better approach for checking if defined:
// // if (height !== undefined) {
// //   console.log("Height is defined");
// // }

// // // != → loose inequality → allows type conversion.
// // // !== → strict inequality → checks both value and type, without conversion

// // //Exercise: Truth Detector

// // // Test these values with Boolean() and if statements:
// // const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

// // // For each value, log:
// // // 1. The value itself
// // // 2. Boolean(value)
// // // 3. Whether it passes an if statement

// // // Example for first value:
// // console.log("Value:", 0);
// // console.log("Boolean:", Boolean(0));
// // if (0) {
// //   console.log("Truthy!");
// // } else {
// //   console.log("Falsy!");
// // }

// // console.log("Value:", 1);
// // console.log("Boolean:", Boolean(1));
// // if (1) {
// //   console.log("Truthy!");
// // } else {
// //   console.log("Falsy!");
// // }

// // console.log("Value:", "");
// // console.log("Boolean:", Boolean(""));
// // if ("") {
// //   console.log("Truthy!");
// // } else {
// //   console.log("Falsy!");
// // }

// // console.log("Value:", "hello");
// // console.log("Boolean:", Boolean("hello"));
// // if ("hello") {
// //   console.log("Truthy!");
// // } else {
// //   console.log("Falsy!");
// // }

// // console.log("Value:", undefined);
// // console.log("Boolean:", Boolean(undefined));
// // if (undefined) {
// //   console.log("Truthy!");
// // } else {
// //   console.log("Falsy!");
// // }

// // console.log("Value:", null);
// // console.log("Boolean:", Boolean(null));
// // if (null) {
// //   console.log("Truthy!");
// // } else {
// //   console.log("Falsy!");
// // }

// // console.log("Value:", NaN);
// // console.log("Boolean:", Boolean(NaN));
// // if (NaN) {
// //   console.log("Truthy!");
// // } else {
// //   console.log("Falsy!");
// // }

// // console.log("Value:", {});
// // console.log("Boolean:", Boolean({}));
// // if ({}) {
// //   console.log("Truthy!");
// // } else {
// //   console.log("Falsy!");
// // }

// // console.log("Value:", []);
// // console.log("Boolean:", Boolean([]));
// // if ([]) {
// //   console.log("Truthy!");
// // } else {
// //   console.log("Falsy!");
// // }

// // /// Coding Challenge #2: BMI Comparison

// // // Print a nice output to the console, saying who has the higher BMI.
// // // The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

// // // Use a template literal to include the BMI values in the outputs.
// // // Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
// // // Use an if/else statement 


// // // Reuse your BMI calculation from Challenge #1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // console.log(BMIMark, BMIJohn);

// // // Your if/else statement here:
// // // Compare BMIs and create intelligent messages
// // // Use template literals for beautiful output

// // if (BMIMark > BMIJohn) {
// //   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// // } else {
// //   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// // }

// //////////////

// //Type Conversion vs Coercion (Manual vs Magic)

// // type conversion (manual)
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear); // 1991, "1991"
// console.log(Number(inputYear) + 18); // 2009

// console.log(Number("Jonas")); // NaN (Not a Number)
// console.log(typeof NaN); // "number" (weird but true!)

// console.log(String(23), 23); // "23", 23
// console.log(typeof String(23)); // "string"

// //Number() converts strings to numbers
// // String() converts numbers to strings
// // NaN means "Not a Number" but is actually type number!
// // Manual conversion = you control it

// // type coercion (automatic)
// console.log("I am " + 23 + " years old"); // "I am 23 years old"
// console.log("23" - "10" - 3); // 10 (strings become numbers)
// console.log("23" / "2"); // 11.5 (division converts to numbers)
// console.log("23" * "2"); // 46 (multiplication converts to numbers)

// // Plus (+) converts numbers to strings
// // Minus (-), multiply (*), divide (/) convert strings to numbers
// // JavaScript decides what to convert

// // Can you guess what these will output?
// let n = "1" + 1; // What do you think?
// n = n - 1; // What about now?
// console.log(n);

// console.log(2 + 3 + 4 + "5"); // Try to guess!
// console.log("10" - "4" - "3" - 2 + "5"); // This one's tricky!

// // Type conversion = explicit/manual (you do it)
// // Type coercion = implicit/automatic (JavaScript does it)
// // When in doubt, be explicit!

// //Exercise 1: Conversion Detective
// // Predict the output, then test:
// console.log("5" + 2); // Your guess: 52
// console.log("5" - 2); // Your guess: 3
// console.log("5" * 2); // Your guess: 10
// console.log("5" / 2); // Your guess: 2.5

// // Convert these explicitly:
// const userAge = "25"; // Convert to number
// const userScore = 95; // Convert to string
// // Your code here...

// const userrAge = Number(userAge);
// const userrScore = String(userScore);
// console.log(userrAge, userrScore);

// //Exercise 2: Fix the Bug
// // This calculator has a bug - fix it!
// const num1 = prompt("First number:"); // Returns string!
// const num2 = prompt("Second number:"); // Returns string!
// const sum = num1 + num2; // Bug: adds as strings!
// console.log(`Sum: ${sum}`);

// // Fix: Convert to numbers first
// // Your code here...

// const numb1 = Number(prompt("First number:")); // convert to number
// const numb2 = Number(prompt("Second number:")); // convert to number
// const summ = numb1 + numb2;
// console.log(`Sum: ${summ}`);

// //Equality Operators: === vs ==

// //Strict Equality (===) - The Professional Way
// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// // Let's see what happens:
// console.log("18" === 18); // false - different types
// console.log("18" == 18); // true - coercion happens
// console.log(18 === 18); // true - same type and value

// // Why === is Better:

// // Checks both type AND value
// // Does NOT do type coercion
// // More predictable and safer
// // Professional developers prefer ===

// //Loose Equality (==) - The Dangerous One
// // Why == can be dangerous
// console.log("0" == 0); // true (string converted)
// console.log(0 == false); // true (boolean converted)
// console.log("0" == false); // true (both converted!)
// console.log(null == undefined); // true (special case)

// // Weird cases that cause bugs
// console.log("" == 0); // true
// console.log("   " == 0); // true (spaces trimmed!)

// //Best Practice Example
// // Convert explicitly, then compare strictly
// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// // Not-equal operator
// if (favourite !== 23) console.log("Why not 23?");

// //exercise 1
// // Test these comparisons - predict first, then run:
// console.log(5 === "5"); // Your guess: false
// console.log(5 == "5"); // Your guess: true
// console.log(true === 1); // Your guess: false
// console.log(true == 1); // Your guess: true
// console.log(false === 0); // Your guess: false
// console.log(false == 0); // Your guess: true  

// //exercise 2
// // This login system has bugs - fix them!
const username = prompt("Username:");
const password = prompt("Password:");

// Bugs: using == instead of ===
if (username == "admin" && password == "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}

// Fix using strict equality
// Your code here...

if (username === "admin" && password === "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}

///// Logical Operators (Complex Decision Making)

// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND: both must be true
console.log(hasDriversLicense || hasGoodVision); // OR: one must be true
console.log(!hasDriversLicense); // NOT: inverts the value

// && (AND) - ALL conditions must be true
// || (OR) - ONLY ONE condition needs to be true
// ! (NOT) - flips true to false, false to true

//Real-World Example
const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

//Complex Logic with Parentheses
// // More complex scenarios
// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// // Can drive if: (age >= 18 OR has permission) AND has experience
// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

//Exercise 1: Club Entry System
// Create a club entry system with these rules:
// Entry allowed if: (age >= 21 AND hasID) OR isVIP

const personAge = 6; // Try different values
const hasID = false; // Try different values
const isVIP = true; // Try different values

// Your logic here:
if ((personAge >= 21 && hasID) || isVIP) {
  console.log('Welcome to the club!');
} else {
console.log('Sorry, you cannot enter');
}

//Exercise 2: Weather Advisor
// Create a weather advisor:
const temperature = 25; // Celsius
const isRaining = false;
const isWindy = true;

// Advice rules:
// Perfect day: temp 20-30 AND not raining AND not windy
// Good day: temp 15-35 AND not raining
// Stay inside: anything else

// Your code here...

if ((temperature >= 20 && temperature <= 30) && !isRaining && !isWindy) {
  console.log(`Perfect day!`)
} else if ((temperature >= 15 && temperature <= 35) && !isRaining) {
  console.log(`Good day!`);
}else{
  console.log(`Stay inside.`);
}

/// Ternary Operator (Elegant One-Liners)

// The Conditional (Ternary) Operator

const age = 23;

// Basic ternary: condition ? valueIfTrue : valueIfFalse
const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

// age >= 18 → is 23 >= 18? ✅ Yes, it’s true.
// Because it’s true, it picks the first value after ? → "wine 🍷".
// So drink = "wine 🍷".

// Equivalent if/else (more verbose)
let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

//Ternary in Template Literals (Super Powerful!)
// Perfect for template literals!
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// You cannot use if/else inside template literals!
// This would NOT work:
// console.log(`I like to drink ${if (age >= 18) 'wine' else 'water'}`);

//when to use ternary vs if else
  // ✅ Good for ternary: simple, two-option decisions
const status = score >= 60 ? "passed" : "failed";
const message = isLoggedIn ? "Welcome back!" : "Please log in";
const discount = isPremium ? 0.2 : 0.1;

// ✅ Better for if/else: complex logic with multiple statements
if (score >= 90) {
  console.log("Excellent!");
  grade = "A";
  bonus = true;
} else if (score >= 80) {
  console.log("Good job!");
  grade = "B";
} // ... etc

//exercise 1

// Convert these if/else to ternary operators:

// 1. Login status
// const isLoggedIn = true;
// let welcomeMessage;
// if (isLoggedIn) {
//   welcomeMessage = "Welcome back!";
// } else {
//   welcomeMessage = "Please sign in";
// }
// Ternary version: ?
const isLoggedIn = true;
const welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";

// 2. Price with discount
// const isPremium = false;
// let price;
// if (isPremium) {
//   price = 100 * 0.8; // 20% discount
// } else {
//   price = 100;
// }
// Ternary version: 
const isPremium = false;
const price = isPremium ? 100 * 0.8 : 100;

////////////////////////////////////
// Coding Challenge #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.
// In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your Tasks:
// Calculate the tip depending on the bill value. Create a variable called 'tip' for this.
// It's not allowed to use an if/else statement
// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
// Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

// TEST DATA: Test for bill values 275, 40 and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

 // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300
// Step 2: Create beautiful output with template literal


const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const finalValue = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${finalValue}`);

const bill2 = 40;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.20;
const finalValue2 = bill2 + tip2;
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${finalValue2}`);

const bill3 = 430;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.20;
const finalValue3 = bill3 + tip3;
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${finalValue3}`);

// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"