# 🧼 Dishwasher Simulation - Project Documentation

**Author:** Massimo Mussp 
**File:** `main.js`  
**Description:** A visual simulation of a dishwasher system using JavaScript, OOP principles, and DOM manipulation. The system represents multiple dirty stacks and a clean stack, simulating the dishwashing process with animated steps and real-time DOM updates.

---

## 🚀 Overview

This project simulates a dishwasher mechanism using four stacks:
- **3 Dirty Stacks** – Each holds a random number of dirty dishes.
- **1 Clean Stack** – Dishes are moved here after being washed.

The system is visualized in the browser, and dishes are "washed" two at a time with randomized delays between each wash to simulate real-time action.

---

## 🧠 Core Concepts

### 1. **Object-Oriented Programming (OOP)**

- The system is built with two main classes:
  - `Stack`: A reusable stack data structure for managing dishes.
  - `DishWasher`: Controls the simulation logic, dish movement, and DOM rendering.

This promotes modularity, encapsulation, and code reusability.

---

### 2. **Stack-Based Logic**

Each stack operates in **LIFO** mode (Last In, First Out), which reflects how dishes are placed and removed in real dishwashing scenarios. The clean stack also follows this behavior for consistency.

---

### 3. **Randomization**

- Each dirty stack is initialized with a **random number of dishes** between 10 and 15 to create variability.
- The time between wash cycles is randomized to make the simulation feel dynamic and less robotic.

---

### 4. **DOM Manipulation**

The `drawStack()` method updates the HTML view based on the current state of each stack:
- Each stack is represented visually in the DOM.
- Dishes are displayed as stacked `<div>` elements.
- The clean stack is styled differently to distinguish it from the dirty ones.

---

### 5. **Async Simulation Loop**

The simulation runs asynchronously:
- Every cycle washes up to **two dishes**, one from each dirty stack (if available).
- After each cycle, the DOM is updated.
- A `delay` function introduces a **random wait** between steps to simulate time taken by a real dishwasher.

---

## 🛠 Key Behaviors

- **Initialization:** On creation, all dirty stacks are populated, and the initial state is rendered.
- **Start Simulation:** Triggered by a button click, starts the washing process until all dishes are clean.
- **Washing Logic:** Ensures only two dishes max are washed per cycle, and handles empty stacks gracefully.
- **UI Updates:** Automatically reflects the current state of all stacks after every operation.

---

## 📌 Conclusion

This simulation demonstrates how basic data structures like stacks and fundamental JavaScript concepts (DOM, async, OOP) can be combined to build interactive and educational applications. The code is structured for clarity, ease of maintenance, and scalability.
