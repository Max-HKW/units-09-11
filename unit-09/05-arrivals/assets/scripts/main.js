/**
 * @file main.js
 * @author Massimo Musso
 * @description Simulates a real-time flight departure board using OOP and DOM manipulation.
 */

/**
 * Waits for a specified number of milliseconds.
 * @param {number} ms - The number of milliseconds to wait.
 * @returns {Promise<void>}
 */
function waitFor(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Represents a single flight and handles its status lifecycle.
 */
class Flight {
  /**
   * @constructor
   * @param {Object} flightData - Flight information.
   * @param {string} flightData.date - Date of departure (format: dd-mm).
   * @param {string} flightData.hour - Departure hour (format: HH:MM).
   * @param {string} flightData.destination - Destination city.
   * @param {string} flightData.flight - Flight number.
   * @param {string} flightData.notes - Additional notes.
   * @param {string} flightData.airplane - Aircraft model.
   * @param {string} flightData.checkin - Check-in counter.
   */
  constructor({ date, hour, destination, flight, notes, airplane, checkin }) {
    this.date = date;
    this.hour = hour;
    this.destination = destination;
    this.flight = flight;
    this.notes = notes;
    this.airplane = airplane;
    this.checkin = checkin;
    this.status = 'DEPARTING';
    this.createdAt = Date.now(); // Timestamp

    this.startStatusCycle(); // Begin automatic status updates
  }

  /**
   * Starts the asynchronous status update cycle.
   */
  startStatusCycle() {
    this.runStatusCycle();
  }

  /**
   * Updates the flight status over time.
   * Simulates ON_TIME, DELAYED, ARRIVED transitions and removal after arrival.
   * @async
   */
  async runStatusCycle() {
    const board = FlightBoard.getInstance();

    await waitFor(10000); // Wait 10 seconds
    this.status = 'ON_TIME';
    board.render();

    await waitFor(10000); // Wait another 10 seconds
    this.status = Math.random() < 0.3 ? 'DELAYED' : 'ARRIVED';
    board.render();

    if (this.status === 'ARRIVED') {
      await waitFor(60000); // Wait 60 seconds before removal
      board.removeFlight(this);
    } else if (this.status === 'DELAYED') {
      await waitFor(10000); // Wait 10 seconds as delayed
      this.status = 'ARRIVED';
      board.render();
      await waitFor(60000); // Then wait 60 seconds before removal
      board.removeFlight(this);
    }
  }

  /**
   * Returns a string of HTML representing the table row for this flight.
   * @returns {string} HTML table row.
   */
  toRowHTML() {
    const delayedClass = this.status === 'DELAYED' ? 'delayed' : '';
    return `
      <tr class="${delayedClass}">
        <td>${this.date}</td>
        <td>${this.hour}</td>
        <td>${this.destination}</td>
        <td>${this.flight}</td>
        <td>${this.notes}</td>
        <td>${this.airplane}</td>
        <td>${this.checkin}</td>
        <td>${this.status}</td>
      </tr>
    `;
  }
}

/**
 * Singleton class that manages the list of flights and renders them.
 */
class FlightBoard {
  /**
   * @constructor
   */
  constructor() {
    /** @type {Flight[]} */
    this.flights = [];

    /** @type {HTMLElement} */
    this.tableBody = document.getElementById('flight-table-body');

    FlightBoard._instance = this; // Singleton instance
  }

  /**
   * Gets the singleton instance of the FlightBoard.
   * @returns {FlightBoard}
   */
  static getInstance() {
    return FlightBoard._instance || new FlightBoard();
  }

  /**
   * Adds a new flight to the board and starts its lifecycle.
   * @param {Object} flightData - The flight data.
   */
  addFlight(flightData) {
    const flight = new Flight(flightData);
    this.flights.push(flight);
    this.render();
  }

  /**
   * Removes a flight from the board.
   * @param {Flight} flight - The flight to remove.
   */
  removeFlight(flight) {
    this.flights = this.flights.filter(f => f !== flight);
    this.render();
  }

  /**
   * Renders the current flight list in the table.
   */
  render() {
    // Sorting by combined date and hour (converted to timestamp)
    this.flights.sort((a, b) => {
      const toTimestamp = f => new Date(`2025-${f.date.split('-').reverse().join('-')}T${f.hour}`).getTime();
      return toTimestamp(a) - toTimestamp(b);
    });

    this.tableBody.innerHTML = this.flights.map(f => f.toRowHTML()).join('');
  }
}

// === FLIGHT TEMPLATES ===

/**
 * @type {Object[]} - Predefined flight data used to simulate new incoming flights.
 */
const templates = [
  {
    date: '13-04',
    hour: '13:10',
    destination: 'TEL-AVIV',
    flight: 'FR5902',
    notes: 'BOARDING',
    airplane: '73H',
    checkin: 'A',
  },
  {
    date: '13-04',
    hour: '14:20',
    destination: 'FRANKFURT',
    flight: 'EN8845',
    notes: 'EXPECTED DEPARTURE AT 14:45',
    airplane: 'E95',
    checkin: 'C',
  },
  {
    date: '13-04',
    hour: '14:25',
    destination: 'MANCHESTER',
    flight: 'LS936',
    notes: '-',
    airplane: '73H',
    checkin: 'D',
  },
  {
    date: '13-04',
    hour: '14:55',
    destination: 'KRAKOW',
    flight: 'FR5905',
    notes: '-',
    airplane: '7M8',
    checkin: 'A',
  },
  {
    date: '13-04',
    hour: '15:05',
    destination: 'REGGIO CALABRIA',
    flight: 'FR8595',
    notes: '-',
    airplane: '73H',
    checkin: 'A',
  },
  {
    date: '13-04',
    hour: '15:10',
    destination: 'MALAGA',
    flight: 'FR5921',
    notes: '-',
    airplane: '73H',
    checkin: 'A',
  },
];

// === SIMULATION LOOP ===

const board = FlightBoard.getInstance();

// Every 10 seconds, add a random flight to the board
setInterval(() => {
  const template = templates[Math.floor(Math.random() * templates.length)];
  board.addFlight(template);
}, 10000);
