/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          body: ['Satoshi'],
          others: ['Roboto']
        },
        colors: {
          grey: '#f2f3f7',
          body: '#202124'
      },
      aria: {
        asc: 'sort="ascending"',
        desc: 'sort="descending"',
      }
    },
  },
  plugins: [
    require('tailwindcss-aria-attributes')
  ],
}
