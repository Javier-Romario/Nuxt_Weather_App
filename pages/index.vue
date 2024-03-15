<template>
  <div class="w-100 mx-5 mt-3 flex-grow flex flex-col">
    <h1 class="text-center text-xl md:text-2xl lg:text-3xl font-bold">
      British Weather
    </h1>
    <p class="text-center text-sm md:text-md">
      Get detailed weather data by searching
    </p>
    <div class="w-100 flex flex-col justify-center items-center flex-grow">
      <form
        :class="{ shake: showError }"
        @submit.prevent="submitSearchCity($event)"
        class="flex flex-col w-100"
      >
        <input
          v-model="form.city"
          class="py-2 px-4 border text-xl text-left mb-3 w-full"
          id="City"
          type="text"
          placeholder="UK City"
          @focus="
            if (cityError !== '') {
              cityError = '';
              form.city = '';
            }
          "
          @blur="
            if (cityError !== '') {
              form.city = '';
            }
            showError = false;
            cityError = '';
          "
        />
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Search City
        </button>
        <span v-show="showError" class="text-red-500 my-3 text-xl">{{
          cityError
        }}</span>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
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
const showError = ref(false);
const cityError = ref("");

const form = reactive({
  city: "",
});

async function submitSearchCity(e) {
  if (form.city !== "") {
    showError.value = false;
    cityError.value = "";
    try {
      const data = await $fetch(`/api/city?city=${form.city}`);
      const cityInfo = data;

      if (cityInfo.city_data.data && cityInfo.city_data.data.name) {
        const router = useRouter();
        await navigateTo({
          path: `/${cityInfo.city_data.data.name}`,
        });
      }

      showError.value = true;
      cityError.value = "No city found";
    } catch (error) {
      console.error(error);
      showError.value = true;
      cityError.value = error.message;
    }
  } else {
    showError.value = true;
    cityError.value = "Please enter a city";
  }
}
</script>
<style scoped>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
