const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#fig1");
const currentHumidity = document.querySelector("#fig2");
const city = document.querySelector("#weather-city");

const forecastTemp1 = document.querySelector("#forecast-temp-1");
const weatherIcon1 = document.querySelector("#weather-icon1");
const captionDesc1 = document.querySelector("#fig3");
const forecastday1 = document.querySelector("#forecast-day-1");
const maxTemp = document.querySelector("#max-temp");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=20.48&lon=-86.93&appid=82b9407b7b6d113e077d354c4b29fe74&units=metric`;
const url1 = `https://api.openweathermap.org/data/2.5/forecast?lat=20.48&lon=-86.93&appid=82b9407b7b6d113e077d354c4b29fe74&units=metric`;

async function weatherapiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); //Testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "weather icon");
  captionDesc.textContent = `${desc}`;
  currentHumidity.innerHTML = `${data.main.humidity}%`;
  city.innerHTML = `${data.name}, ${data.sys.country}`;
  maxTemp.innerHTML = `${data.main.temp_max.toFixed(1)}&deg;C`;
}

async function forecastapiFetch() {
  try {
    const response = await fetch(url1);
    if (response.ok) {
      const data = await response.json();
      console.log(data); //Testing only
      displayForecast(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayForecast(data) {
  forecastTemp1.innerHTML = `${data.list[4].main.temp.toFixed(1)}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.list[6].weather[0].icon}.png`;
  let desc1 = data.list[6].weather[0].description;
  weatherIcon1.setAttribute("src", iconsrc);
  weatherIcon1.setAttribute("alt", "weather icon");
  captionDesc1.textContent = `${desc1}`;
}

function forecastdates() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  const todayIndex = currentDate.getDay();

  forecastday1.innerHTML = `${daysOfWeek[(todayIndex + 1) % 7]}`;
}

function closeBanner() {
  const banner = document.getElementById("announcementBanner");
  banner.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("announcementBanner");
  banner.style.display = "flex";
});

weatherapiFetch();
forecastapiFetch();
forecastdates();