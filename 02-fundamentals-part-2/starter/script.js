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

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
  if (grades.length === 0) return 0; // guard for empty array
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i]; // add each grade to sum
  }
  return sum / grades.length; // average = sum / number of items
}

// Function to find highest grade
function findHighestGrade(grades) {
  if (grades.length === 0) return null;
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i]; // update highest when we find a bigger grade
    }
  }
  return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
  if (grades.length === 0) return null;
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i]; // update lowest when we find a smaller grade
    }
  }
  return lowest;
}

    // Function to count passing students
function countPassing(grades, passingGrade) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
      count++; // increment if grade is >= passingGrade
    }
  }
  return count;
}

    // Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);