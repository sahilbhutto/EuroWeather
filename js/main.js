document.addEventListener('DOMContentLoaded', () => {
  const citySelect = document.getElementById("citySelect");
  const searchBtn = document.getElementById("searchBtn");
  const weatherContainer = document.getElementById("weatherContainer");

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  loadCityData();

  async function loadCityData() {
    try {
      const response = await fetch('city_coordinates.csv');
      if (!response.ok) throw new Error("Failed to load CSV");
      const csvText = await response.text();
      populateCityDropdown(csvText);
    } catch (error) {
      console.error(error);
      citySelect.innerHTML = '<option disabled>Error loading cities</option>';
    }
  }

  function populateCityDropdown(csvText) {
    citySelect.innerHTML = '<option value="" disabled selected>Select a city...</option>';

    const lines = csvText.split(/\r?\n/);

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const parts = line.split(',');
      if (parts.length >= 4) {
        const lat = parts[0].trim();
        const lon = parts[1].trim();
        const city = parts[2].trim();
        const country = parts[3].trim();

        const option = document.createElement('option');
        option.value = `${lat},${lon}`;
        option.textContent = `${city}, ${country}`;
        citySelect.appendChild(option);
      }
    }
  }

  searchBtn.addEventListener("click", () => {
    const value = citySelect.value;
    if (!value) return alert("Please select a city!");
    const [lat, lon] = value.split(",");
    fetchWeather(lat, lon);
  });

  async function fetchWeather(lat, lon) {
    const url = `https://www.7timer.info/bin/civillight.php?lat=${lat}&lon=${lon}&ac=0&unit=metric&output=json&tzshift=0`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      displayWeather(data.dataseries);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch weather data");
    }
  }

  function getWeatherInfo(weatherString) {
    let title = "";
    let icon = "";

    switch (weatherString) {
      case "clear":
        title = "Clear";
        icon = "images/clear.png";
        break;
      case "pcloudy":
        title = "Partly Cloudy";
        icon = "images/pcloudy.png";
        break;
      case "mcloudy":
        title = "Mostly Cloudy";
        icon = "images/mcloudy.png";
        break;
      case "cloudy":
        title = "Cloudy";
        icon = "images/cloudy.png";
        break;
      case "lightrain":
      case "shower":
      case "rain":
        title = "Rain";
        icon = "images/rain.png";
        break;
      case "ts":
      case "tstorm":
        title = "Thunderstorm";
        icon = "images/tstorm.png";
        break;
      case "snow":
      case "rainsnow":
        title = "Snow";
        icon = "images/snow.png";
        break;
      default:
        title = weatherString;
        icon = "images/pcloudy.png"; 
    }
    return { title, icon };
  }

  function parseDate(dateNum) {
    const str = dateNum.toString();
    const year = parseInt(str.slice(0, 4));
    const month = parseInt(str.slice(4, 6)) - 1; 
    const day = parseInt(str.slice(6, 8));
    return new Date(year, month, day);
  }

  function displayWeather(dailyForecast) {
    weatherContainer.innerHTML = "";

    dailyForecast.forEach(day => {
      const dateObj = parseDate(day.date);
      const dayName = weekdays[dateObj.getDay()];
      const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      
      const { title, icon } = getWeatherInfo(day.weather);

      const weatherCard = document.createElement("div");
      weatherCard.classList.add("weather-card");
      
      weatherCard.innerHTML = `
        <h3 class="date">${dayName}, ${formattedDate}</h3>
        <img src="${icon}" alt="${title}">
        <p class="condition">${title}</p>
        <div class="temp-range">
          <p>H: ${day.temp2m.max}°C</p>
          <p>L: ${day.temp2m.min}°C</p>
        </div>
      `;

      weatherContainer.appendChild(weatherCard);
    });
  }

});