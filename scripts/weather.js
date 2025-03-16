document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "48769fd38fb0913f6c7b6c2c559a42cc";
    const location = "Mexico City";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

    fetchWeather(apiUrl);
});

function fetchWeather(apiUrl) {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log("Weather Data:", data); // Debugging output

            // Extract weather details
            const temperature = data.main.temp.toFixed(1);
            const feelsLike = data.main.feels_like.toFixed(1);
            const windSpeed = data.wind.speed.toFixed(1);
            const humidity = data.main.humidity;
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

            // Update the HTML elements
            document.getElementById("location").textContent = "Mexico City";
            document.querySelector(".temp-area").innerHTML = `<span>${temperature}°F</span>`;
            document.getElementById("weather-description").textContent = description;
            document.getElementById("feels-like").textContent = ` ${feelsLike}°F`;
            document.getElementById("wind-speed").textContent = ` ${windSpeed} mph`;
            document.getElementById("humidity").textContent = ` ${humidity}%`;

            // Append weather icon
            const iconElement = document.createElement("img");
            iconElement.src = iconUrl;
            iconElement.alt = description;
            document.querySelector(".temp-area").appendChild(iconElement);
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weather-description").textContent =
                "Unable to load weather data.";
        });
}
