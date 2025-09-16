// 'use strict';
 
// // CONSTANTS
// const MIN_NUMBER = 1;
// const MAX_NUMBER = 20;
// const START_SCORE = 20;

// // cached selectors
// const bodyEl = document.body;
// const messageEl = document.querySelector('.message');
// const scoreEl = document.querySelector(`.score`);
// const numberEl = document.querySelector(`.number`);
// const highscoreEl = document.querySelector(`.highscore`);
// const guessEl = document.querySelector(`.guess`);
// const checkBtnEl = document.querySelector(`.check`);
// const againBtnEl = document.querySelector(`.again`);

// // UI helper
// function setMessage(text) {
//     messsageEl.textContent = text;
// }

// function setNumber(value) {
//     numberEl.textContent = value;
// }

// function setScore(value) {
//     scoreEl.textContent = value;
// }

// function setHighscore(value) {
//     highscoreEl.textContent = value;
// }

// function setBackground(color) {
//     bodyEl.style.backgroundColor = color;
// }

// function disablePlay(disabled) {
//     guessEl.disabled = disabled;
//     checkBtnEl.disabled = disabled;
// }

// function clearInput() {
//     guessEl.value = ``;
// }


// // game state
// let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
// console.log(`Secret Number:`, secretNumber);

// //track the current score
// let score = START_SCORE;
// let highscore = 0;

// function resetGameState () {
//     score = START_SCORE;
//     secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
// }

// function renderInitialUI () {
//     setMessage(`Start Guessing`);
//     setScore(score);
//     disablePlay(false);
//     setBackground(``);
// }

// renderInitialUI;

// //basic game logic
// checkBtnEl.addEventListener('click', function () {
//     // once button is clicked, do this below
//     console.log('Check button is clicked!');
//     const guess = Number(guessEl.value);
//     //console.log(`Player guessed:`, guess);
 
//     // basic game logic which checks if guess is correct

//     //check if guess input is empty

//     if (guess < 1 || guess > 20) {
//         document.querySelector(`.message`).textContent = "Number must be between 1 and 20."
//         return;
//     }

//         if (!guess) return setMessage(`No message`) {
    
//     }


//     if (guess === secretNumber) {
//         console.log(`Your guess is correct!`);
//         document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
//         document.querySelector(`.number`).textContent = secretNumber;
       
//         // check if this is a new highscore
//         if (score > highscore) {
//             highscore = score;
//             document.querySelector(`.highscore`).textContent = highscore;
//         }
 
//         // win condition - detect when player wins
 
//         document.querySelector(`.message`).textContent = ` 🎉 You won!`;
//         document.querySelector(`.guess`).disabled = true;
//         document.querySelector(`.check`).disabled = true;
        
//         document.body.style.backgroundColor = `#a4c762`

//     } else if (guess > secretNumber) {
//         console.log(`Too high!`);
//         document.querySelector(`.message`).textContent = `📈 Too high!`;
//         score--;
//         document.querySelector(`.score`).textContent = score;
//         if (score < 1) {
//             document.querySelector(`.message`).textContent = `You have lost. Please try again.`
//             document.querySelector(`.number`).textContent = secretNumber;
//             document.querySelector(`.guess`).disabled = true;
//             document.querySelector(`.check`).disabled = true;
//             document.querySelector(`.message`).textContent = `Game Over!`;
//             document.querySelector(`.guess`).value = ``;
            
//         }
//     } else if (guess < secretNumber) {
//         console.log(`Too low!`);
//         document.querySelector(`.message`).textContent = `📉 Too low!`;
//         score--;
//         if (score < 1) {
//             document.querySelector(`.message`).textContent = `You have lost. Please try again.`
//             document.querySelector(`.number`).textContent = secretNumber;
//             document.querySelector(`.guess`).disabled = true;
//             document.querySelector(`.check`).disabled = true;

//             document.body.style.backgroundColor = `#f19fa9`


//         }
//     }

//     //update score display
//     document.querySelector(`.score`).textContent=score;
// });

// //////// game restart
// document.querySelector(`.again`).addEventListener(`click`, function () {
//     //reset game state
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     console.log(`New Secret Number:`, secretNumber);

//    // reset display
//    document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.guess').value = '';
 
//     // re-enable input and button
//     document.querySelector('.guess').disabled = false;
//     document.querySelector('.check').disabled = false;
// });

'use strict';
console.log(`=== GAME DEVELOPMENT: GUESS MY NUMBER ===`);

//===== DOM ELEMENT SELECTION - THE FOUNDATION =====//

console.log(`=== DOM ELEMENT SELECTION ===`);

// Ranges and Defaults

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

const bodyEl = document.body;
const messsageEl = document.querySelector(`.message`);
const numberEl = document.querySelector(`.number`);
const scoreEl = document.querySelector(`.score`);
const highscoreEl = document.querySelector(`.highscore`);
const guessInputEl = document.querySelector(`.guess`);
const checkBtnEl = document.querySelector(`.check`);
const againBtnEl = document.querySelector(`.again`);

//////////////////////////
// UI Helper
function setMessage(text) {
  messsageEl.textContent = text;
}

function setNumber(value) {
  numberEl.textContent = value;
}

function setScore(value) {
  scoreEl.textContent = value;
}

function setHighscore(value) {
  highscoreEl.textContent = value;
}

function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}

function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}

function clearInput() {
  guessInputEl.value = '';
}

//////////////////////////////
// Game State & Reset;

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log(secretNumber);
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
  console.log(secretNumber);
}

function renderIntialUI() {
  setMessage(`Start Guessing...`);
  setNumber(`?`);
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground(``);
}

renderIntialUI();

checkBtnEl.addEventListener(`click`, function () {
  const guess = Number(guessInputEl.value);
  if (!guess) {
    return setMessage(`No number!`);
  }

  if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
    return setMessage(`Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}`);
  }

  if (guess === secretNumber) {
    setMessage(`🎉 Correct Guess!`);
    setNumber(secretNumber);
    setBackground(`#b7d67e`);
    if (score > highscore) {
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return;
  }

  setMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
  score--;
  setScore(score);

  if (score < 1) {
    setMessage(`💥 You lost!`);
    setNumber(secretNumber);
    setBackground(`#70140d`);
    disablePlay(true);
    clearInput();
  }
});

againBtnEl.addEventListener(`click`, function () {
  resetGameState();
  renderIntialUI();
});

window.addEventListener(`keydown`, function (e) {
  if (e.key === `Enter` && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

againBtnEl.addEventListener(`click`, function () {
  guessInputEl.focus();
});

