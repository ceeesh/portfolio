/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainBg': '#0E0E0E',
        'mainTxt': '#FBEBD8',
        'secondaryTxt': '#EFD09E',
        'ndblue': '#90A9B7',
        'beige': '#D2D8B3',
        'btnbg': 'rgba(239, 208, 158, 0.2)'
      }
    },
  },
  plugins: [],
}
