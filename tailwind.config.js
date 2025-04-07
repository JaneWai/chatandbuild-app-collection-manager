/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'hero-blue': '#4F46E5',
        'hero-purple': '#8B5CF6',
        'hero-gradient-start': '#4F46E5',
        'hero-gradient-end': '#8B5CF6',
        'footer-blue': '#EEF2FF',
        'footer-purple': '#F5F3FF',
      }
    },
  },
  plugins: [],
}
