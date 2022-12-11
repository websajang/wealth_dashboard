/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif']
    },
    colors: {
      primary: '#222831',
      secondary: '#393E46',
      third: '#00ADB5',
      forth: '#EEEEEE',
      red: '#DC1403'
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
