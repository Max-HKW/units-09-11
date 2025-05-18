# 📄 script.js – Cars & Factory Viewer

**Author**: Massimo Musso  
**File**: `main.js`  
**Description**:  
This script handles parsing of JSON strings representing cars and a factory, and dynamically renders the parsed data into the DOM using styled, bulletless HTML lists.

---

## JSON Data

### Cars JSON (`carsJSON`)
- A JSON **string** containing 5 car objects.
- Each car has:
  - `id` (String)
  - `make` (String)
  - `model` (String)
  - `year` (Number)
  - `isElectric` (Boolean)
  - `factoryId` (String) — references the factory that built the car.

### Factory JSON (`factoryJSON`)
- A JSON **string** representing a single factory.
- Contains:
  - `id` (String)
  - `name` (String)
  - `location` (String)
  - `established` (Number)
  - `isOperational` (Boolean)

---

## JSON.parse()

The script uses `JSON.parse()` to convert the JSON **strings** into usable JavaScript objects:

```js
const cars = JSON.parse(carsJSON);     // ➜ Becomes an array of objects
const factory = JSON.parse(factoryJSON); // ➜ Becomes a single object
```

## DOM Output
Elements Targeted:
 - #carsList – a `<ul>` where each car is added as a `<li>`.

 - #factoryList – a `<ul>` where each key-value pair of the factory is added as a `<li>`.

## Render Process:
 - Loop through each car in the cars array.

 - Create a `<li>` with car info (make, model, year, isElectric).

 - Loop through the factory object keys and create `<li>` entries.

 - Append all elements to their respective lists.