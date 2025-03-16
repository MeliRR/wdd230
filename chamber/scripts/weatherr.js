document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "48769fd38fb0913f6c7b6c2c559a42cc";
    const location = "Mexico City";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${apiKey}`;

    // Fetch current weather data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".weather h2").textContent = `Current Weather in ${location}`;
            document.querySelector(".weather p").textContent = `${data.weather[0].description}, ${data.main.temp}°F`;
        })
        .catch(error => console.error("Error fetching weather data:", error));

    // Fetch 3-day forecast
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecastSection = document.createElement("section");
            forecastSection.classList.add("forecast");
            forecastSection.innerHTML = "<h2>3-Day Forecast</h2>";
            
            for (let i = 0; i < data.list.length; i += 8) { // Every 24 hours (approx.)
                let forecast = data.list[i];
                let day = new Date(forecast.dt * 1000).toLocaleDateString("en-US", { weekday: "long" });
                let temp = forecast.main.temp;
                forecastSection.innerHTML += `<p>${day}: ${temp}°F</p>`;
            }
            document.querySelector("main").appendChild(forecastSection);
        })
        .catch(error => console.error("Error fetching forecast data:", error));

    // Display Meet and Greet banner on specific days
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    if (today >= 1 && today <= 3) { // Monday, Tuesday, Wednesday
        const banner = document.createElement("div");
        banner.classList.add("meet-greet-banner");
        banner.innerHTML = `
            <p>Join us for a Chamber Meet and Greet on Wednesday at 7:00 p.m.!</p>
            <button id="close-banner">❌</button>
        `;
        document.body.prepend(banner);
        
        document.getElementById("close-banner").addEventListener("click", () => {
            banner.style.display = "none";
        });
    }
});