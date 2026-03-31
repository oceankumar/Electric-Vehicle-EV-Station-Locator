# 🚗 Electric Vehicle Charging Station Locator

## 📌 Overview

The **Electric Vehicle Charging Station Locator** is a dynamic web application that helps users discover nearby EV charging stations across the globe. It leverages the **Open Charge Map API** to fetch real-time data and provides an intuitive interface for searching, filtering, and exploring charging stations.

This project demonstrates core concepts of **JavaScript, API integration, and modern UI development**, while solving a real-world problem in the growing EV ecosystem.

---

## 🎯 Features

### 🔍 Search Functionality

* Search charging stations by **city, location, or keyword**
* Instant results using dynamic filtering

### 🎯 Filtering Options

* Filter stations based on:

  * Charger type
  * Availability
  * Power output
  * Country

### 📊 Sorting

* Sort stations by:

  * Name (A–Z / Z–A)
  * Power output
  * Distance (if location enabled)

### 📄 Station Details

* View detailed information:

  * Station name
  * Address
  * Number of charging points
  * Connector types
  * Usage cost (if available)

### ⭐ Favorites (Optional Feature)

* Save preferred charging stations using **localStorage**

### 🌙 Dark Mode (Optional Feature)

* Toggle between light and dark themes

### ⏳ Loading Indicator

* Displays a loading spinner while fetching API data

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Styling:** CSS / Tailwind CSS (optional)
* **API:** Open Charge Map API
* **Version Control:** Git & GitHub

---

## 🌐 API Used

* **Open Charge Map API**
  Provides global data on EV charging stations.

Example endpoint:

```
https://api.openchargemap.io/v3/poi/?output=json&countrycode=IN&maxresults=50
```

---

## ⚙️ How It Works

1. The application fetches data using the **fetch API**
2. Data is stored and processed using JavaScript
3. **Array Higher-Order Functions** are used:

   * `map()` → render UI
   * `filter()` → search & filter
   * `sort()` → organize data
4. Results are dynamically displayed on the webpage

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ev-station-locator.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd ev-station-locator
```

### 3️⃣ Run the Project

* Open `index.html` in your browser
  OR
* Use Live Server (recommended)

---

## 📁 Project Structure

```
ev-station-locator/
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## 📱 Responsiveness

* Fully responsive design
* Works on:

  * Mobile 📱
  * Tablet 📲
  * Desktop 💻

---

## ✨ Bonus Features (Optional Enhancements)

* 🔁 Debounced search (improves performance)
* 📄 Pagination for large datasets
* 🗺️ Map integration (Leaflet / Google Maps)
* 📍 User location detection (Geolocation API)
* 📦 Progressive Web App (PWA)

---

## ⚠️ Error Handling

* Handles API failures gracefully
* Displays user-friendly messages when:

  * No results found
  * Network issues occur

---

## 📅 Milestones Covered

* ✅ Project Planning & Setup
* ✅ API Integration
* ✅ Search, Filter, Sort using HOFs
* ✅ UI/UX Design
* 🔄 Final Deployment (in progress)

---

## 🎓 Learning Outcomes

* Working with real-world APIs
* Writing clean and modular JavaScript
* Using higher-order functions effectively
* Building responsive web applications
* Managing project structure and documentation

---

## 💡 Future Improvements

* Add real-time availability status
* Integrate route planning
* Add user authentication
* Improve UI animations

---

## 👨‍💻 Author

**Ocean Kumar**

---

## ⭐ Acknowledgment

This project is built as part of a learning assignment to demonstrate practical implementation of web development concepts and API integration.

---

## 🚀 Final Note

This project highlights how technology can support sustainable transportation by making EV charging infrastructure more accessible and user-friendly.

---
