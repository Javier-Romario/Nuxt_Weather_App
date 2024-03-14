import { getWeatherInformation } from "../../composables/useWeather";

export default defineEventHandler(async (event: any) => {
  const query = getQuery(event);

  const res: any = await getWeatherInformation(query?.city);

  return {
    weather_data: res,
  };
});
