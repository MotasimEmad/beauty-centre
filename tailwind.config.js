/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'ubuntu': '"Ubuntu"'
    },
    extend: {
      colors: {
        'primary': '#f0d3c9',
        'primary_dark': '#2d271b'
      }
    },
  },
  plugins: [],
}