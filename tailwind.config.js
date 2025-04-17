/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // Army Green Color Palette
        army: {
          primary: '#556B2F',    // Dark Olive Green - Solid, dependable base
          secondary: '#8FBC8F',  // Dark Sea Green / Muted Sage - Softer green
          light: '#F5F5DC',      // Beige - Warm, light background
          linen: '#FAF0E6',      // Linen - Alternative warm background
          dark: '#36454F',       // Charcoal Grey / Slate - Text color
          highlight: '#B8860B',  // DarkGoldenrod - Emphasis color
          gold: '#DAA520',       // Goldenrod - Alternative emphasis color
        },
        // Original indigo palette maintained for backward compatibility
        indigo: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}