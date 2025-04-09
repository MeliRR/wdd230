const url =
  "https://raw.githubusercontent.com/MeliRR/wdd230/main/scoots/data/vehicles.json";
const table = document.querySelector("#table");

async function getVehicleData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.vehicles);
  displayVehicles(data.vehicles);
}

const displayVehicles = (vehicles) => {
  vehicles.forEach((vehicle) => {
    let tentry = document.createElement("tr");
    let name = document.createElement("td");
    let halfReserv = document.createElement("td");
    let fullReserv = document.createElement("td");
    let halfWalk = document.createElement("td");
    let fullWalk = document.createElement("td");

    name.textContent = `${vehicle.type}`;
    halfReserv.textContent = `${vehicle.halfDayReserv}`;
    fullReserv.textContent = `${vehicle.fullDayReserv}`;
    halfWalk.textContent = `${vehicle.halfDayWalkin}`;
    fullWalk.textContent = `${vehicle.fullDayWalkin}`;

    name.style.fontWeight = "bold";
    tentry.appendChild(name);
    tentry.appendChild(halfReserv);
    tentry.appendChild(fullReserv);
    tentry.appendChild(halfWalk);
    tentry.appendChild(fullWalk);
    
    table.appendChild(tentry);
  });
};
getVehicleData();