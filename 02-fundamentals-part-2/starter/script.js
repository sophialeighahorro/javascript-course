// // console.log("Part 2: Functions ready!");

// // ////////////////////////////////////
// // // Functions - Declarations and Expressions
// // console.log("=== FUNCTIONS ===");

// // // Function declaration
// // function logger() {
// //   console.log("My name is Jonas");

// // }

// //   // Calling / running / invoking the function
// // logger();
// // logger();
// // logger();

// // function fruitProcessor(apples, oranges) {
// //   console.log(apples, oranges);

// //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //   return juice;
// // }

// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);

// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(appleOrangeJuice);

// // // Parameters make functions flexible
// // // apples and oranges are like variables inside the function
// // // return sends a value back to whoever called the function
// // // You can store the returned value in variables

// // // Why Functions Matter
// // //With functions - reusable code:

// // const juice1 = fruitProcessor(5, 0);
// // const juice2 = fruitProcessor(2, 4);
// // const juice3 = fruitProcessor(3, 2);
// // console.log(juice1);

// // //function expressions
// // const calcAge = function (birthYear) {
// // return 2025 - birthYear;
// // };

// // console.log(calcAge(2000));
// // console.log(calcAge(1991));

// // //handling missing parameters
// // function introduce(firstName, lastName, age) {
// //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// //   return introduction;
// // }

// // console.log(introduce("Sophia Leigh", "Ahorro", 20)); // All good

// // function yearsUntilRetirement(birthYear, firstName) {
// // const age = calcAge(birthYear);
// // const retirement = 65 - age;

// //     if (retirement > 0) {
// //         return `${firstName} retires in ${retirement} years`;

// //     }else{
// //         return `${firstName} had already retired`;
// //     }
// // }

// // console.log(yearsUntilRetirement(2005, "Sophia"));

// // //global scope

// // const globalVar = "I am global";

// // function testScope() {
// // //funtion scope
// //     const localVar = "I am local";
// //     console.log(globalVar); // Can access global
// //     console.log(localVar); // Can access local
// // }

// // testScope();
// // // console.log(localVar); // Error! Can't access local from outside
// // console.log(globalVar); // Works fine

// // //the challenge

// // // Function to calculate average of 3 scores
// // function calcAverage(score1, score2, score3) {
// //   const sum = score1 + score2 + score3;
// //   const average = sum / 3;
// //   return average;
// // }

// // // Function to check winner
// // function checkWinner(avgDolphins, avgKoalas) {
// //   if (avgDolphins >= 2 * avgKoalas) {
// //     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// //   } else if (avgKoalas >= 2 * avgDolphins) {
// //     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// //   } else {
// //     return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
// //   }
// // }

// // // Test Data 1
// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // Test Data 2
// // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // ///////////

// // //02 arrays and data manipulation

// // //without arrays
// // const student1Grade = 85;
// // const student2Grade = 92;
// // const student3Grade = 78;
// // // ... 27 more variables?

// // //with arrays
// // const grades = [85, 92, 78, 96, 88];
// // console.log(grades);

// // ////////////////////////////////////
// // // Arrays - Creation and Access
// // console.log("=== ARRAYS ===");

// // // Array creation
// // const friends = ["Michael", "Steven", "Peter"];
// // console.log(friends);

// // // Different data types in same array
// // const mixed = ["Jonas", 27, true, friends];
// // console.log(mixed);

// // // Alternative way (but literal notation is preferred)
// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);

// // // Array indexing starts at 0
// // console.log(friends[0]); // Michael (first element)
// // console.log(friends[1]); // Steven (second element)
// // console.log(friends[2]); // Peter (third element)

// // // Array length property
// // console.log(friends.length); // 3

// // // Get the last element
// // console.log(friends[friends.length - 1]); // Peter

// // // Changing array elements
// // friends[1] = "Jay";
// // console.log(friends); // ['Michael', 'Jay', 'Peter']

// // // Zero-based indexing: First element is index 0, not 1
// // // Length property: array.length tells you how many elements
// // // Mutable: You can change elements even in const arrays
// // // Last element: Use array[array.length - 1]

// // //Arrays with Expressions

// // // Arrays can contain expressions and function calls
// // const firstName = "Sophia";
// // const jonas = [firstName, "Ahorro", 2025 - 2005];
// // console.log(jonas);

// // // Using our calcAge function from Hour 1
// // const calcAge = function (birthYear) {
// //   return 2025 - birthYear;
// // };

// // const ages = [calcAge(2005), calcAge(2003), calcAge(1991)];
// // console.log(ages);

// // //Adding Elements
// // // Array Methods - Adding Elements

// // const friends = ["Michael", "Steven", "Peter"];

// // // Push - add to end
// // const newLength = friends.push("Jay");
// // console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
// // console.log(newLength); // 4 (push returns new length)

// // // Unshift - add to beginning
// // friends.unshift("John");
// // console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']

// // // Pop - remove from end
// // const popped = friends.pop();
// // console.log(popped); // 'Jay' (returns what was removed)
// // console.log(friends); // ['John', 'Michael', 'Steven', 'Peter']

// // /// Removing Elements
// // // Shift - remove from beginning
// // const shifted = friends.shift();
// // console.log(shifted); // 'John' (returns what was removed)
// // console.log(friends); // ['Michael', 'Steven', 'Peter']

// // ///Finding Elements
// // // IndexOf - find position of element
// // console.log(friends.indexOf("Steven")); // 1
// // console.log(friends.indexOf("Bob")); // -1 (not found)

// // // Includes - check if element exists
// // console.log(friends.includes("Steven")); // true
// // console.log(friends.includes("Bob")); // false

// //method summary
// // push()	Add to end	New length
// // pop()	Remove from end	Removed element
// // unshift()	Add to beginning	New length
// // shift()	Remove from beginning	Removed element
// // indexOf()	Find element position	Index or -1
// // includes()	Check if exists	true or false

// //Array Iteration
// //For Loop with Arrays

// const friends = ["Michael", "Steven", "Peter"];

// // Traditional for loop
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// // For loop with processing
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // let i = 0 - start at first index
// // i < friends.length - continue while within bounds
// // i++ - increment index each time

// ///forEach method
// // forEach method - modern approach
// friends.forEach(
// function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });

// // Arrow function version (even cleaner)
// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });

// // Real-world example - grade processing
// const grades = [85, 92, 78, 96, 88, 74];
// let total = 0;

//  // Calculate average grade
// for (let i = 0; i < grades.length; i++) {
//     total += grades[i];
// }

// const average = total / grades.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// // Count passing students (grade >= 70)
// let passedCount = 0;
// grades.forEach((grade) => {
//       if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades.length} students passed`);

// //Coding Challenge #2: Student Grade Manager

// // You're building a grade management system for a teacher.

// // Your Tasks:

// // Create an array of student grades: [78, 85, 92, 67, 88, 95, 73, 82]
// // Create a function calculateAverage(grades) that returns the average
// // Create a function findHighestGrade(grades) that returns the highest grade
// // Create a function findLowestGrade(grades) that returns the lowest grade
// // Create a function countPassing(grades, passingGrade) that counts students who passed
// // Use all your functions to create a complete grade report
// // Passing grade is 70.

// // Expected output:

// // Average: 82.5
// // Highest: 95
// // Lowest: 67
// // Passing students: 6 out of 8

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//   if (grades.length === 0) return 0; // guard for empty array
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i]; // add each grade to sum
//   }
//   return sum / grades.length; // average = sum / number of items
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//   if (grades.length === 0) return null;
//   let highest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//       highest = grades[i]; // update highest when we find a bigger grade
//     }
//   }
//   return highest;
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//   if (grades.length === 0) return null;
//   let lowest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//       lowest = grades[i]; // update lowest when we find a smaller grade
//     }
//   }
//   return lowest;
// }

//     // Function to count passing students
// function countPassing(grades, passingGrade) {
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//       count++; // increment if grade is >= passingGrade
//     }
//   }
//   return count;
// }

//     // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

// JavaScript Fundamentals Part 2 - Hour 2

//////////////////
//Objects & Data Structures

// The Array Problem
// const jonasArray = ["Jonas","Schmedtmann",2037 - 1991,"teacher",["Michael", "Peter", "Steven"],];

// console.log(jonasArray[0]); // What is this? firstName?
// console.log(jonasArray[1]); // lastName?
// console.log(jonasArray[2]); // age?

// //Basic Object Creation
// // Object literal syntax - curly braces create objects
// const jonas = {
//   firstName: "Jonas", // property: string value
//   lastName: "Schmedtmann", // property: string value
//   age: 2037 - 1991, // property: calculated value
//   job: "teacher", // property: string value
//   friends: ["Michael", "Peter", "Steven"], // property: array value
// };
// console.log(jonas);

// //Property Access Methods 
// // Dot notation - clean and readable
// console.log(jonas.firstName); // 'Jonas'
// console.log(jonas.lastName); // 'Schmedtmann'
// console.log(jonas.age); // 46
// console.log(jonas.job); // 'teacher'
// console.log(jonas.friends); // ['Michael', 'Peter', 'Steven']

// // Bracket notation - uses strings
// console.log(jonas["firstName"]); // Same result as dot notation
// console.log(jonas["lastName"]);
// console.log(jonas["age"]);

// // Bracket notation with expressions - compute property names!
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]); // 'Jonas'
// console.log(jonas["last" + nameKey]); // 'Schmedtmann'

// // This is impossible with dot notation
// // jonas.'first' + nameKey  // ❌ Syntax error!

// ///Property Modification and Addition
// //Objects are mutable even when declared with const. You can change existing properties and add new ones.

// //Modifying Existing Properties
// // Both notations work for modification
// jonas.job = "programmer";
// jonas["age"] = 35;
// console.log(jonas);

// // Objects can grow - add properties after creation
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// jonas.hasDriversLicense = true;
// console.log(jonas);

// //const objects can have properties changed. const only prevents reassigning the entire object variable, not modifying its contents.

// //exercise 1

// // Create your own objects:
// // 1. Create a 'book' object with title, author, pages, and isRead properties
// // 2. Create a 'playlist' object with name, creator, songs array, and genre
// // 3. Access and log different properties using both dot and bracket notation
// // 4. Add a new property to each object
// // 5. Modify an existing property in each object

// // Your code here...

// // Example structure:
// const book = {
//   title: "Pride and Prejudice",
//   author: "Jane Austen",
//   pages: 432,
//   isRead: true
// };

// const playlist = {
//   name: "Exoplanet",
//   creator: "Iya",
//   songs: ["Overdose", "Call Me Baby", "First Snow", "Growl"],
//   songGenre: "K-Pop"
// };

// // Practice accessing properties
// console.log(book.title);
// console.log(playlist["creator"]);
// console.log(playlist.songs[0]);
// console.log(book.author);

// // Add new properties
// book["bookGenre"] = "Classig Regency Novel";
// playlist["duration"] = "11:32";

// // Modify existing properties
// book["pages"] = 250;
// playlist["songs"] = ["Thunder", "Kokobop", "Love Shot", "Tempo"];
// console.log(book);
// console.log(playlist);

// ///Objects vs Arrays: When to Use What

// //use arrays for Ordered, indexed data - think lists
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// //Use Objects For Named, descriptive data - think entities
// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// ///Combining Objects and Arrays
// // Objects can contain arrays, arrays can contain objects
// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78], // Array inside object
//   address: {
//     // Object inside object
//     street: "123 Main St",
//     city: "New York",
//   },
// };

// console.log(student.grades[0]); // 85
// console.log(student.address.city); // 'New York'

// //Object Methods and the 'this' Keyword
// //Functions inside objects are called methods.
// // Methods let objects not just store data, but also perform actions on that data.

// ////////////////////////////////////
// // Object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // Method - function inside object
//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// // Call methods using dot notation
// console.log(jonas.calcAge(1991)); // 46
// console.log(jonas.calcAge(jonas.birthYear)); // Same result

// //The 'this' Keyword - Accessing Own Properties
// const jonasImproved = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this); // Shows the jonas object
//     return 2037 - this.birthYear; // Access own birthYear!
//   },
// };

// console.log(jonasImproved.calcAge()); // 46
// //this refers to the object the method belongs to

// //Advanced: Storing Calculated Values

// const jonasAdvanced = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear; // Store result as new property
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonasAdvanced.calcAge()); // 46
// console.log(jonasAdvanced.age); // 46 (now stored as property)
// console.log(jonasAdvanced.getSummary()); // Full description

//EXERCISE 2

// Create a 'calculator' object:
// 1. Properties: num1, num2, operator
// 2. Methods: add(), subtract(), multiply(), divide()
// 3. Method: calculate() that uses the operator to perform the right operation
// 4. Method: getResult() that returns a formatted string
// 5. Use 'this' to access the object's own properties

// const calculator = {
//   num1: 10,
//   num2: 5,
//   operator: "+",

//   add: function () {
//     // Your code here - use this.num1 and this.num2
//     return this.num1 + this.num2;
//   },

//   subtract: function () {
//     // Your code here
//     return this.num1 - this.num2;
//   },

//   multiply: function () {
//     // Your code here
//     return this.num1 * this.num2;
//   },

//   divide: function () {
//     // Your code here
//     return this.num1 / this.num2;
//   },

//   calculate: function () {
//     // Use this.operator to determine which method to call
//     // Hint: if (this.operator === '+') return this.add();
//     if (this.operator === "+") return this.add();
//     if (this.operator === "-") return this.subtract();
//     if (this.operator === "*") return this.multiply();
//     if (this.operator === "/") return this.divide();
//     return "invalid operator";
//   },

//   getResult: function () {
//     // Return formatted string like "10 + 5 = 15"
//      return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
//   },
// };

// // Test your calculator
// console.log(calculator.calculate());
// console.log(calculator.getResult());

///Coding Challenge #3: User Profile System
//Build a user profile system with the following features:

//Create a 'user' object with properties:
//firstName, lastName, birthYear, location, interests (array)
//friends (array of objects with name and status)
//isActive boolean

// Add methods:
// calcAge(): calculate and store age
// addFriend(name, status): add a friend to friends array
// getActiveFriends(): return count of friends with status 'active'
// getSummary(): return a complete profile summary
// toggleStatus(): switch isActive between true/false\

//The friends array should contain objects like: {name: 'Michael', status: 'active'}

// Expected behavior:
// Calculate age automatically
// Track friend relationships
// Generate social media style profile summary
// Manage user's active status

///
// const user = {
//   firstName: "Sophia Leigh",
//   lastName: "Ahorro",
//   birthYear: 2005,
//   location: "Manila",
//   interests: ["gaming", "graphic design", "fashion"],
//   friends: [
//     { name: "Marygail", status: "active" },
//     { name: "Celesse", status: "inactive" },
//     { name: "JB", status: "active" },
//   ],
//   isActive: true,

//   // Calculate age method
//   calcAge: function () {
//     const currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//     return this.age;
//   },

//   // Add friend method
//   addFriend: function (name, status = "active") {
//     this.friends.push({ name, status });
//     return this.friends.length;
//   },

//   // Get active friends count
//   getActiveFriends: function () {
//     // Filter friends array to count only active friends
//     return this.friends.filter(friend => friend.status === "active").length;
//   },
 
//   // Toggle active status
//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   // Generate profile summary
//   getSummary: function () {
//     this.calcAge();
//       return `
//   Profile Summary
// ------------------------
// Name: ${this.firstName} ${this.lastName}
// Age: ${this.age}
// Location: ${this.location}
// Status: ${this.isActive ? "🟢 Active" : "🔴 Inactive"}

// Friends: ${this.friends.length} total (${this.getActiveFriends()} active)
// Interests: ${this.interests.join(", ")}
//     `;
//   },
// };
    
// // Test your user profile system
// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

// //// JavaScript Fundamentals Part 2 - Hour 3


//////////
//DOM manipulation and interactivity

// DOM = Document Object Model - JavaScript's interface to HTML
// Every HTML element becomes a JavaScript object
// Real-time updates - changes happen instantly in the browser

////////////////////////////////////
// Selecting DOM Elements

// querySelector - works with any CSS selector
// const message = document.querySelector(".message"); // Select by class
// const button = document.querySelector("#btn"); // Select by ID
// const heading = document.querySelector("h1"); // Select by tag
// const input = document.querySelector(".guess"); // Select by class

// console.log(message);
// console.log(button);
// console.log(heading);

// // Different selector types
// document.querySelector(".className"); // Class selector
// document.querySelector("#idName"); // ID selector
// document.querySelector("tagName"); // Tag selector
// document.querySelector('[type="text"]'); // Attribute selector
// document.querySelector("div p"); // Descendant selector

// // getElementById - only works with IDs
// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button); // Same element, different method

// // querySelectorAll - gets ALL matching elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs); // NodeList (like an array)
// console.log(allParagraphs[0]); // First paragraph
// console.log(allParagraphs.length); // Number of paragraphs

//Exercise 1: Element Selection Practice

// Practice selecting elements:
// 1. Select the element with class 'guess' and log it
// 2. Select the element with ID 'btn' using both querySelector and getElementById
// 3. Select all span elements and log the collection
// 4. Select the first span element and log its textContent
// 5. Experiment with different CSS selectors

// Your code here...
// const guessInput = document.querySelector(".guess");
// console.log("Guess input:", guessInput);

// // Method 1: querySelector
// const buttonQuery = document.querySelector("#btn");
// console.log("Button via querySelector:", buttonQuery);


// // Method 2: getElementById
// const buttonById = document.getElementById("btn");
// console.log("Button via getElementById:", buttonById);
// console.log(buttonQuery === buttonById); // Should be true

// // Select all spans
// const allSpans = document.querySelectorAll("span");
// console.log(allSpans);

// // Select first span
// const firstSpan = document.querySelector("span");
// console.log("First span text:", firstSpan ? firstSpan.textContent : "No span found");

// // Experiment with different selectors
// console.log("All inputs:", document.querySelectorAll("input"));           
// console.log("Button inside body:", document.querySelector("body #btn")); 
// console.log("Direct child span of div:", document.querySelector("div > span")); 

// ////////////////////////////////////
// // Modifying Element Content

// const message = document.querySelector(".message");

// // textContent - gets/sets just the text, no HTML
// console.log(message.textContent); // "Start interacting!"
// message.textContent = "Hello from JavaScript!";

// // innerHTML - includes HTML tags (more powerful but be careful)
// message.innerHTML = "<strong>Bold text from JS!</strong>";

// // innerText - respects styling (what user actually sees)
// console.log(message.innerText);

// // textContent	Plain text only	Ignored/escaped
// // innerHTML	HTML content	Processed as HTML
// // innerText	Visible text only	Ignored, respects CSS

// // Input elements use .value property, not textContent
// const input = document.querySelector(".guess");

// console.log(input.value); // Current input value
// input.value = "Default text"; // Set input value
// input.placeholder = "Type here"; // Change placeholder

// //Important: Form elements (input, textarea, select) use the .value property instead of .textContent.

// // Changing element styles with the style property
// const heading = document.querySelector("h1");

// heading.style.color = "red";
// heading.style.backgroundColor = "yellow"; // Note: camelCase!
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRadius = "10px";
// //Rule: Multi-word CSS properties become camelCase in JavaScript.

// //EXERCISE 2  

// // Practice content and style manipulation:
// // 1. Change the h1 text to your name
// // 2. Make the button's background color blue and text white
// // 3. Set a placeholder text in the input field
// // 4. Change the message text to include HTML bold formatting
// // 5. Make the score display larger and a different color

// // Your code here...
// const heading = document.querySelector("h1");
// const button = document.querySelector("#btn");
// const input = document.querySelector(".guess");
// const message = document.querySelector(".message");
// const scoreValue = document.querySelector(".score-value");

// // 1. Change h1 text
// heading.textContent = "Sophia Leigh";

// // 2. Style the button
// button.textContent = "Click here";
// button.style.backgroundColor = "blue";
// button.style.color = "white";
// button.style.padding = "10px 20px";
// button.style.border = "none";
// button.style.borderRadius = "5px";

// // 3. Set placeholder
// input.placeholder = "Enter your guess...";

// // 4. HTML formatting in message
// message.innerHTML = "Welcome! <strong>Good luck</strong> with the game.";

// // 5. Style the score
// scoreValue.textContent = "10";
// scoreValue.style.fontSize = "2rem";
// scoreValue.style.color = "green";
// scoreValue.style.fontWeight = "bold";

// ///
// // Event Listeners - User Interaction

// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// // addEventListener - the modern way to handle events
// button.addEventListener("click", function () {
//   console.log("Button was clicked!");
//   message.textContent = "You clicked the button!";
//   message.style.color = "green";
// });

// element.addEventListener("eventType", function () {
//   // Code to run when event happens
// });

// // Event listener with state management
// let clickCount = 0;

// button.addEventListener("click", function () {
//   clickCount++;
//   button.textContent = `Clicked ${clickCount} times`;
//   button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// // Input events fire every time user types
// const input = document.querySelector(".guess");

// input.addEventListener("input", function () {
//   const userText = input.value;
//   message.textContent = `You typed: ${userText}`;
//   message.style.fontSize = `${userText.length + 10}px`;
// });

// // 'input' - Fires on every character change
// // 'change' - Fires when input loses focus
// // 'focus' - Fires when input is clicked/selected
// // 'blur' - Fires when input loses focus

// // Keyboard events - responding to specific keys
// input.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = ""; // Clear input
//   }
// });

// // Global keyboard events
// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     // Reset everything
//     message.textContent = "Reset with Escape key!";
//     input.value = "";
//     clickCount = 0;
//     button.textContent = "Click Me!";
//   }
// });

// // event.key - Which key was pressed
// // event.target - Which element triggered the event
// // event.type - What type of event occurred

// // 'click'	Mouse click	Buttons, links, clickable elements
// // 'input'	Text input changes	Real-time text processing
// // 'keydown'	Key is pressed down	Keyboard shortcuts
// // 'mouseover'	Mouse enters element	Hover effects
// // 'submit'	Form is submitted	Form handling

// //Exercise 3: Event Listener Practice

// // Practice event listeners:
// // 1. Add a click event to the h1 that changes its color
// // 2. Create an input event that displays character count as user types
// // 3. Add a keydown event that responds to the spacebar
// // 4. Make the button change its text when hovered (mouseover event)
// // 5. Create a double-click event that does something special

// // Your code here...
// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");
// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// // 1. Click event on h1
// heading.addEventListener("click", function () {
//   heading.style.color = "pink";
// });

// // 2. Character count display
// input.addEventListener("input", function () {
//   const count = input.value.length;
//   message.textContent = `Character count: ${count}`;
// });

// // 3. Spacebar response
// document.addEventListener("keydown", function (event) {
//   if (event.key === " ") {
//     message.textContent = "Spacebar pressed!";
//   }
// });

// // 4. Hover effect
// button.addEventListener("mouseover", function () {
//   button.textContent = "Hovering!";
// });

// button.addEventListener("mouseout", function () {
//   button.textContent = "Click Me!";
// });

// // 5. Double-click event
// heading.addEventListener("dblclick", function () {
//   heading.textContent = "Double-clicked!";
//   heading.style.backgroundColor = "purple";
// });

///////
//Final Project: Interactive Score Tracker

// === Score Tracker ===

// Select elements
const score1El = document.getElementById("score-1");
const score2El = document.getElementById("score-2");
const addButtons = document.querySelectorAll(".btn-add");
const resetBtn = document.getElementById("btn-reset");
const winningScoreInput = document.getElementById("winning-score");
const targetSpan = document.querySelector(".target");
const statusEl = document.querySelector(".status");
const winnerEl = document.querySelector(".winner");
const winnerNameEl = document.querySelector(".winner-name");

// State
let scores = [0, 0]; // [player1, player2]
let winningScore = parseInt(winningScoreInput.value);
let gameOver = false;

// Helper: update UI scores
function updateScores() {
  score1El.textContent = scores[0];
  score2El.textContent = scores[1];
}

// Helper: check winner
function checkWinner() {
  if (scores[0] >= winningScore) {
    declareWinner(1);
  } else if (scores[1] >= winningScore) {
    declareWinner(2);
  }
}

// Declare winner
function declareWinner(player) {
  gameOver = true;
  winnerNameEl.textContent = `Player ${player}`;
  winnerEl.classList.remove("hidden");
  statusEl.textContent = "Game Over!";
  document.querySelector(`.player-${player}`).classList.add("winner-style");
  document.body.style.backgroundColor = "#d4f5d4"; // light green celebration
}

// Reset game
function resetGame() {
  scores = [0, 0];
  gameOver = false;
  updateScores();
  statusEl.innerHTML = `First to <span class="target">${winningScore}</span> wins!`;
  winnerEl.classList.add("hidden");
  document.querySelectorAll(".player").forEach(p => p.classList.remove("winner-style"));
  document.body.style.backgroundColor = "";
}

// === Event Listeners ===

// Add point buttons
addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (!gameOver) {
      const player = parseInt(btn.dataset.player);
      scores[player - 1]++;
      updateScores();
      checkWinner();
    }
  });
});

// Reset button
resetBtn.addEventListener("click", resetGame);

// Winning score input
winningScoreInput.addEventListener("change", () => {
  winningScore = parseInt(winningScoreInput.value);
  targetSpan.textContent = winningScore;
  resetGame();
});

// Keyboard shortcuts: 1 = Player1, 2 = Player2, R = Reset
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "r") {
    resetGame();
    return;
  }

  if (gameOver) return;

  if (e.key === "1") {
    scores[0]++;
    updateScores();
    checkWinner();
  } else if (e.key === "2") {
    scores[1]++;
    updateScores();
    checkWinner();
  }
});

// JavaScript Fundamentals Part 2 - Hour 4
