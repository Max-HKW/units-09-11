# 🏭 Car Factory App — Project Flow Explanation

This project demonstrates how to build a modular client-side web application using data stored on [JSONBlob](https://jsonblob.com). The goal is to display a car factory and a list of its cars, with each car's data stored in a separate JSON blob for maximum flexibility and efficiency.

---

## 🔧 JSONBlob Structure and Workflow

### Step 1: Create Individual Car Blobs

Each car is saved in its own JSON blob on JSONBlob.com. This approach allows each car's information to be edited and managed independently without affecting the rest of the data. When each blob is created, JSONBlob provides a unique URL. These URLs are required for the next step.

### Step 2: Create the Factory Blob

After creating all individual car blobs, you create another JSON blob representing the factory. This blob contains general information about the factory (such as name, location, and operational status) and includes an array of the previously created car blob URLs. This way, the factory acts as a central reference point for loading all car data.

### Step 3: Application Initialization

When the app loads, it fetches the factory blob first. It then extracts the list of car blob URLs and performs all car fetches in parallel using asynchronous requests. This ensures optimal performance and a faster user experience.

### Step 4: Display and Interaction

Once all data is loaded successfully, the app displays the factory details and a list of all cars, with their information shown immediately (no collapsible panels in this version). While the data is being loaded, a loading message or spinner is shown to inform the user.

### Step 5: Error Handling

The app includes full error handling for all fetch operations. If a blob cannot be loaded or a request fails, the app displays an appropriate error message instead of failing silently.

### Benefits of This Approach

- You only update the data that has changed (for example, one car).
- You minimize the size of each blob and HTTP request.
- The structure is scalable to many cars and factories.
- Easier debugging and separation of concerns.

---

## ✅ Summary

This structure provides flexibility, performance, and maintainability. JSONBlob is used as a simple and effective backend to demonstrate modular data loading, editing, and rendering in a web app.
