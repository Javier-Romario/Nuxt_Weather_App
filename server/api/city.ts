import { getCityInformation } from "../../composables/useCity";

export default defineEventHandler(async (event: any) => {
  const query = getQuery(event);
  console.log("from city api", query);
  const city: any = await getCityInformation(query?.city);
  console.log("from city endpoint", city);

  // add some error handling
  return {
    city_data: city,
  };
});
