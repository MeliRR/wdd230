// Trier, Germany 49.75005827713899, 6.637727902911176
// API key
// 0aec6412eede92415f476e7030db63f4

// https://openweathermap.org/current

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.7500&lon=6.6377&units=imperial&appid=0aec6412eede92415f476e7030db63f4";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}
apiFetch();

function displayResults(data) {
    const currentTemp = document.querySelector("#current-temp");
    const weatherIcon = document.querySelector("#weather-icon");
    const captionDesc = document.querySelector("#weather-description");

    // Format temperature to show zero decimal points
    const formattedTemp = data.main.temp.toFixed(0);
    // Display current temperature
    currentTemp.innerHTML = `${formattedTemp} &deg;F`;

    // Display weather icon and description
    data.weather.forEach((weatherEvent) => {
        const iconsrc = `https://openweathermap.org/img/wn/${weatherEvent.icon}@2x.png`;
        let desc = weatherEvent.description;
        desc = capitalizeSting(desc);
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
        captionDesc.innerHTML = `${desc}`;
    });
}

function capitalizeSting(myString) {
    const words = myString.split(" ");

    return words
        .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
}