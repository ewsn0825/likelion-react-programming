/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
<<<<<<< HEAD
        suit: ['SUIT Variable'],
      },
      backgroundImage: {
        hero: 'url("/hero.jpg")',
      },
=======
        'suit': ['SUIT Variable']
      },
      backgroundImage: {
        'hero': 'url("/hero.jpg")',
      }
>>>>>>> dbf41c7c3a0bbff1f8d995386ea2c261bf4126b4
    },
  },
  plugins: [],
};
