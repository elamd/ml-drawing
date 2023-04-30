/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
      backgroundColor: {
        primary: "#a3f4f6",
      }
    },
  },
  plugins: [],
}

