/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        '36': '9rem',
        '40': '10rem',
        // Add other custom sizes if needed
      },
      height: {
        '36': '9rem',
        '40': '10rem',
        // Add other custom sizes if needed
      }
    },
  },
  plugins: [],
}

