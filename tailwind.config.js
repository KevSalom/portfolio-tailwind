/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
           novak: "url('https://fotografias.lasexta.com/clipping/cmsimages01/2023/11/20/F302A6DD-D5D1-4973-8642-57CDFC3D6DF8/novak-djokovic_98.jpg?crop=3000,1688,x0,y0&width=1900&height=1069&optimize=low&format=webply')"
      },
      fontFamily:{
        poppins: 'Poppins'
      }
    },
  },
  plugins: [],
}

