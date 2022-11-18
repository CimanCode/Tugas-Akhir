/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container :{
      center :true,
      screens : {
        xl: "1248px"
      }
    },
    extend: {
      backgroundImage:{
        'hero':"url('/css/assets/Image.svg')"
      }
    },
  },
  plugins: [],
}
