'use strict';
 

// DOM Element Selection
const messageEl = document.querySelector('.message');
console.log(messageEl); // Shows the HTML element
console.log(messageEl.textContent);
//messageEl.textContent = `Hello from Javascript`;

const scoreEl = document.querySelector(`.score`);
console.log(`Score element:`, scoreEl);
//scoreEl.textContent = `50`;

const numberEl = document.querySelector(`.number`);
//numberEl.textContent = 15;

const highscoreEl = document.querySelector(`.highscore`);
console.log(`Highscore element:`, highscoreEl);
//highscoreEl.textContent = `100`;

const guessEl = document.querySelector(`.guess`);
//guessEl.value = 12;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Secret Number:`, secretNumber);

//track the current score//
let score = 20;
let highscore = 0;

//change value of score UI dynamically
document.querySelector(`.score`).textContent = score;
document.querySelector(`.highscore`).textContent = highscore;

console.log(`Game state initialized!`);

//basic game logic
document.querySelector('.check').addEventListener('click', function () {
    // once button is clicked, do this below
    console.log('Check button is clicked!');
 
    const guess = Number(document.querySelector('.guess').value);
    console.log(`Player guessed:`, guess);
 
    // basic game logic which checks if guess is correct

    //check if guess input is empty

    if (guess < 1 || guess > 20) {
        document.querySelector(`.message`).textContent = "Number must be between 1 and 20."
        return;
    }

        if (!guess) {
        document.querySelector(`.message`).textContent = "Please enter a number."
        return;
    }


    if (guess === secretNumber) {
        console.log(`Your guess is correct!`);
        document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
        document.querySelector(`.number`).textContent = secretNumber;
       
        // check if this is a new highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector(`.highscore`).textContent = highscore;
        }
 
        // win condition - detect when player wins
 
        document.querySelector(`.message`).textContent = ` 🎉 You won!`;
        document.querySelector(`.guess`).disabled = true;
        document.querySelector(`.check`).disabled = true;
        
        document.body.style.backgroundColor = `#a4c762`

    } else if (guess > secretNumber) {
        console.log(`Too high!`);
        document.querySelector(`.message`).textContent = `📈 Too high!`;
        score--;
        document.querySelector(`.score`).textContent = score;
        if (score < 1) {
            document.querySelector(`.message`).textContent = `You have lost. Please try again.`
            document.querySelector(`.number`).textContent = secretNumber;
            document.querySelector(`.guess`).disabled = true;
            document.querySelector(`.check`).disabled = true;
            document.querySelector(`.message`).textContent = `Game Over!`;
            document.querySelector(`.guess`).value = ``;
            
        }
    } else if (guess < secretNumber) {
        console.log(`Too low!`);
        document.querySelector(`.message`).textContent = `📉 Too low!`;
        score--;
        if (score < 1) {
            document.querySelector(`.message`).textContent = `You have lost. Please try again.`
            document.querySelector(`.number`).textContent = secretNumber;
            document.querySelector(`.guess`).disabled = true;
            document.querySelector(`.check`).disabled = true;

            document.body.style.backgroundColor = `#f19fa9`


        }
    }

    //update score display
    document.querySelector(`.score`).textContent=score;
});

//////// game restart
document.querySelector(`.again`).addEventListener(`click`, function () {
    //reset game state
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(`New Secret Number:`, secretNumber);

   // reset display
   document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
 
    // re-enable input and button
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
});


