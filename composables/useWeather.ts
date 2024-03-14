import { getCityInformation } from "./useCity";
const imperialConversion = (windSpeedMeters: number): number =>
  windSpeedMeters / 1.609;

export async function getWeatherInformation(city: String) {
  const config = useRuntimeConfig();

  const res = await getCityInformation(city);

  // if we get city info correctly
  if (res && res.success && res.data) {
    const lat = Number(res.data.lat).toFixed(3);
    const lon = Number(res.data.lon).toFixed(3);
    const name = res.data.name;

    const cityWeather = await $fetch<any>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${config.WEATHER_API}`,
    );

    const { main: currentWeather } = cityWeather;

    const rain = cityWeather.rain ? cityWeather.rain["1h"] : 0;

    // console.log(cityWeather.wind.speed, "convert me from meters per hour");

    const wind = cityWeather.wind
      ? imperialConversion(cityWeather.wind.speed)
      : 0;
    const windMetric = cityWeather.wind.speed;

    return { name, lat, lon, currentWeather, rain, wind, windMetric };
  } else {
    return { success: "false" };
  }
}
