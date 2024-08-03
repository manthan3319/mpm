/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Sans Batak"', 'sans-serif'],
        openSans: ['"Open Sans"', 'sans-serif'],
        oxanium: ['"Oxanium"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
      },
      colors: {
        customBlue: '#233E8D',
      },
    },
  },
  plugins: [],
}
