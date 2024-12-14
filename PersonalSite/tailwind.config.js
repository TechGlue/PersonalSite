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
        textSecondary: "#C9D4E6",
        buttonPrimary: "#54626E",
        buttonPrimarySecondary: "#B8CAF9",
        altText: "#170F0F",
        altButton: "#4C658C",
        buttonHover: "#3A5681",
        iconsHover: "#3A5681",
        subTitles: "#E8E2D8",
        bullets: "#C1D1FA",
        workBackground: "#1F2B5A",
        workHover: "#3F4B7A",
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
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        // the infinite in the alternate is what will make the cursor go back and forth
        //  removing it will create only one run
        typing: "typing 2s steps(20) alternate, blink .7s infinite",
        fade: "fadeIn .5s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
  variants: {
    scrollBehavior: ["responsive"],
  },
};
