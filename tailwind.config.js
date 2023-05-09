/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      xl: '900px',
      lg: '700px',
      md: '650px',
      sm: '560px',

      padding: '1rem',
      center: true,
  }
  },
  plugins: [],
}

