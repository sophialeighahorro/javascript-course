// Pig Game Development Hour 1 - Foundation & Dice Rolling
'use strict';

console.log('=== PIG GAME DEVELOPMENT: FOUNDATION & DICE ROLLING ===');

/*
What We're Building Today:
- A complete two-player dice game
- Players take turns rolling dice and accumulating points
- Rolling a 1 loses current round points
- First player to 100 points wins

Key Concepts:
- Game state management with multiple variables
- Random number generation for dice rolls
- Dynamic image display for dice faces
- Score tracking and display updates
- Conditional logic for game rules
*/

console.log('Pig Game project ready!');

let scores, currentScore, activePlayer, playing;

const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.querySelector(`#score--1`);
const current0El = document.querySelector(`#current--0`);
const current1EL = document.querySelector(`#current--1`);
const diceEl = document.querySelector(`.dice`);
const btnRollEl = document.querySelector(`.btn--roll`);
const btnHoldEl = document.querySelector(`.btn--hold`);
const btnNewEl = document.querySelector(`.btn--new`);

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  diceEl.classList.add(`hidden`);
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

btnRollEl.addEventListener('click', () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
      console.log(`Active Player: ${activePlayer}`);

      console.log(
        `Player 0 active: ${player0El.classList.contains('player--active')}`
      );

      console.log(
        `Player 1 active: ${player1El.classList.contains('player--active')}`
      );
    }
  }
});


///Player Switching & Hold Functionality

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

///Win Conditions & Game Reset

btnHoldEl.addEventListener('click', () => {
  if (playing && currentScore > 0) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
    }
});

btnNewEl.addEventListener('click', init);