const apiKey = "77e05b135c0a30dc25069da4e84796f0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".weather-app input");
const searchBtn = document.querySelector(".search");
const weatherIcon = document.querySelector(".weather-icon");
const backBtn = document.querySelector(".backBtn");
const locationBtn = document.querySelector(".location");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        // Update UI with weather data
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").textContent = data.main.humidity + "%";
        document.querySelector(".wind").textContent = data.wind.speed + " km/h";

        // Change background color based on weather condition (for demonstration)
        const temp = data.main.temp;

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png";
        }else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png";
        }else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png";
        }else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "drizzle.png";
        }else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "mist.png";
        }
        
        document.querySelector(".weather").style.display= "block";
        document.querySelector(".show").style.display= "none"
        

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }

    
}

function handleWeatherSearch() {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name");
    }
}
searchBtn.addEventListener("click", handleWeatherSearch);

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleWeatherSearch();
    }
});



backBtn.addEventListener("click", () => {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".show").style.display = "block";
});

function fetchWeatherDataByCoords(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateWeatherData(data))
        .catch(error => alert('Unable to retrieve weather data.'));
}

