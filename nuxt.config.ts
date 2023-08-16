export default defineNuxtConfig({
  devtools: { enabled: false },
  components: ['~/components', '~/components/layouts'],
  css: ['~/stylesheets/main.scss'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module', '@nuxtjs/google-fonts', '@nuxt/image', 'nuxt-icon', '@pinia/nuxt'],
  googleFonts: {
    download: true,
    display: 'swap',
    preconnect: true,
    prefetch: true,
    families: {
      Inter: true,
    },
  },
});
