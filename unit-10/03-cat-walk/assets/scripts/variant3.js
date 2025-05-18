/**
 * @file cat-walk-variant3.js
 * @author Massimo Musso
 * @description Makes the cat walk back and forth across the screen. When it reaches the center,
 * it switches to a different image and pauses for 10 seconds before continuing with the original image.
 */

/**
 * The cat image element
 * @type {HTMLImageElement}
 */
const cat = document.querySelector('img');

/**
 * Current horizontal position of the cat in pixels
 * @type {number}
 */
let position = 0;

/**
 * Direction of movement: 1 (right), -1 (left)
 * @type {number}
 */
let direction = 1;

/**
 * Whether the cat is currently paused in the center
 * @type {boolean}
 */
let isPaused = false;

/**
 * Path to the original image
 * @type {string}
 */
const originalSrc = cat.src;

/**
 * Path to the new cat image
 * @type {string}
 */
const newCatSrc = './assets/img/catto.jpg'; // Replace with your actual path

// Setup initial styles
cat.style.position = 'absolute';
cat.style.left = '0px';
cat.style.transform = 'scaleX(1)';

/**
 * Moves the cat left and right.
 * When reaching the center, it changes image and pauses for 10 seconds.
 * Then resumes walking and switches back to the original image.
 */
function catWalkMiddlePause() {
  const screenWidth = window.innerWidth;
  const catWidth = cat.width;
  const middle = (screenWidth - catWidth) / 2;

  // Skip if currently paused
  if (isPaused) return;

  // If the cat is near the center, pause and change image
  if (Math.abs(position - middle) < 10) {
    isPaused = true;
    cat.src = newCatSrc;

    setTimeout(() => {
      cat.src = originalSrc;
      isPaused = false;

      // Nudge the cat away from the center to avoid repeated pausing
      position += 20 * direction;
      cat.style.left = position + 'px';
    }, 10000);

    return;
  }

  // Bounce at edges
  if (position > screenWidth - catWidth || position < 0) {
    direction *= -1;
    cat.style.transform = direction === -1 ? 'scaleX(-1)' : 'scaleX(1)';
  }

  position += 10 * direction;
  cat.style.left = position + 'px';
}

// Start the walking loop when the page loads
window.addEventListener('load', () => {
  setInterval(catWalkMiddlePause, 50);
});
