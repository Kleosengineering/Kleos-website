/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '##1e3a8a',  // Deep Blue for main elements
        secondary: '#3B9D9F', // Teal for secondary accents
        'light-gray': '#F5F5F5', // Light Gray for backgrounds
        'dark-gray': '#4B4F58', // Dark Gray for text
        'accent-green': '#00B68F', // Emerald Green for buttons/CTAs
        gold: '#D4AF37', // Gold for highlights
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
