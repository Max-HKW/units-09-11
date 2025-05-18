# Airport Arrivals Simulation

This project simulates a real-time **airport arrivals page**, built with vanilla JavaScript. Flights are displayed in a table that updates every 10 seconds, showing their status progression and allowing users to expand rows to view additional flight details using an **accordion-style interface**.

---

## 📁 File Structure

- `index.html`: Main HTML page containing the table for arrivals.
- `script.js`: JavaScript logic that manages flights, updates statuses, and handles accordion behavior.
- `style.css` *(optional)*: Can be added to style the table, accordion animations, and statuses.

---

## 🚀 Features

- New flights are added every 10 seconds.
- Each flight's status evolves through: `DEPARTING → ON_TIME → DELAYED → ARRIVED`.
- Arrived flights are automatically removed.
- Flights are displayed in chronological order (by arrival time).
- **Accordion behavior**: clicking a row expands additional info, collapsing any other open rows.

---

## 📄 How It Works

### Flight Object

Each flight is represented as an object:

```js
{
  flight: 'FL123',
  from: 'Tokyo',
  arrivalTime: '12:45',
  status: 'ON_TIME',
  id: 1684262821938
}
```

## Status Updates
### Every 10 seconds:

- All flight statuses are updated.

- A new random flight is added.

- The table is refreshed with sorted and updated data.

Accordion Behavior
- Each <tr> representing a flight has an associated hidden <tr> with extra details.

- Clicking on a flight row:

   -Expands its detail row.
 
   -Closes all other detail rows (only one can be open at a time).