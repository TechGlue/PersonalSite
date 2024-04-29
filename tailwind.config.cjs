/** @type {import('tailwindcss').Config} */
module.exports = {
  //darkMode: ["selector", '[data-mode="dark"]'],
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { firacode: ["Fira Code", "monospace"] },
      colors: {
        primary: "#fbf1c7",
        secondary: "#7c6f64",
        titles: "#d79921",
        "secondary-titles": "#98971a",
        icons: "#458588",
        "icons-hover": "#076678",
        copyright: "#a89984",
        "primary-dark": "#282828",
        "secondary-dark": "#ebdbb2",
        "titles-dark": "#d79921",
        "secondary-titles-dark": "#98971a",
        "icons-dark": "#fb4934",
        "icons-hover-dark": "#cc241d",
        "copyright-dark": "#a89984",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
            visibility: "visible",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      container: {
        center: true,
        padding: "9rem",
      },
      animation: {
        typing: "typing 3s steps(20), blink 3s infinite",
      },
      textColor: {
        skin: {
          base: "var(--color-text-base)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "button-accent": "var(--color-button-accent)",
          "button-accent-hover": "var(--color-button-accent-hover)",
          "button-muted": "var(--color-button-muted)",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
