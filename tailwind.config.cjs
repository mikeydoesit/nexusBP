/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  media: false,
  theme: {
    colors: {
      white: '#ffffff',
      ash: '#939393',
      black: '#000000',
      highlight: '#fac426',
      transparent: 'transparent',
      grey: '#e7e7e7',
      greylight: '#eff1f3',
      darkGrey: '#d3d4d9',
    },
    gridTemplateColumns: {
      'home_container': '3fr 2fr',
      'cashflow_statement': ''
    },
    gridTemplateRows: {
      'tapbarmenu': '100%'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
