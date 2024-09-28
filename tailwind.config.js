/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily:{
      poppins : ["poppins","sans-serif"]
    },
    extend: {
      colors:{
        "black-text": "#22262A",
      },
      screens:{
        sm:"480px",
      },
    },
  },
  plugins: [],
}

