const autoDetectBtn = document.getElementById('auto-detect-btn');

autoDetectBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Use the lat and lon values to fetch the weather data for the user's location
      // For example, you can use the OpenWeatherMap API to get the weather data
      // Here's an example of how you can use the fetch API to get the weather data:

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY`)
        .then(response => response.json())
        .then(data => {
          // Display the weather data for the user's location
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
});