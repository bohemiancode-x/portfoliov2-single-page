/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          body: ['Quicksand'],
          others: ['Roboto']
        },
        colors: {
          grey: '#f2f3f7'
      },
    },
  },
  plugins: [],
}
