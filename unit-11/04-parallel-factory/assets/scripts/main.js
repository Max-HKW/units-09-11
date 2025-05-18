/**
 * @file main.js
 * @description Loads factory and car data from multiple JSONBlob URLs in parallel and displays them on the page.
 * @author Massimo Musso
 */

// URLs
const FACTORY_URL = 'https://jsonblob.com/api/jsonBlob/1373678344608079872';

const factoryContainer = document.getElementById('factoryContainer');
const carsContainer = document.getElementById('carsContainer');
const loadingMessage = document.getElementById('loadingMessage');
const errorMessage = document.getElementById('errorMessage');

/**
 * Loads factory and car data, handling all errors and displaying a loading message.
 */
async function loadData() {
  // Show loader
  loadingMessage.style.display = 'block';
  errorMessage.textContent = '';
  carsContainer.innerHTML = '';
  factoryContainer.innerHTML = '';

  try {
    const factoryRes = await fetch(FACTORY_URL);
    if (!factoryRes.ok) throw new Error('Failed to load factory');

    const factory = await factoryRes.json();
    renderFactory(factory);

    // Fetch all car blobs in parallel
    const carBlobFetches = factory.carBlobUrls.map(url => fetch(url).then(res => {
      if (!res.ok) throw new Error(`Failed to load car at ${url}`);
      return res.json();
    }));

    const cars = await Promise.all(carBlobFetches);
    renderCars(cars);
  } catch (err) {
    errorMessage.textContent = err.message;
  } finally {
    loadingMessage.style.display = 'none';
  }
}

/**
 * Renders factory information to the page.
 * @param {Object} factory 
 */
function renderFactory(factory) {
  factoryContainer.innerHTML = `
    <h2>${factory.name}</h2>
    <p><strong>Location:</strong> ${factory.location}</p>
    <p><strong>Established:</strong> ${factory.established}</p>
    <p><strong>Operational:</strong> ${factory.operational ? 'Yes' : 'No'}</p>
  `;
}

/**
 * Renders each car's details visibly.
 * @param {Array<Object>} cars 
 */
function renderCars(cars) {
  cars.forEach(car => {
    const carDiv = document.createElement('div');
    carDiv.className = 'car';
    carDiv.innerHTML = `
      <h3>${car.make} ${car.model} (${car.year})</h3>
      <p><strong>Electric:</strong> ${car.isElectric ? 'Yes' : 'No'}</p>
      <p><strong>Color:</strong> ${car.color}</p>
      <p><strong>Factory ID:</strong> ${car.factoryId}</p>
    `;
    carsContainer.appendChild(carDiv);
  });
}

loadData();
