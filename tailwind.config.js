/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "melody-",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
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
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
