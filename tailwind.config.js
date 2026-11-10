/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F3EEE3",
        dark: "#111111",
        crimson: "#7F1D1D",
      },
    },
  },
  plugins: [],
}