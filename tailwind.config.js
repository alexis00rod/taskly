/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // Extralight: 60%
        // Light: 20%
        // Main: 0%
        // Dark: 20%
        // Blue
        customBlueExtraLight: "#b8ebed",
        customBlueLight: "#71d6dc",
        customBlue: "#4DCCD3",
        customBlueDark: "#3ea3a9",
        // Purple
        customPurpleExtraLight: "#cdcafc",
        customPurpleLight: "#9c95f9",
        customPurple: "#837af8",
        customPurpleDark: "#6962c6",
        // Pink
        customPinkExtraLight: "#ffe1e1",
        customPinkLight: "#ffc2c2",
        customPink: "#ffb3b3",
        customPinkDark: "#cc8f8f",
        // Theme
        customLightTheme: "#fcfcf5",
        customDarkTheme: "#494942",
        customWhite: "#FEFCFB",
        customBlack: "#101419",
      },
    },
  },
  plugins: [],
};
