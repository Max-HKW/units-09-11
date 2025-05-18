/**
 * @file cat-walk-variant1.js
 * @author Massimo Musso
 * @description Makes a cat walk from left to right. When the cat reaches the right edge of the screen,
 * it restarts from the left side (off-screen).
 */

/**
 * The cat image element to be moved.
 * @type {HTMLImageElement} 
 */
const cat = document.querySelector('img');

/**
 * The current horizontal position of the cat in pixels.
 * @type {number} 
 */
let position = 0;

/**
 * Moves the cat from left to right. Once it passes the screen width,
 * it resets the position to start again from the left.
 */
function catWalkRestart() {
  const screenWidth = window.innerWidth;
  const catWidth = cat.width;

  if (position > screenWidth) {
    position = -catWidth; // restart from the left, just outside the screen
  }

  cat.style.left = position + 'px';
  position += 10;
}

// Start the walking loop
setInterval(catWalkRestart, 50);
