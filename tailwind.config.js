const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#4B2B9E",
              foreground: "#ffffff",
            },
            focus: "#BEF264",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#4B2B9E",
              foreground: "#ffffff",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
