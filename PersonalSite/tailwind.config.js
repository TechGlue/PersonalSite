/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sen: ["Sen", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        bgPrimary: "#233167",
        textTitle: "#F2F2F2",
        textPrimary: "#B8CAF9",
        textSecondary: "#c9d4e6",
        buttonPrimary: "#54626E",
        buttonHover: "#3a5681",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
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
      animation: {
        // the infinite in the alternate is what will make the cursor go back and forth
        //  removing it will create only one run
        typing: "typing 2s steps(20) alternate, blink .7s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
  variants: {
    scrollBehavior: ["responsive"],
  },
};
