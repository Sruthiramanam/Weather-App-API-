```javascript
// =========================
// OpenWeather API Key
// =========================
const apiKey = "4084a842085d3b1e8e7c6050f09d9b6e";

// HTML Elements
const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");

// Search Button
searchBtn.addEventListener("click", getWeather);

// Search using Enter key
cityInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

// Get Weather
async function getWeather() {
    const city = cityInput.value.trim();

    // Validate input
    if (city === "") {
        alert("Please enter a city name.");
        cityInput.focus();
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    searchBtn.disabled = true;
    searchBtn.textContent = "Loading...";

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Handle API errors
        if (!response.ok) {
            if (response.status === 404) {
                alert("City not found. Please check the city name.");
            } else if (response.status === 401) {
                alert("API key error. Please check your OpenWeather API key.");
            } else {
                alert(data.message || "Unable to get weather information.");
            }
            return;
        }

        // Display weather information
        cityName.textContent = data.name;
        temperature.textContent = Math.round(data.main.temp) + "°C";
        description.textContent = data.weather[0].description;
        humidity.textContent = data.main.humidity + "%";
        wind.textContent = data.wind.speed + " m/s";

        // Display weather icon
        weatherIcon.src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.alt = data.weather[0].description;

        // Change background based on weather
        changeBackground(data.weather[0].main);

    } catch (error) {
        console.error("Weather request failed:", error);
        alert("Network error. Please check your internet connection and try again.");
    } finally {
        searchBtn.disabled = false;
        searchBtn.textContent = "Search";
    }
}

// Change Background
function changeBackground(weather) {
    switch (weather) {
        case "Clear":
            document.body.style.background =
                "linear-gradient(135deg, #f6d365, #fda085)";
            break;

        case "Clouds":
            document.body.style.background =
                "linear-gradient(135deg, #bdc3c7, #2c3e50)";
            break;

        case "Rain":
        case "Drizzle":
            document.body.style.background =
                "linear-gradient(135deg, #4b79a1, #283e51)";
            break;

        case "Thunderstorm":
            document.body.style.background =
                "linear-gradient(135deg, #232526, #414345)";
            break;

        case "Snow":
            document.body.style.background =
                "linear-gradient(135deg, #e6dada, #274046)";
            break;

        default:
            document.body.style.background =
                "linear-gradient(135deg, #4facfe, #00f2fe)";
    }
}
```
