# 📘 JSON Files Explanation: Car and Factory

This document provides an overview and explanation of various JSON files representing cars and car factories. Each JSON structure demonstrates the use of different data types: Number, String, Boolean, Array, Object, and Null.

---

## 🚗 `car.json`

Represents a single car object with multiple property types:

- `id` (String): Unique identifier for the car.
- `make` (String): Manufacturer brand (e.g., Toyota).
- `model` (String): Model name.
- `year` (Number): Manufacturing year.
- `isElectric` (Boolean): Indicates whether the car is electric.
- `features` (Array): A list of car features.
- `specs` (Object): An object containing specifications like engine and horsepower.
- `previousOwner` (Null or String): Can be null if there's no previous owner.

---

## 🏭 `factory.json`

Represents a car factory with a variety of data types:

- `id` (String): Unique factory identifier.
- `name` (String): Name of the factory.
- `location` (String): City and state where the factory is located.
- `established` (Number): Year of establishment.
- `isOperational` (Boolean): Indicates if the factory is currently operating.
- `departments` (Array): List of departments inside the factory.
- `manager` (Object): Info about the factory manager.
- `notes` (Null): Placeholder for optional notes.

---

## 🚘 `cars.json`

An array of 5 car objects, each structured like `car.json`, but with an added field:

- `factoryId` (String): Links the car to a factory by referencing its ID.

Each car has a different combination of electric/non-electric, features, and previous ownership.

---

## 🏭 `factory_with_embedded_cars.json`

Factory object with embedded car data:

- `cars` (Array of Objects): Each car is embedded as a simplified object within the factory.
- Useful for small-scale systems or documents where you want full data in one place.

---

## 🏭 `factory_with_car_ids.json`

Factory object referencing external cars by their IDs:

- `carIds` (Array of Strings): Instead of embedding, the factory lists IDs of cars it produced.
- Useful in relational structures where cars are stored separately for reusability and normalization.

---

## ✅ Data Types Used Across All Files

- **Number**: `year`, `horsepower`, `established`, etc.
- **String**: `make`, `model`, `location`, `name`, etc.
- **Boolean**: `isElectric`, `isOperational`, `isCertified`, etc.
- **Array**: `features`, `departments`, `carIds`, etc.
- **Object**: `specs`, `manager`, embedded cars, etc.
- **Null**: `previousOwner`, `notes`

---
