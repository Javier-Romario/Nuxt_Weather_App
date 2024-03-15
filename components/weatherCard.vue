<template>
  <div
    class="border border-gray-200 rounded-3xl h-full text-white"
    v-bind:style="{
      backgroundImage: 'url(' + getIntensity(value, unit, title) + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <p class="flex flex-col justify-center items-center glassmorphic h-full">
      <span class="text-md lg:text-xl font-bold text-center">{{ title }}</span>
      <span class="text-md lg:text-2xl text-center"
        >{{ value }}&nbsp;{{ unit }}</span
      >
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  value?: number;
  unit?: string;
}>();

const availableGifs = {
  temperature: {
    "1": {
      cold: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDFpeTd3dXVna2M4MGtqbmRxMzZoYnV2b3l4b2xyemF0a2J3aHZ1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L6jmz6pkC6TDW8Isyb/giphy.gif",
      warm: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2J3MXdjZnBteWU3bDE5d3YzZXk5czFiMGFuNzhlaTc2bDRtcnVqaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W5CSvcMVOwJhK/giphy.gif",
      hot: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXRobHdjbnZ0bmczbnZraWIxNHF2bjhubGNmdDRtMzVvZmEyM3ZkdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eMben8Z2nYvtjAX4Y0/giphy.gif",
    },
    "2": {
      cold: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzh5bHRibmR6YXM3dzRiNHF3dWdqemV6ajU2NGE2a3BtN2xqbWt4MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKVESbDAfJJsPcY/giphy.gif",
      warm: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd29jYnN2YTQ5bm4yeWZ3Z2ZmMWlqNHlteWVmcTVtMWVoOGQ2Ym5lMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/143h81v2C1JZBK/giphy.gif",
      hot: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnY3dDNhaWR3M3Q2dGo4OHg2eDh2OW53eHo1OWZ4MnJ0aHRrcnFmOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4FATJpd4LWgeruTK/giphy.gif",
    },
    "3": {
      cold: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDFpeTd3dXVna2M4MGtqbmRxMzZoYnV2b3l4b2xyemF0a2J3aHZ1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L6jmz6pkC6TDW8Isyb/giphy.gif",
      warm: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazU0NHQ5cWZyMmRscWdrcXczYzZ6bnViZDdsMDUyNnV5emdhaHMxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gaC70Pcldg7raOlTD3/giphy.gif",
      hot: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWQ1NXI0M3praDdnNmRiZGN0YnY2aWxpaXRuNTZ0dHQ2M2h1M2FhayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dw3LVADjxoCU70PssN/giphy.gif",
    },
    "4": {
      cold: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDFpeTd3dXVna2M4MGtqbmRxMzZoYnV2b3l4b2xyemF0a2J3aHZ1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L6jmz6pkC6TDW8Isyb/giphy.gif",
      warm: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamUyM3V0N21mNTF2NXkwNm0yM2YwazFueG5iaG4xMHc2b2o2ZG5kaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/69kTT3XXpcCmU4KM57/giphy.gif",
      hot: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWljaGtmcTJuZDVjeHMwM2F1amh0d2hsbmN1dnN6MG93NDRxdjdpMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fAv2n4Tlhshig/giphy.gif",
    },
  },
  wind: {
    windy:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXBncnN6eWN1bmJhOWkxc2Z1bzl5YWVtN2dzNmFoOHB3dmx3MG1jbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WqgM24U3XnnobDPhUx/giphy.gif",
    light:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHFna3ExZHM4cHVvNHRwOTlmZHFiMjV6N3dwd2V5ZW40dnNnczN0NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jI77q8Mc5yOs5wncJe/giphy.gif",
    still:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXNuaW9zMm5wZWxkNW9zM2E4dzQyY2ptZmI4YnMwNnMydWs0NjQxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nTVsJYBOVs8tG/giphy.gif",
  },
  rain: {
    rainy:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTdoM2V3NWtmczk3d2NpbDZhNWR1eHFjMXE4bHRldTQ4bDJwNGs4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PN23U6cVRWFFe/giphy.gif",
    drizzle:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWkxeG0weThheTdvMzI0eHZ0ZzBmdnN3MzJtZGxneXR0aHJkZnZvbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IrIkq7Q3iRII0hy/giphy.gif",
    dry: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjlmNXg2azUxMnN2N24zMG84cjUwMXRqNHhqc3Z1NHB3emdpYnF5cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7zGpUAi5TOCGme7KtI/giphy.gif",
  },
  humidity: {
    dry: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjlmNXg2azUxMnN2N24zMG84cjUwMXRqNHhqc3Z1NHB3emdpYnF5cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7zGpUAi5TOCGme7KtI/giphy.gif",
    humid:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGJxaWxmaHZla3dtOHNtM3drc3RpYzkzaGl6a2hibjNhM2MyYzAxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AIGF7ljcNKZI4/giphy.gif",
    wet: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2dhbWV3Z2RjdXZ2d2x4bzZ3Mm42bzZ0eXU0MHh2bGF0ejk1dXA4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2QEgFdaWC0PmO8CY/giphy.gif",
  },
};

function getIntensity(value: number, unit: string, title: string) {
  if (unit.includes("mm")) {
    let weather = "low";
    value > 4.0 ? (weather = "rainy") : (weather = "drizzle");
    value < 0.5 ? (weather = "dry") : (weather = "drizzle");
    return availableGifs.rain[weather];
  }

  if (title.toLowerCase().includes("humidity")) {
    let weather = "dry";

    if (value < 20) {
      weather = "dry";
    } else if (value > 60) {
      weather = "wet";
    } else {
      weather = "humid";
    }

    return availableGifs.humidity[weather];
  }

  if (
    title.toLowerCase().includes("temp") ||
    title.toLowerCase().includes("feels")
  ) {
    let weather = "warm";

    if (value > 20) {
      weather = "hot";
    } else if (value < 5) {
      weather = "cold";
    } else {
      weather = "warm";
    }

    return availableGifs.temperature[Math.ceil(Math.random() * 4)][weather];
  }

  if (unit.includes("mph")) {
    let weather = "light";

    if (value < 7) {
      weather = "still";
    } else if (value > 17) {
      weather = "windy";
    }

    return availableGifs.wind[weather];
  }
}
</script>

<style scoped>
.glassmorphic {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
