// weather.js
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '48769fd38fb0913f6c7b6c2c559a42cc'
    const location = 'Mexico City'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

    // Fetch weather data from OpenWeatherMap API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract the necessary data
            const temperature = data.main.temp;
            const condition = data.weather[0].description;
            const icon = data.weather[0].icon;

            // Update the HTML with the weather data
            document.getElementById('temp').textContent = temperature;
            document.getElementById('condition').textContent = condition;

            // Set the weather icon
            const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
            document.getElementById('weather-icon').src = iconUrl;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
