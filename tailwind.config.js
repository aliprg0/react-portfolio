/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [   
      "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      screens:{
        "bsmmd": "900px",
      },
      fontFamily:{
        tt:[ 'Bitter', "serif"]
      }
    },
  },
  plugins: [],
}

