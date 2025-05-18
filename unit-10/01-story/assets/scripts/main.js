/**
 * @file main.js
 * @author Massimo Musso
 * @description This script generates a short sentence using user inputs
 *              (noun, adjective, person) and displays it on the page.
 */

const genBtn = document.getElementById('gen-button'); // Button to generate the story
const nounInput = document.getElementById('noun'); // Input field for a noun
const adjectiveInput = document.getElementById('adjective'); // Input field for an adjective
const personInput = document.getElementById('person'); // Input field for a person's name
const story = document.getElementById('story'); // Container where the generated story will be displayed

/**
 * Creates a short story from the input values and appends it to the story container.
 *
 * @function makeStory
 * @returns {void}
 */
function makeStory() {
  const p = document.createElement('p');
  const output = personInput.value + ' ' + adjectiveInput.value + ' ' + nounInput.value;
  p.textContent = output;
  story.appendChild(p);
}

// Add event listener to the button to generate the story when clicked
genBtn.addEventListener('click', makeStory);
