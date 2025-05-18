# 📐 Calculator Script Explanation

## Author: Massimo Musso

This script is a small JavaScript-based calculator that allows users to perform the following operations via input fields and buttons or pressing Enter:

- Square a number
- Halve a number
- Calculate the percentage of a number
- Calculate the area of a circle

## 🔢 Input Fields

The HTML page provides separate input fields for each operation:

- **Square**: A number to be squared.
- **Halve**: A number to be divided by two.
- **Percentage**: Two inputs: one for the base percentage value and one for the number it applies to.
- **Circle Area**: A radius to calculate the area of a circle.

Each field is paired with a corresponding button to trigger the calculation.

## ⚙️ Core Function - `calculate()`

The `calculate` function takes a string operator (from the input element's `name` attribute) and returns the result of the selected calculation:

- `"pow"` → returns the square of the input.
- `"/"` → returns half of the input.
- `"percentage"` → returns the result of calculating a percentage: `base / 100 * value`.
- `"circle-area"` → returns the area of a circle using the formula `π × r²`.

## 🖱️ Button Event Listeners

Each button (`square-button`, `halve-button`, `percentage-button`, `area-button`) is tied to an event listener that:

1. Calls the `calculate()` function with the appropriate operator.
2. Creates a new paragraph (`<p>`) with the result.
3. Appends the result to the `#solution` div for display.

## ⌨️ Keyboard Accessibility

In addition to mouse clicks, the script also supports **keyboard interaction**:

Each input field listens for the `Enter` key. When pressed, the corresponding calculation button is triggered programmatically, ensuring a smoother and accessible user experience.

## 📌 Summary

This script provides an interactive way to perform common math operations, combining clear input structure, modular logic, and both click and keyboard-based user interaction.
