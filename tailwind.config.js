const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: { primary: '#2c3852', background: '#e9e7eb' },
      fontFamily: {
        ysbth: [
          'YouSheBiaoTiHei',
          ...defaultTheme.fontFamily.sans
        ] /* 优设标题黑  */,
        simhei: ['SimHei', ...defaultTheme.fontFamily.sans] /* 黑体  */,
        deng: ['DengXian', ...defaultTheme.fontFamily.sans] /* 等线 Regular*/
      }
    }
  },
  corePlugins: { preflight: false, fontSize: false },
  plugins: [require('tailwindcss-fluid-type')]
}
