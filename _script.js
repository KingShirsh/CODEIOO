const form = document.getElementById("weather-form");
const cityName = document.getElementById("city-name");
const weatherData = document.getElementById("weather-data");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Use geolocation API to get user's location
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Use weather API to get weather data
    const apiKey = "77e05b135c0a30dc25069da4e84796f0";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Display weather data
        const weatherText = `Weather in ${data.name}: ${data.weather[0].description}\nTemperature: ${data.main.temp}°C`;
        weatherData.textContent = weatherText;
      })
      .catch((error) => {
        console.error(error);
        weatherData.textContent = "Error getting weather data.";
      });
  });
});