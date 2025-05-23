// tailwind.config.js  (ESM)
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#003366', light: '#0066cc', dark: '#002244' },
        secondary: { DEFAULT: '#FF6600', light: '#FF8800', dark: '#CC5500' },
        accent: { DEFAULT: '#00AAFF', light: '#66CCFF', dark: '#0088CC' },
        background: { DEFAULT: '#FFFFFF', gray: '#F0F2F5' },
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [forms],
};
