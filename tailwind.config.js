/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'], // Default sans-serif font is now Poppins
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}