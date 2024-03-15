export async function getCityInformation(city: String) {
  const config = useRuntimeConfig();
  const res = await $fetch<any>(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city},${"GB"}&appid=${config.WEATHER_API}&units=metric`,
  ).catch((e) => console.log("getCityInformation file had an issue 🤯", e));

  if (res.length > 0) {
    return {
      success: true,
      data: res[0],
    };
  }

  return {
    success: false,
    data: [],
  };
}
