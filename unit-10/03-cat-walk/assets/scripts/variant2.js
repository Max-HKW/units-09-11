/**
 * @file cat-walk-variant2.js
 * @author Massimo Musso
 * @description Makes the cat walk left and right, reversing direction when it hits screen edges.
 */

/** 
 * The cat image element 
 * @type {HTMLImageElement} 
 */
const cat = document.querySelector('img');

/** 
 * Current position of the cat (in pixels) 
 * @type {number} 
 */
let position = 0;

/** 
 * Direction of movement: 1 (right), -1 (left) 
 * @type {number} 
 */
let direction = 1;

/**
 * Moves the cat back and forth across the screen.
 * Reverses direction when reaching the edges, and flips the image horizontally.
 */
function catWalkBounce() {
  const screenWidth = window.innerWidth;
  const catWidth = cat.width;

  // Reverse direction and flip image if edge is hit
  if (position > screenWidth - catWidth || position < 0) {
    direction *= -1;
    cat.style.transform = direction === -1 ? 'scaleX(-1)' : 'scaleX(1)';
  }

  position += 10 * direction;
  cat.style.left = position + 'px';
}

setInterval(catWalkBounce, 50);
