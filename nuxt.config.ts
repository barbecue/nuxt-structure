export default defineNuxtConfig({
  devtools: { enabled: true },
  components: ['~/components', '~/components/layouts'],
  css: ['~/stylesheets/main.scss'],
  modules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/eslint-module',
      '@nuxtjs/google-fonts',
      '@nuxt/image',
      'nuxt-icon'
  ],
  googleFonts: {
      download: true,
      preconnect: true,
      prefetch: true,
      families: {
          'Archivo+Black': true,
      },
  },
})
