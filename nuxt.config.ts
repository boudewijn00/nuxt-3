import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    options: { unstyled: false },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    importPT: { from: path.resolve(__dirname, './presets/lara/') }      //import and apply preset   
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL
    }
  }
})
