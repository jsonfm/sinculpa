/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cookie: ["Cookie", "Cursive"],
        poiret: ["Poiret One", "Cursive"],
        'display': ['Ubuntu'],
        'body': ["Ubuntu"],
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
        'woods': "url('https://img.freepik.com/free-photo/tasty-fresh-appetizing-italian-food-ingredients-dark-background-ready-cook-home-italian-healthy-food-cooking-concept-toning_1220-1820.jpg?w=2000')",
        'fruits': "url('https://sinculpasite.files.wordpress.com/2022/07/juice-mobile.jpeg')",
        'drinks': "url('https://sinculpasite.files.wordpress.com/2022/08/cocktails.jpeg')",
        'drinks-mobile': "url('https://sinculpasite.files.wordpress.com/2022/09/sangria.jpeg')",
        'juices': "url('https://sinculpasite.files.wordpress.com/2022/07/bg-juices.jpeg')",
        'juices-mobile': "url('https://sinculpasite.files.wordpress.com/2022/07/juice-mobile.jpeg')",
        'postre-mobile': "url('https://sinculpasite.files.wordpress.com/2022/09/coffee.jpeg')",
        'postre': "url('https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'desert': "url('https://images.pexels.com/photos/998653/pexels-photo-998653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      },
    },
  },
  plugins: [],
}
