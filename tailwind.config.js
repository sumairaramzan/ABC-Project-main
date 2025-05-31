/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'huge': '8rem',
        'super': '12rem',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} 