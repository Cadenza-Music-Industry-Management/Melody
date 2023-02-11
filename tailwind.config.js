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
        'primary': '#0C192C',
        'secondary': '#9F8560',
        'accent': '#ABDDE5'
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
