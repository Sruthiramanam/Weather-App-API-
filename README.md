# Weather App 🌦️

## About the Project
The Weather App is a simple and responsive web application that allows users to check the current weather conditions of any city. It fetches real-time weather data using the OpenWeather API and displays temperature, weather description, humidity, wind speed, and weather icons.

## Features
- Search for weather by city name
- Display current temperature in Celsius
- Show weather conditions and icons
- Display humidity and wind speed
- Dynamic background based on weather conditions
- Responsive user interface
- Error handling for invalid city names and API issues

## Technologies Used
- HTML5
- CSS3
- JavaScript
- OpenWeather API

## Project Structure
```text
Weather-App-API/
├── index.html
├── style.css
├── script.js
└── README.md
```

*Note: Your weather icon image or other assets may also be included in the project.*

## How to Run the Project
1. Clone or download this repository.
2. Open the project folder.
3. Obtain an API key from [OpenWeather](https://openweathermap.org/api).
4. Configure your API key in `script.js` for local testing.
5. Open `index.html` in your browser.

## API Key Configuration
In `script.js`, replace the placeholder with your own valid OpenWeather API key:

```javascript
const apiKey = "YOUR_API_KEY";
```

**Security Note:** Do not commit your actual API key to a public GitHub repository. For a publicly deployed application, use a backend server to make API requests securely.

## Future Improvements
- Display a five-day weather forecast
- Add location-based weather detection
- Show recent city searches

## Author
Created as a web development project to practice HTML, CSS, JavaScript, and API integration.
