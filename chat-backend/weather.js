// Weather module — calls Open-Meteo (free, no API key)
// Returns current conditions + hourly forecast for Zürich or Copenhagen

const WX_CODES = {
  0:'Clear', 1:'Mainly clear', 2:'Partly cloudy', 3:'Overcast',
  45:'Foggy', 48:'Rime fog',
  51:'Light drizzle', 53:'Drizzle', 55:'Dense drizzle',
  61:'Light rain', 63:'Rain', 65:'Heavy rain',
  71:'Light snow', 73:'Snow', 75:'Heavy snow',
  80:'Light showers', 81:'Showers', 82:'Heavy showers',
  95:'Thunderstorm'
};

async function getWeather(lat, lng, timezone) {
  const tz = timezone || 'Europe/Zurich';
  const url = `https://api.open-meteo.com/v1/forecast`
    + `?latitude=${lat}&longitude=${lng}`
    + `&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,precipitation`
    + `&hourly=temperature_2m,weather_code,precipitation_probability,wind_speed_10m`
    + `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset`
    + `&temperature_unit=fahrenheit&wind_speed_unit=mph`
    + `&timezone=${encodeURIComponent(tz)}`
    + `&forecast_days=3`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Open-Meteo ${res.status}`);
    const data = await res.json();

    // Current conditions
    const current = {
      temp: Math.round(data.current.temperature_2m),
      humidity: data.current.relative_humidity_2m,
      condition: WX_CODES[data.current.weather_code] || 'Mixed',
      windMph: Math.round(data.current.wind_speed_10m),
      precipitation: data.current.precipitation
    };

    // Next 12 hours — hourly breakdown
    const now = new Date();
    const hourly = [];
    if (data.hourly && data.hourly.time) {
      for (let i = 0; i < data.hourly.time.length && hourly.length < 12; i++) {
        const t = new Date(data.hourly.time[i]);
        if (t >= now) {
          hourly.push({
            time: data.hourly.time[i],
            hour: t.getHours(),
            temp: Math.round(data.hourly.temperature_2m[i]),
            condition: WX_CODES[data.hourly.weather_code[i]] || 'Mixed',
            rainChance: data.hourly.precipitation_probability[i],
            windMph: Math.round(data.hourly.wind_speed_10m[i])
          });
        }
      }
    }

    // Daily forecast (today + next 2 days)
    const daily = [];
    if (data.daily && data.daily.time) {
      for (let i = 0; i < data.daily.time.length; i++) {
        daily.push({
          date: data.daily.time[i],
          hi: Math.round(data.daily.temperature_2m_max[i]),
          lo: Math.round(data.daily.temperature_2m_min[i]),
          condition: WX_CODES[data.daily.weather_code[i]] || 'Mixed',
          rainChance: data.daily.precipitation_probability_max[i],
          sunrise: data.daily.sunrise[i],
          sunset: data.daily.sunset[i]
        });
      }
    }

    return { current, hourly, daily };
  } catch (err) {
    console.error('Weather fetch error:', err.message);
    return null;
  }
}

module.exports = { getWeather };
