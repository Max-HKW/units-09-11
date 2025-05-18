
# Author: Massimo Musso

## Overview

This script allows users to generate a simple sentence using three inputs: a noun, an adjective, and a person's name. Once the "Generate" button is clicked, the composed sentence is displayed in the browser.

---

## Elements Selection

The script begins by selecting elements from the HTML document:

- A **button** element that triggers the story generation.
- Three **input fields**: one for a noun, one for an adjective, and one for a person's name.
- A **container** (usually a `div`) where the generated sentence will be displayed.

These elements are selected using `document.getElementById`.

---

## Function: `makeStory`

The `makeStory` function handles the logic of creating and displaying the sentence. Here's what it does:

1. **Creates a new paragraph element (`<p>`)** dynamically using `document.createElement`.
2. **Combines the input values** from the person, adjective, and noun fields into a single string.
3. **Sets the content** of the paragraph to the combined string.
4. **Appends** the paragraph to the story container, making it visible on the page.

This function does not return a value; its purpose is purely to manipulate the DOM.

---

## Event Listener

An event listener is added to the "Generate" button. When the button is clicked, it triggers the `makeStory` function, resulting in the generation and display of the sentence.

---

## Summary

The script uses basic DOM manipulation and event handling in JavaScript to interact with user input and dynamically update the web page. It demonstrates:

- Selecting DOM elements
- Reading input values
- Creating and appending new HTML elements
- Handling user interactions with event listeners

