/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: { colors: { primary: '#2c3852' } }
  },
  corePlugins: { fontSize: false },
  plugins: [require('tailwindcss-fluid-type')]
}
