const loader = document.getElementById("loader");
const container = document.getElementById("stations");

const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
const sortSelect = document.getElementById("sort");

let allStations = [];

async function fetchStations() {
  loader.style.display = "block";

  try {
    const res = await fetch(
      "https://api.openchargemap.io/v3/poi/?output=json&countrycode=IN&maxresults=20",
      {
        headers: {
          "X-API-Key": "a7a92c31-2729-4771-baa5-6fa29b195bd7"
        }
      }
    );

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();
    allStations = data;

    displayStations(allStations);

  } catch (error) {
    container.innerHTML = "<p>⚠️ Error fetching data</p>";
  } finally {
    loader.style.display = "none";
  }
}

function displayStations(stations) {
  container.innerHTML = "";

  stations.forEach(station => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${station.AddressInfo.Title}</h3>
      <p>${station.AddressInfo.AddressLine1 || "No address"}</p>
      <p>Connections: ${station.Connections?.length || 0}</p>
    `;

    container.appendChild(div);
  });
}

function applyFilters() {
  let result = [...allStations];

  // 🔍 SEARCH
  const keyword = searchInput.value.toLowerCase();
  result = result.filter(station =>
    station.AddressInfo.Title.toLowerCase().includes(keyword)
  );

  // 🎯 FILTER
  const filterValue = filterSelect.value;

  if (filterValue === "low") {
    result = result.filter(station => (station.Connections?.length || 0) < 2);
  } else if (filterValue === "high") {
    result = result.filter(station => (station.Connections?.length || 0) >= 2);
  }

  // 🔃 SORT
  const sortValue = sortSelect.value;

  if (sortValue === "az") {
    result = result.sort((a, b) =>
      a.AddressInfo.Title.localeCompare(b.AddressInfo.Title)
    );
  } else if (sortValue === "za") {
    result = result.sort((a, b) =>
      b.AddressInfo.Title.localeCompare(a.AddressInfo.Title)
    );
  }

  displayStations(result);
}

searchInput.addEventListener("input", applyFilters);
filterSelect.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

fetchStations();
