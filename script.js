const loader = document.getElementById("loader");
const container = document.getElementById("stations");

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

    displayStations(data);

  } catch (error) {
    console.error(error);
    container.innerHTML = "<p>⚠️ Error fetching data</p>";
  } finally {
    loader.style.display = "none";
  }
}

fetchStations();

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