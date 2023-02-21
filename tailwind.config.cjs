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
      },
    },
  },
  plugins: [],
}
