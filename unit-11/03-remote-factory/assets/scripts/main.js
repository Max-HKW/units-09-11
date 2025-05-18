/**
 * @file carFactoryApp.js
 * @author Massimo Musso
 * @description Web application that loads a car factory and its cars from JSONBlob,
 *              displays them in the DOM, and allows editing and saving car data.
 */

// URLs to JSONBlob resources
const FACTORY_URL = 'http://jsonblob.com/api/jsonblob/1373638586850795520';
const CARS_URL = 'https://jsonblob.com/api/jsonblob/1373624778342195200';

// DOM references
const factoryContainer = document.getElementById('factoryContainer');
const carsContainer = document.getElementById('carsContainer');
const errorMessage = document.getElementById('errorMessage');

/**
 * Loads factory and cars data from JSONBlob and renders them.
 * Handles any fetch or parsing errors.
 * @async
 * @function
 * @returns {Promise<void>}
 */
async function loadData() {
  errorMessage.textContent = '';

  try {
    const [factoryRes, carsRes] = await Promise.all([
      fetch(FACTORY_URL),
      fetch(CARS_URL),
    ]);

    if (!factoryRes.ok) throw new Error('Failed to load factory data');
    if (!carsRes.ok) throw new Error('Failed to load cars data');

    const factory = await factoryRes.json();
    const cars = await carsRes.json();

    renderFactory(factory);
    renderCars(cars);
  } catch (err) {
    errorMessage.textContent = err.message;
  }
}

/**
 * Renders factory details into the factory container in the DOM.
 * @param {Object} factory - The factory object containing metadata
 * @param {string} factory.name - Name of the factory
 * @param {string} factory.location - Location of the factory
 * @param {number} factory.established - Year the factory was established
 * @param {boolean} factory.operational - Whether the factory is operational
 */
function renderFactory(factory) {
  factoryContainer.innerHTML = `
    <h2>${factory.name}</h2>
    <p><strong>Location</strong>: ${factory.location}</p>
    <p><strong>Established</strong>: ${factory.established}</p>
    <p><strong>Operational</strong>: ${factory.operational ? 'YES' : 'NO'}</p>
  `;
}

/**
 * Renders a list of cars with editable fields and save functionality.
 * @param {Array<Object>} cars - Array of car objects
 */
function renderCars(cars) {
  carsContainer.innerHTML = '';

  cars.forEach((car, index) => {
    const carContainer = document.createElement('div');
    carContainer.className = 'car';

    carContainer.innerHTML = `
      <h3 style="cursor:pointer">${car.make} ${car.model} ${car.year}</h3>
      <div class="details">
        <label>Make:</label>
        <input type="text" name="make" value="${car.make}">
        <label>Model:</label>
        <input type="text" name="model" value="${car.model}">
        <label>Year:</label>
        <input type="number" name="year" value="${car.year}">
        <label>Electric:</label>
        <select name="isElectric">
          <option value="true" ${car.isElectric ? 'selected' : ''}>Yes</option>
          <option value="false" ${!car.isElectric ? 'selected' : ''}>No</option>
        </select>
        <button class="saveBtn">Save</button>
      </div>
    `;

    const carHeader = carContainer.querySelector('h3');
    const details = carContainer.querySelector('.details');

    // Toggle visibility of details panel
    carHeader.addEventListener('click', () => {
      details.classList.toggle('visible');
    });

    const saveBtn = carContainer.querySelector('.saveBtn');

    /**
     * Handles saving updated car data to JSONBlob
     * @event saveBtn#click
     */
    saveBtn.addEventListener('click', async () => {
      errorMessage.textContent = '';
      saveBtn.disabled = true;

      const updatedCar = {
        id: car.id,
        make: details.querySelector('input[name="make"]').value.trim(),
        model: details.querySelector('input[name="model"]').value.trim(),
        year: Number(details.querySelector('input[name="year"]').value),
        isElectric: details.querySelector('select[name="isElectric"]').value === 'true',
        factoryId: car.factoryId
      };

      if (isNaN(updatedCar.year)) {
        errorMessage.textContent = 'Please enter a valid year!';
        saveBtn.disabled = false;
        return;
      }

      try {
        cars[index] = updatedCar;

        const res = await fetch(CARS_URL, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cars)
        });

        if (!res.ok) throw new Error("Failed to save car data!");

        await loadData();
      } catch (err) {
        errorMessage.textContent = err.message;
      } finally {
        saveBtn.disabled = false;
      }
    });

    carsContainer.appendChild(carContainer);
  });
}

// Initial call to load data on page load
loadData();
