const API_KEY = 'a7e945c3ec10db4da214df9ca6e4ce1c';          
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const form        = document.getElementById('search-form');
const cityInput   = document.getElementById('city-input');
const weatherCard = document.getElementById('weather-card');
const errorMsg    = document.getElementById('error-msg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;

  try {
    const res = await fetch(`${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
    if (!res.ok) throw new Error('City not found');
    const data = await res.json();
    displayWeather(data);
  } catch {
    showError();
  }
});

function displayWeather(data) {
  errorMsg.classList.add('hidden');
  weatherCard.classList.remove('hidden');

  document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById('description').textContent = data.weather[0].description.toUpperCase();
  document.getElementById('temperature').textContent = `🌡️ ${data.main.temp.toFixed(1)} °C`;
  document.getElementById('humidity').textContent = `💧 Humidity: ${data.main.humidity}%`;
  document.getElementById('wind').textContent = `💨 Wind: ${data.wind.speed} m/s`;
  document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

function showError() {
  weatherCard.classList.add('hidden');
  errorMsg.classList.remove('hidden');
}