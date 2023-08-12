/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00dc82',
        background: '#0c0c0d',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      dropShadow: {
        primary: '0 0px 15px rgba(0, 220, 130 ,0.60)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
};
