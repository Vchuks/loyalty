/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '14': '4rem',
      },
      fontSize: {
        'xxl': '2.7rem',
      }
    },
  },
  plugins: [],
}
