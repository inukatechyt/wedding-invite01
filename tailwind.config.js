/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        wedding: {
          bg: '#FDFBF7', // Creamy white background
          text: '#4A4A4A', // Soft dark gray for text
          gold: '#C5A880', // Elegant gold/brownish accent
          pink: '#F3E5E5'  // Very soft pink for borders/highlights
        }
      }
    },
  },
  plugins: [],
}