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
        'ndblue': '#90A9B7'
      }
    },
  },
  plugins: [],
}
