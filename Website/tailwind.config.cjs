/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: "#639",
        secondary: "#ff9800",
        accent: "#ffc107",
        dark: "#111",
        light: "#f5f5f5",
      },
    },
  },
  variants: {},
  plugins: [],
};
