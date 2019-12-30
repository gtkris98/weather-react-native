const CURRENT_WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const FORECAST_BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast?';
const API_KEY = 'cb43536ad53ccd2294b9c3f757f13627';
//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={cb43536ad53ccd2294b9c3f757f13627}
//https://api.openweathermap.org/data/2.5/forecast?lat=28.41&lon=77.52&appid=cb43536ad53ccd2294b9c3f757f13627

export async function getCurrentWeatherByLatLong(latitude, longitude) {
  let url = CURRENT_WEATHER_BASE_URL +  `lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
  let weatherResponse = await fetch(url)
  return weatherResponse;
}

export async function getForecastByLatLong(latitude, longitude) {
  let url = FORECAST_BASE_URL +  `lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
  let weatherResponse = await fetch(url)
  return weatherResponse;
}

export async function getCurrentWeatherByCityId(cityId) {
  let url = CURRENT_WEATHER_BASE_URL + `id=${cityId}&units=metric&appid=${API_KEY}`
  let weatherResponse = await fetch(url)
  return weatherResponse
}

export async function getForecastByCityId(cityId) {
  let url = FORECAST_BASE_URL + `id=${cityId}&units=metric&appid=${API_KEY}`
  let weatherResponse = await fetch(url)
  return weatherResponse;
}
