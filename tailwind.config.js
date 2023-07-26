/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green-color':'#16A085',
        'light-green':'#1CBC9D'
      },
    },
  },
  plugins: [],
}