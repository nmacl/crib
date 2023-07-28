/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'waves': '#F3F4F3',
        'dark-waves': '#D1CAC6',
        'grainy': '#AC8B5D',
        'bland': '#917E7A',
        'dark-bland': '#151318'
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.3rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '4.441rem',
      '5xl': '5.552rem',
    },
  },
  plugins: [],
}
