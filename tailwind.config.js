/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      scale: {
        200: '2',
        300: '3'
      }
    },
    colors: {
      darkBackground: '#1e1e1e',
      lightBackground: '#e9e8e6',
      customBrown: '#40322A',
      customLightBrown: '#A68365',
      customBeige: '#BF8450',
      customLightBlue: '#80A7BF',
      customAccentBlue: '#5888A6'
    }
  },
  plugins: [],
}
