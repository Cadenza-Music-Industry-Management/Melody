/** @type {import('tailwindcss').Config} */
module.exports = {
  // Needed for now as breaking buttons with transparency https://stackoverflow.com/questions/70536210/unexpected-behavior-when-using-tailwind-and-mui-in-nextjs-project-white-button
  corePlugins: {
    preflight: false,
  },
  prefix: "melody-",
  content: [
    "./**/*.{html,js,jsx,ts,tsx}"
  ],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        atami: ['Atami Regular', 'sans-serif'],
        atamiBold: ['Atami Bold', 'sans-serif'],
      },
      colors: {
        'primary': {
          '100': '#0C192C',
          '200': '#1B3B6B',
          '300': '#2A63B6'
        },
        'secondary': {
          '100': '#9F8560',
          '200': '#DBAB67',
          '300': '#F3CA91'
        },
        'accent': {
          '100': '#ABDDE5',
          '200': '#73ECFF',
          '300': '#ABDDE5'
        },
        black: {
          0: '#000000',
          100: '#707070',
          200: '#424242',
          300: '#323232',
          400: '#242424',
          500: '#181818',
          600: '#0a0a0a',
          700: '#040404'
        },
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
    }
  },
  plugins: [],
}

