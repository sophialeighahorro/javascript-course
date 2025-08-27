console.log("Part 2: Functions ready!");

////////////////////////////////////
// Functions - Declarations and Expressions
console.log("=== FUNCTIONS ===");

// Function declaration
function logger() {
  console.log("My name is Jonas");

}

  // Calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);

  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Parameters make functions flexible
// apples and oranges are like variables inside the function
// return sends a value back to whoever called the function
// You can store the returned value in variables

// Why Functions Matter
//With functions - reusable code:

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);
console.log(juice1);

//function expressions
const calcAge = function (birthYear) {
return 2025 - birthYear;
};

console.log(calcAge(2000));
console.log(calcAge(1991));

//handling missing parameters
function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

console.log(introduce("Sophia Leigh", "Ahorro", 20)); // All good

function yearsUntilRetirement(birthYear, firstName) {
const age = calcAge(birthYear);
const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;

    }else{
        return `${firstName} had already retired`;
    }
}

console.log(yearsUntilRetirement(2005, "Sophia"));

//global scope

const globalVar = "I am global";

function testScope() {
//funtion scope
    const localVar = "I am local";
    console.log(globalVar); // Can access global
    console.log(localVar); // Can access local
}

testScope();
// console.log(localVar); // Error! Can't access local from outside
console.log(globalVar); // Works fine

//the challenge

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  const sum = score1 + score2 + score3;
  const average = sum / 3;
  return average;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));

