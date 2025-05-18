/**
 * @file script.js
 * @author Massimo Musso
 * @description Simulates a live airport arrivals page. Displays flights with real-time updates.
 *              Each row can be expanded accordion-style to show additional flight details.
 *              Only one accordion section can be open at a time.
 */

/**
 * Stores the current list of flights.
 * @type {Array<Object>}
 */
let flights = [];

/**
 * Runs every 10 seconds to:
 * - Update the status of all flights
 * - Add a new random flight
 * - Re-render the arrivals table
 */
setInterval(() => {
    updateFlightStatuses();
    addNewFlight();
    displayArrivals();
}, 10000);

/**
 * Updates the status of each flight in sequence:
 * "DEPARTING" → "ON_TIME" → "DELAYED" → "ARRIVED".
 * Flights with status "ARRIVED" are removed from the list.
 */
function updateFlightStatuses() {
    flights.forEach(flight => {
        switch (flight.status) {
            case 'DEPARTING':
                flight.status = 'ON_TIME';
                break;
            case 'ON_TIME':
                flight.status = 'DELAYED';
                break;
            case 'DELAYED':
                flight.status = 'ARRIVED';
                break;
            case 'ARRIVED':
                removeFlight(flight.id);
                break;
        }
    });
}

/**
 * Adds a new flight with random details to the flight list.
 */
function addNewFlight() {
    const newFlight = {
        flight: `FL${Math.floor(Math.random() * 1000)}`,
        from: ['Tokyo', 'London', 'Paris', 'Dubai', 'New York', 'Sydney'][Math.floor(Math.random() * 6)],
        arrivalTime: `${String(Math.floor(Math.random() * 12) + 10).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
        status: 'DEPARTING',
        id: Date.now()
    };
    flights.push(newFlight);
}

/**
 * Removes a flight from the list based on its unique ID.
 * @param {number} flightId - The ID of the flight to remove.
 */
function removeFlight(flightId) {
    flights = flights.filter(flight => flight.id !== flightId);
}

/**
 * Sorts and displays the current list of flights in the arrivals table.
 * Each row is expandable. Only one row can be expanded at a time (accordion behavior).
 */
function displayArrivals() {
    const tableBody = document.querySelector('#arrivalsTable tbody');
    tableBody.innerHTML = '';

    // Sort flights by arrival time
    flights.sort((a, b) => {
        const timeA = new Date(`2023-01-01T${a.arrivalTime}:00`);
        const timeB = new Date(`2023-01-01T${b.arrivalTime}:00`);
        return timeA - timeB;
    });

    // Create a row for each flight
    flights.forEach(flight => {
        const row = document.createElement('tr');
        row.classList.add('flight-row');
        row.innerHTML = `
            <td>${flight.flight}</td>
            <td>${flight.from}</td>
            <td>${flight.arrivalTime}</td>
            <td class="${flight.status.toLowerCase().replace(' ', '_')}">${flight.status}</td>
        `;

        // Additional hidden row with flight details
        const detailRow = document.createElement('tr');
        detailRow.classList.add('flight-details');
        detailRow.style.display = 'none';
        detailRow.innerHTML = `
            <td colspan="4">
                <strong>Gate:</strong> ${Math.floor(Math.random() * 20) + 1}<br>
                <strong>Terminal:</strong> ${['A', 'B', 'C'][Math.floor(Math.random() * 3)]}<br>
                <strong>Airline:</strong> SkyFly<br>
                <strong>Note:</strong> Please proceed to the gate 30 minutes before boarding.
            </td>
        `;

        // Add click event to toggle the accordion behavior
        row.addEventListener('click', () => {
            const allDetailRows = document.querySelectorAll('.flight-details');
            const allRows = document.querySelectorAll('.flight-row');

            const isOpen = detailRow.style.display === 'table-row';

            allDetailRows.forEach(dr => dr.style.display = 'none');
            allRows.forEach(r => r.classList.remove('open'));

            if (!isOpen) {
                detailRow.style.display = 'table-row';
                row.classList.add('open');
            }
        });

        tableBody.appendChild(row);
        tableBody.appendChild(detailRow);
    });
}

// Initial render
displayArrivals();
