<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "Weather App",
  head: {
    htmlAttrs: {
      lang: "en",
    },
  },
  meta: [{ name: "description", content: "Weather App for a tech test" }],
});
</script>
