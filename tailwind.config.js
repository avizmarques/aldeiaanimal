const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      blue: {
        light: "#D2E2E7",
        DEFAULT: "#04BFBF",
        dark: "#364F59",
      },
      green: {
        DEFAULT: "#94E757",
        dark: "#0BAC7B",
      },
    },
    extend: {
      fontFamily: {
        sans: ["News Cycle", "sans-serif"],
        display: ["Amatic SC", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
