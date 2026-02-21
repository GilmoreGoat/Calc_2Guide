import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5f7',  // Soft blush background
          100: '#ffeef2', // Light pink
          200: '#ffccd5', // Pale pink
          300: '#ffb7c5', // Crumbl Pink - signature box color
          400: '#ff9eb2', // Darker pink
          500: '#ea6685', // Action pink
          600: '#e64375', // Deep pink
          700: '#c22b58', // Crimson
          800: '#a1254b', // Dark crimson
          900: '#872242', // Very dark
        },
        cookie: {
          light: '#fcf1d3', // Cream
          dough: '#cba787', // Cookie dough
          dark: '#3e2723',  // Chocolate chip
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
        'pill': '9999px',
      },
      boxShadow: {
        'cookie': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'cookie-hover': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    typography,
    animate,
  ],
}
