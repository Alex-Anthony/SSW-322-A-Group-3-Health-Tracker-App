/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter", {
      dark:{
      ...require("daisyui/src/theming/themes")["night"],
    }}, "retro","cyberpunk","valentine","aqua"],
  },
}

