/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { firacode: ["Fira Code", "monospace"]}, 
      colors: {
        primary: "#282828",
        secondary: "#ebdbb2",
        titles: "#d79921",
        "secondary-titles": "#98971a",
        icons: "#fb4934",
        "icons-hover": "#cc241d",
        copyright: "#a89984",
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
