/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {}
  },
  corePlugins: { fontSize: false },
  plugins: [require('tailwindcss-fluid-type')]
}
