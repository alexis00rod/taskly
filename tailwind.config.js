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
        // Red
        customRedExtraLight: "#f1b8b3",
        customRedLight: "#e37167",
        customRed: "#dc4e41",
        customRedDark: "#b03e34",
        // Green
        customGreenExtraLight: "#c7dfd4",
        customGreenLight: "#90bfa9",
        customGreen: "#74af93",
        customGreenDark: "#5d8c76",
        // Gray
        customGrayExtraLight: "#d9d9da",
        customGrayLight: "#b2b4b5",
        customGray: "#9fa1a3",
        customGrayDark: "#7f8182",
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
