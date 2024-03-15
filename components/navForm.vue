<template>
  <div class="flex items-center">
    <form @submit.prevent="submitSearchCity($event)">
      <!-- @blur="showForm = false" -->
      <input
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
        v-model="form.city"
        class="border border-red-200"
        type="text"
        placeholder="Search"
      />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 rounded-sm"
        type="submit"
      >
        Search City
      </button>
    </form>

    <span v-show="showError" class="text-red-500 mx-3 text-xl">{{
      cityError
    }}</span>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["search"]);

const showError = ref(false);
const cityError = ref("");

const form = reactive({
  city: "",
});

const searchText = ref("");

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
        form.city = "";
        emit("search");
      } else {
        showError.value = true;
        cityError.value = "No city found";
      }
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
