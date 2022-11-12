/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: { colors: { primary: '#2c3852', background: '#e9e7eb' } }
  },
  corePlugins: { fontSize: false },
  plugins: [require('tailwindcss-fluid-type')]
}
