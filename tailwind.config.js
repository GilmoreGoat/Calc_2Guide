import typography from '@tailwindcss/typography';

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
          50: '#fff0f5',  // Very light pink/cream
          100: '#ffe4e9', // Light pink
          200: '#fecdd6', // Soft pink
          300: '#feb9ce', // Brand Base (Crumbl Pink)
          400: '#fd9bb8', // Darker pink
          500: '#f67098', // Vibrant pink
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
    },
  },
  plugins: [
    typography,
  ],
}
