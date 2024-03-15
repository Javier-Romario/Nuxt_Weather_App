<template v-if="!error && status === 200">
  <div class="my-2 mx-5 lg:mx-20">
    <h1
      class="text-xl text-slate-600 dark:text-slate-200 font-bold text-center mt-3 mb-3"
    >
      {{ weather.weather_data.name.toUpperCase() }}
    </h1>

    <div
      class="grid lg:grid-cols-3 grid-cols-3 lg:grid-rows-3 grid-flow-row gap-2 md:gap-x-4 lg:gap-x-24 md:gap-y-5 lg:gap-y-10 justify-center items-center mt-5 h-[80vh]"
    >
      <weather-card
        title="Temp 🤒"
        :value="weather.weather_data.currentWeather.temp"
        unit="&deg;C."
      />

      <weather-card
        title="Feels like 🤗"
        :value="weather.weather_data.currentWeather.feels_like"
        unit="&deg;C."
      />

      <weather-card
        title="Temp Min 🧊"
        :value="weather.weather_data.currentWeather.temp_min"
        unit="&deg;C."
      />

      <weather-card
        title="Temp max 🔥"
        :value="weather.weather_data.currentWeather.temp_max"
        unit="&deg;C."
      />

      <weather-card
        title="Wind speed 💨"
        :value="weather.weather_data.wind"
        unit="&nbsp;mph"
      />

      <weather-card
        title="Rain volume ☔"
        :value="weather.weather_data.rain"
        unit="&nbsp;mm"
      />
      <weather-card
        class="col-span-3 lg:col-span-1"
        title="Humidity 💦"
        :value="weather.weather_data.currentWeather.humidity"
        unit="&percnt;"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ documentDriven: { page: false } }); // Keep page fetching enabled surround: false // Disable surround fetching } })

useSeoMeta({
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
});
const route = useRoute();
const city = ref(route.params.city);

const {
  data: weather,
  error,
  execute,
  pending,
  refresh,
  status,
} = await useAsyncData("city", () =>
  $fetch(`/api/weather?city=${city.value}`).catch((e) => {
    error.value = true;
  }),
);
</script>
