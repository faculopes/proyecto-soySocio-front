import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
        ],
        serif: ["BebasNeue", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular"],
      },
      screens: {
        xs: "300px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};