# 📘 Car Factory Application - Code Flow Overview

This document explains the core logic and flow of the JavaScript code used in the Car Factory web application. The app dynamically fetches and displays information about a car factory and its associated cars from external JSON sources hosted on [jsonblob.com](https://jsonblob.com/).

---

## 🔗 Data Sources

Two JSON endpoints are used:
- One for a **single factory object**.
- One for an **array of car objects**.

They are stored in constants (`FACTORY_URL` and `CARS_URL`) and used for all network requests throughout the app.

---

## 🧱 DOM Element References

The script retrieves and stores references to key HTML elements:
- A container for the factory information
- A container to list the cars
- An error message area to notify users of issues (like failed network requests)

These elements are updated as data is fetched or modified.

---

## 🔄 Data Loading

The main `loadData` function asynchronously fetches both factory and car data using `Promise.all()`, ensuring both requests are done in parallel. The function checks if both requests were successful before continuing. If not, it displays an error.

Once the data is received, it is parsed from JSON and passed to two functions: `renderFactory` and `renderCars`, which are responsible for visual output.

---

## 🏭 Factory Rendering

`renderFactory` updates the HTML to show the factory's name, location, year of establishment, and operational status. This content is simple and static, based on the factory object.

---

## 🚗 Car Rendering and Interaction

`renderCars` takes the array of cars and renders each one in its own block. Each block includes:
- A clickable header with the car's make, model, and year
- A collapsible detail panel with input fields allowing users to edit the car's properties

Clicking the car's title toggles visibility of its detail panel using a simple `classList.toggle()` approach.

---

## 💾 Saving Changes

Each car block includes a "Save" button. When clicked:
1. The current input values are collected.
2. Validation ensures the year is a valid number.
3. The updated data replaces the original car in the cars array.
4. A PUT request sends the updated array to the `CARS_URL`.

If the update succeeds, the `loadData` function is called again to refresh the UI with the new data. If the save fails, an error message is shown and the button is re-enabled.

---

## ⚠️ Error Handling

All fetch operations are wrapped in `try/catch` blocks to handle network errors gracefully. If an HTTP response is not OK or a fetch fails, the error is displayed to the user in a clearly visible message area.

---

## 🧠 Summary

The app demonstrates:
- Parallel async data fetching
- Dynamic rendering and interactivity with DOM manipulation
- Form validation and live editing of data
- Integration with a lightweight online JSON backend (JSONBlob)
- Full user feedback on actions and error states

This creates a functional, editable, and responsive UI using only HTML, JavaScript, and CSS, without external frameworks.
