/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      sans: ['Inter']
    },
    extend: {
      colors: {
        "darkBlueShade" : '#002a37'
      }
    },
  },
  plugins: [],
}

