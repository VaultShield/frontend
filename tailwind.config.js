/** @type {import('tailwindcss').Config} */
import '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cinder: {
          50: '#f2f3fb',
          100: '#e7e9f8',
          200: '#d4d7f1',
          300: '#babde7',
          400: '#a09edb',
          500: '#8c85cf',
          600: '#7b6cbf',
          700: '#6253ff',
          750: '#5e3fff',
          800: '#330ECB',
          900: '#00036D',
          950: '#13111c'
        },
        shamrock: {
          50: '#ecfdf7',
          100: '#d1fae9',
          200: '#a7f3d7',
          300: '#6de8c3',
          400: '#3dd6ad',
          500: '#0fba92',
          600: '#049777',
          700: '#037962',
          800: '#05604f',
          900: '#064e42',
          950: '#022c26',
        },
        bground:{
          white: '#ffffff',
          grey: '#fefefe',
          dark: '#0e0e11',
          darkCard: '#18181B'
        }
      }
    }
  },
  plugins: ['@tailwindcss/forms'],
  darkMode: 'class'
};
