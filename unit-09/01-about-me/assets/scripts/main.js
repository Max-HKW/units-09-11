/**
 * @file main.js
 * @author Massimo Musso
 * @description
 * This script dynamically updates the webpage by:
 * - Replacing specific <span> elements with plain text
 * - Adding CSS classes to <li> elements
 * - Inserting an image into the body
 * - Dynamically loading a stylesheet after a delay
 */

/**
 * Selects the <body> element and adds a CSS class for custom font styling.
 * @type {HTMLElement}
 */
const pageNode = document.body;
pageNode.classList.add('page-font');

/**
 * Replaces a <span> element with a plain text node.
 *
 * @param {string} spanId - The ID of the <span> element to replace.
 * @param {string} text - The text content that will replace the <span>.
 */
function replaceSpanWithText(spanId, text) {
  const span = document.getElementById(spanId);
  const textNode = document.createTextNode(text);
  span.replaceWith(textNode);
}

// Replace spans with user information
replaceSpanWithText('nickname', 'Max');
replaceSpanWithText('favorites', 'Videogames');
replaceSpanWithText('hometown', 'Rivoli');

/**
 * Selects all <li> elements and adds a CSS class to each.
 * @type {NodeListOf<HTMLLIElement>}
 */
const listElements = document.querySelectorAll('li');

listElements.forEach(listElement => {
  listElement.classList.add('list-item');
});

/**
 * Creates an <img> element, sets its source, and appends it to the body.
 * @type {HTMLImageElement}
 */
const imgElement = document.createElement('img');
imgElement.src = './assets/img/me.png';
pageNode.append(imgElement);

/**
 * After a 4-second delay, dynamically loads an external stylesheet
 * by appending a <link> element to the <head>.
 */
setTimeout(() => {
  const headElement = document.querySelector('head');
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.href = 'assets/css/style2.css';
  headElement.append(linkElement);
}, 4000);
