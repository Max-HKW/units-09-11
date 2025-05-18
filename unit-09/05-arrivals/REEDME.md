# ✈️ Flight Board — Code Flow Explanation

### 👤 Author Massimo Musso

This document explains the logic and behavior of the **Flight Board** application written in JavaScript using Object-Oriented Programming (OOP). The board simulates real-time updates of flight statuses on an airport departure screen.

---

## 🧠 Core Concept

The application has two main classes:

- **Flight**: Represents a single flight and handles its lifecycle (status changes over time).
- **FlightBoard**: Manages a list of `Flight` instances and handles the rendering and display logic in the DOM.

---

## 🔹 Flight Class — Responsibilities

- **Stores data**: Each flight has `date`, `hour`, `destination`, `flight`, `notes`, `airplane`, `checkin`, and a `status`.
- **Initial state**: A flight starts with the status `DEPARTING`.
- **Triggers updates**: Immediately after creation, the flight begins a cycle of status changes using an asynchronous method.

### 🔄 Status Update Cycle

1. After **10 seconds**, the status becomes `ON_TIME`.
2. After another **10 seconds**, the status changes to either:
   - `ARRIVED` (70% chance), or
   - `DELAYED` (30% chance).
3. If `ARRIVED`: The flight stays visible for **60 seconds**, then is removed from the board.
4. If `DELAYED`: It stays delayed for **10 seconds**, then becomes `ARRIVED`. After **60 more seconds**, it's removed.

This simulates the realistic flow of a flight's lifecycle in an airport system.

---

## 🔸 FlightBoard Class — Responsibilities

- **Singleton pattern**: Ensures only one instance of the board exists using a static `_instance`.
- **Manages flights**: Adds new flights, removes flights that arrive, and sorts them based on date/time.
- **Rendering**: Dynamically updates the HTML table to reflect current flights and their statuses.
- **Highlight delays**: Flights with status `DELAYED` are displayed in red for emphasis.

---

## ⏳ Utility: `waitFor(ms)`

- This helper function returns a Promise that resolves after a given number of milliseconds.
- Used with `await` to simulate asynchronous delays between status changes.

---

## 🔁 New Flight Generation

Every **10 seconds**, a random flight from a predefined list is added to the board. This mimics new flights being scheduled.

---

## 🧹 Automatic Cleanup

Flights that reach the `ARRIVED` status are automatically removed from the table after 60 seconds, keeping the board clean and dynamic.

---

## 📋 Summary

- Real-time behavior is simulated with `async/await` and `setTimeout`.
- Clean OOP structure with single responsibility per class.
- Uses `DOM` manipulation to update the HTML table.
- Handles flight status transitions and automatic removal.

---





