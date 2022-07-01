/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cookie: ["Cookie", "Cursive"]
      },
      spacing: {
        '128': '32rem',
        '140': '35rem',
        '180': '40rem',
        '50vh': '50vh',
        '60vh': '50vh',
        '70vh': '70vh',
      }
    },
  },
  plugins: [],
}
