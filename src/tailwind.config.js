
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Needed for now as breaking buttons with transparency https://stackoverflow.com/questions/70536210/unexpected-behavior-when-using-tailwind-and-mui-in-nextjs-project-white-button
  corePlugins: {
    preflight: false,
  },
  prefix: "melody-",
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      boxShadow: {
        'main': "rgba(12, 25, 44, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
      },
      fontFamily: {
        melodyIcons: ['var(--melody-icon-font)'],
        sans: ['var(--inter-font)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          '100': '#0C192C',
          '200': '#1B3B6B',
          '300': '#2A63B6',
          '400': '#607a9f'
        },
        secondary: {
          '100': '#9F8560',
          '200': '#DBAB67',
          '300': '#F3CA91'
        },
        accent: {
          '100': '#ABDDE5',
          '200': '#73ECFF',
          '300': '#00DCFF'
        },
        maroon: {
          100: "#A5588A"
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
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

