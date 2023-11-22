/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
          menu: "url('../assets/bx-menu-alt-right.svg')",
          close: "url('../assets/bx-x.svg')"
      },
      fontFamily:{
        poppins: 'Poppins',
        dmSans: 'DM Sans'
      },
      colors:{
        "green-color": "#27AE60",
         "gray-color": "#828282",
         "card-color": "#212121",
         "color-back": "#171717",
          "menu-color": "#172554"
      }
    },
  },
  plugins: [],
}

