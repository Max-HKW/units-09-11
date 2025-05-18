/**
 * @file basic-cat-walk.js
 * @author Massimo Musso
 * @description A simple animation where a cat walks continuously to the right across the screen.
 */

/**
 * The cat image element
 * @type {HTMLImageElement}
 */
const cat = document.querySelector('img');

/**
 * The current horizontal position of the cat in pixels
 * @type {number}
 */
let position = 0;

/**
 * Moves the cat to the right by increasing its `left` style position.
 * This function is called repeatedly to animate the cat.
 */
function catWalk() {
  position += 10;
  cat.style.left = position + 'px';
}

// Start the animation loop, updating every 50 milliseconds
setInterval(catWalk, 50);
