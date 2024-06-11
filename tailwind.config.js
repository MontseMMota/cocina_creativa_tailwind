/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Roboto', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary': '#37a937',
        'secondary': '#db0f0f',
        'children': '#73C6B6',
        'list':'#7CFF7C',    
      },
    },
  },
  plugins: [],
}
