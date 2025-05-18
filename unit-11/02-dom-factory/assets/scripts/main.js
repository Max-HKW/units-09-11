/**
 * @file main.js
 * @author Massimo Musso
 * @description
 * This script parses JSON strings for a list of cars and a factory,
 * and displays them on the page in styled bulletless <ul><li> lists.
 */

/**
 * JSON string representing a list of car objects.
 * @type {string}
 */
const carsJSON = `[
  {
    "id": "car1",
    "make": "Toyota",
    "model": "Camry",
    "year": 2022,
    "isElectric": false,
    "factoryId": "factory1"
  },
  {
    "id": "car2",
    "make": "Tesla",
    "model": "Model 3",
    "year": 2023,
    "isElectric": true,
    "factoryId": "factory1"
  },
  {
    "id": "car3",
    "make": "Ford",
    "model": "Mustang Mach-E",
    "year": 2021,
    "isElectric": true,
    "factoryId": "factory2"
  },
  {
    "id": "car4",
    "make": "BMW",
    "model": "i4",
    "year": 2024,
    "isElectric": true,
    "factoryId": "factory2"
  },
  {
    "id": "car5",
    "make": "Honda",
    "model": "Civic",
    "year": 2020,
    "isElectric": false,
    "factoryId": "factory1"
  }
]`;

/**
 * JSON string representing a factory object.
 * @type {string}
 */
const factoryJSON = `{
  "id": "factory1",
  "name": "Sunrise Auto Works",
  "location": "Detroit, MI",
  "established": 1985,
  "isOperational": true
}`;

/**
 * Converts the cars JSON string into a JavaScript array of objects.
 * @type {Array<Object>}
 */
const cars = JSON.parse(carsJSON);

/**
 * Converts the factory JSON string into a JavaScript object.
 * @type {Object}
 */
const factory = JSON.parse(factoryJSON);

/**
 * Reference to the HTML <ul> element where cars will be listed.
 * @type {HTMLElement}
 */
const carsList = document.getElementById('carsList');

/**
 * Reference to the HTML <ul> element where factory information will be listed.
 * @type {HTMLElement}
 */
const factoryList = document.getElementById('factoryList');

/**
 * Loops through the list of cars and appends each car as a styled <li> item to the DOM.
 */
cars.forEach(car => {
  /** @type {HTMLLIElement} */
  const li = document.createElement('li');
  li.textContent = `${car.make} ${car.model} (${car.year}) - Electric: ${car.isElectric}`;
  carsList.appendChild(li);
});

/**
 * Loops through each property in the factory object and appends it to the DOM as <li>.
 */
for (const key in factory) {
  /** @type {HTMLLIElement} */
  const li = document.createElement('li');
  li.textContent = `${key}: ${factory[key]}`;
  factoryList.appendChild(li);
}
