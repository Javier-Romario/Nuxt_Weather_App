import { getCityInformation } from "../../composables/useCity";

export default defineEventHandler(async (event: any) => {
  const query = getQuery(event);
  const city: any = await getCityInformation(query?.city);

  if (city.data.name) {
    // add some error handling
    return {
      city_data: city,
    };
  } else {
    return {
      success: false,
      city_data: false,
    };
  }
});
