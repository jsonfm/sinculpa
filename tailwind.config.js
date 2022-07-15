/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cookie: ["Cookie", "Cursive"],
        'display': ['Oswald'],
        'body': ["Open Sans"],
      },
      spacing: {
        '128': '32rem',
        '140': '35rem',
        '180': '40rem',
        '50vh': '50vh',
        '60vh': '50vh',
        '70vh': '70vh',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'woods': "url('https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg')"
      },
    },
  },
  plugins: [],
}
