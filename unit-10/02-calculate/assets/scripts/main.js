/**
 * @file main.js
 * @author Massimo Musso
 * @description This script performs basic mathematical operations (square, halve, percentage, and circle area)
 *              based on user input, and shows the results either on button click or Enter key press.
 */

// Input elements
/** @type {HTMLInputElement} */
const squareInput = document.getElementById('square-input');
/** @type {HTMLInputElement} */
const halveInput = document.getElementById('halve-input');
/** @type {HTMLInputElement} */
const percentageInput = document.getElementById('percentage-input');
/** @type {HTMLInputElement} */
const areaInput = document.getElementById('area-input');
/** @type {HTMLInputElement} */
const percentageBase = document.getElementById('percentage-base');

// Button elements
/** @type {HTMLButtonElement} */
const squareBtn = document.getElementById('square-button');
/** @type {HTMLButtonElement} */
const halveBtn = document.getElementById('halve-button');
/** @type {HTMLButtonElement} */
const percentageBtn = document.getElementById('percentage-button');
/** @type {HTMLButtonElement} */
const areaeBtn = document.getElementById('area-button');

// Output container
/** @type {HTMLDivElement} */
const solution = document.getElementById('solution');

/**
 * Calculates a mathematical operation based on the operator type.
 *
 * @param {string} operator - The operation to perform: 'pow', '/', 'percentage', or 'circle-area'.
 * @returns {number|undefined} The result of the operation, or undefined if the operator is invalid.
 */
function calculate(operator) {
  switch (operator) {
    case 'pow':
      return Math.pow(+squareInput.value, 2);
    case '/':
      return +halveInput.value / 2;
    case 'percentage':
      return (+percentageBase.value / 100) * +percentageInput.value;
    case 'circle-area':
      return Math.PI * Math.pow(+areaInput.value, 2);
    default:
      break;
  }
}

// Event listeners for button clicks

/** Displays the square of the input value. */
squareBtn.addEventListener('click', () => {
  const squareP = document.createElement('p');
  squareP.textContent = calculate(squareInput.name);
  solution.append(squareP);
});

/** Displays half of the input value. */
halveBtn.addEventListener('click', () => {
  const halveP = document.createElement('p');
  halveP.textContent = calculate(halveInput.name);
  solution.append(halveP);
});

/** Displays the percentage result of the two input values. */
percentageBtn.addEventListener('click', () => {
  const percentageP = document.createElement('p');
  percentageP.textContent = calculate(percentageInput.name);
  solution.append(percentageP);
});

/** Displays the area of a circle using the input radius. */
areaeBtn.addEventListener('click', () => {
  const areaeP = document.createElement('p');
  areaeP.textContent = calculate(areaInput.name).toFixed(2);
  solution.append(areaeP);
});

// Event listeners for Enter key press to trigger calculation

/** Triggers square calculation on Enter key. */
squareInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') squareBtn.click();
});

/** Triggers halve calculation on Enter key. */
halveInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') halveBtn.click();
});

/** Triggers percentage calculation on Enter key. */
percentageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') percentageBtn.click();
});

/** Triggers circle area calculation on Enter key. */
areaInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') areaeBtn.click();
});
