const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

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
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.5xl"),
          fontFamily: "Amatic SC",
        },
        h2: { fontSize: theme("fontSize.4xl"), fontFamily: "Amatic SC" },
        h3: { fontSize: theme("fontSize.3xl"), fontFamily: "Amatic SC" },
        p: {
          lineHeight: "1.5em",
          marginBottom: "1rem",
          fontSize: theme("fontSize.lg"),
        },
      });
    }),
  ],
};
