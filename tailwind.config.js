/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#181818",
        "secondary-color": "#CBFF4D",
        "thith-color": "#212020",
      },
      fontFamily: {
        bebas: ['"bebas neue"', "serif"],
      },
    },
  },
  plugins: [],
};
