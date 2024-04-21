/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "*.{html,js,jsx,ts,tsx}"],
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

