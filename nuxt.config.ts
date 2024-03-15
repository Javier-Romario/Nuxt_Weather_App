// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    WEATHER_API:
      process.env.NODE_ENV === "production"
        ? process.env.NUXT_WEATHER_API
        : process.env.NUXT_WEATHER_API_DEV,
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml", "/robots.txt"],
    },
  },
  routeRules: {
    "/sitemap.xml": { prerender: false },
    "/robots.txt": { prerender: false },
  },
});
