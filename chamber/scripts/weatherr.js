document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "48769fd38fb0913f6c7b6c2c559a42cc";
    const location = "Mexico City";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${apiKey}`;

    // Fetch current weather
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weather-location").textContent = location;
            document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.getElementById("weather-icon").alt = data.weather[0].description;
            document.getElementById("weather-description").textContent = data.weather[0].description;
            document.getElementById("weather-temp").textContent = data.main.temp;
            document.getElementById("weather-feels").textContent = data.main.feels_like;
            document.getElementById("weather-humidity").textContent = data.main.humidity;
        })
        .catch(error => console.error("Error fetching weather data:", error));

    // Fetch 3-day forecast
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecastList = document.getElementById("forecast-list");
            forecastList.innerHTML = "";
            for (let i = 0; i < data.list.length; i += 8) {
                let forecast = data.list[i];
                let day = new Date(forecast.dt * 1000).toLocaleDateString("en-US", { weekday: "long" });
                let temp = forecast.main.temp;
                forecastList.innerHTML += `<li>${day}: ${temp}°F</li>`;
            }
        })
        .catch(error => console.error("Error fetching forecast:", error));
});
