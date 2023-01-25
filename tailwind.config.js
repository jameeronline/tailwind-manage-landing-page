/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    screens: {
      'sm': '640px', //mobile - portrait
      'md': '768px', //mobile - landscape
      'lg': '1024px', //tablet
      'xl': '1180px', //desktop
    },
    extend: {
      colors: {
        primary: 'hsl(12 88% 59%)', // primary
        primaryHover: 'hsl(12 92% 72%)', // primary hover
        secondary: 'hsl(228 39% 23%)', // secondary
        secondaryHover: 'hsl(228 39% 43%)', // secondary hover
        darkGrayishBlue: 'hsl(227 12% 61%)', // base font color
        veryDarkBlue: 'hsl(233 12% 13%)',
        veryPaleRed: 'hsl(13 100% 96%)',
        veryLightGray: 'hsl(0 0% 98%)'
      },
      fontFamily: {
        vietnam: ['Be Vietnam Pro', 'sans-serif'] //base font style
      }
    },
  },
  plugins: [],
}
