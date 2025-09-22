// Modal Development Hour 1 - Foundation & Class Toggling
'use strict';

console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===');

/*
What We're Building Today:
- A complete modal window component
- Modal opens when clicking any "Show modal" button
- Modal closes when clicking the "×" button or overlay
- Professional class-based show/hide functionality
- Reusable helper functions for clean code

Key Concepts:
- DOM element selection and caching
- Class manipulation for show/hide
- Event listeners for user interaction
- DRY (Don't Repeat Yourself) principles
*/

console.log('Modal project ready!');

//Section 1: DOM Element Selection & Caching

// Select the modal element
const modalEl = document.querySelector('.modal');

// Select the overlay element
const overlayEl = document.querySelector('.overlay');

// Select the close button
const btnCloseModalEl = document.querySelector('.close-modal');

// Select ALL the open buttons using querySelectorAll
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// Verify our selections worked correctly
console.log('Open buttons:', btnsOpenModalEl.length);

//querySelector gets the FIRST element that matches the selector
//querySelectorAll gets ALL elements that match the selector
//We use descriptive variable names with El suffix to indicate DOM elements
//Caching elements improves performance by avoiding repeated DOM searches

//Section 2: Open/Close Helpers with Class Toggling

// Create our openModal function
const openModal = function () {
  // Remove the hidden class from modal to make it visible
  modalEl.classList.remove('hidden');

  // Remove the hidden class from overlay to show dark background
  overlayEl.classList.remove('hidden');
};

// classList.remove() removes a specific class without affecting others
// We remove the hidden class to make elements visible
// Both modal and overlay need to be shown together

// Create our closeModal function
const closeModal = function () {
  // Add the hidden class back to modal to hide it
  modalEl.classList.add('hidden');

  // Add the hidden class back to overlay to hide dark background
  overlayEl.classList.add('hidden');
};

/*
classList.add() adds a specific class
We add the hidden class to hide elements
Both modal and overlay need to be hidden together
*/

//Section 3: Connecting Everything with Event Listeners

// Attach openModal function to all show buttons
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

/*
forEach loops through all buttons in the NodeList
Each button gets the same click event listener
We pass the function reference, not call it (openModal not openModal())
*/

// Attach closeModal function to close button
btnCloseModalEl.addEventListener('click', closeModal);

// Attach closeModal function to overlay click
overlayEl.addEventListener('click', closeModal);

/*
Close button click closes the modal
Overlay click also closes the modal (UX standard)
Same function handles multiple close triggers (DRY principle)
*/

