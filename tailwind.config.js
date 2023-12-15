/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      mobile: '640px',

      tablet: '768px',

      laptop: '1024px',

      largeScreenLaptop: '1280px',

      xlScreenDesktop: '1536px',
    },
    extend: {},
  },
  plugins: [],
}
