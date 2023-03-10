/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainBg': 'rgb(15, 23, 42, 1)',
        'mainTxt': 'white',
        'secondaryTxt': '#bdbddd',
        'ndblue': '#cdcdff',
        'btnbg': '#2a2f4c',
        'btnHvr': 'rgb(15, 23, 42, 0.1)',
        'brdrC': 'rgba(255, 255, 255, .2)',
        'colr': 'rgb(40,40,55)',
        'colr2': 'rgba(40,40,55,1)',
        'colr3': 'rgba(16,16,18,1)'
      },
      boxShadow: {
        '5xl': '20px 20px 50px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
