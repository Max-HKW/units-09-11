/**
 * @file cat-walk-controller.js
 * @author Massimo Musso
 * @description Controllable animation of a cat walking from left to right.
 * The user can start, stop, and adjust the speed using buttons.
 */

/** @type {HTMLImageElement} */
const cat = document.getElementById('cat');

/** @type {HTMLButtonElement} */
const startBtn = document.getElementById('startBtn');

/** @type {HTMLButtonElement} */
const fasterBtn = document.getElementById('fasterBtn');

/** @type {HTMLButtonElement} */
const slowerBtn = document.getElementById('slowerBtn');

/** @type {HTMLButtonElement} */
const stopBtn = document.getElementById('stopBtn');

/** @type {HTMLElement} */
const info = document.getElementById('info');

/** Current horizontal position of the cat in pixels  */

/** @type {number} */
let position = 0;

/** Time interval in milliseconds for each animation step */

/** @type {number}  */
let speed = 50;

/** ID of the interval timer controlling the animation */

/** @type {?number}  */
let intervalId = null;

/**
 * Updates the info display with the current speed.
 * Called whenever speed changes.
 */
function updateInfo() {
  info.textContent = `Speed: ${speed}ms`;
}

/**
 * Enables or disables control buttons based on whether the animation is running.
 * @param {boolean} isRunning - Whether the cat is currently moving
 */
function enableButtons(isRunning) {
  startBtn.disabled = isRunning;
  stopBtn.disabled = !isRunning;
  fasterBtn.disabled = !isRunning || speed <= 10;
  slowerBtn.disabled = !isRunning || speed >= 500;
}

/**
 * Moves the cat 10px to the right. If it exits the screen, it wraps around to the left.
 */
function moveCat() {
  position += 10;
  if (position > window.innerWidth) {
    position = -cat.width;
  }
  cat.style.left = position + 'px';
}

/**
 * Starts the cat animation using setInterval.
 */
function startCat() {
  intervalId = setInterval(moveCat, speed);
  enableButtons(true);
}

/**
 * Stops the cat animation and disables related controls.
 */
function stopCat() {
  clearInterval(intervalId);
  intervalId = null;
  enableButtons(false);
}

/**
 * Changes the speed of the cat animation and restarts it with the new interval.
 * @param {number} delta - Amount to change the speed by (positive to slow down, negative to speed up)
 */
function changeSpeed(delta) {
  stopCat();
  speed = Math.max(10, Math.min(500, speed + delta));
  updateInfo();
  startCat();
}

// Event listeners for control buttons

startBtn.addEventListener('click', () => {
  startCat();
  updateInfo();
});

stopBtn.addEventListener('click', () => {
  stopCat();
});

fasterBtn.addEventListener('click', () => {
  changeSpeed(-10);
});

slowerBtn.addEventListener('click', () => {
  changeSpeed(10);
});

// Initial UI setup
updateInfo();
