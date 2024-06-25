module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px', 
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightenRed: 'hsl(12, 88%, 59%)',
        brightenRedLight: 'hsl(12, 88%, 69%)',
        brightenRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(233, 12%, 13%)',
        darkGreyishBlue: 'hsl(277, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0, 98%)'

      }
    },
  },
  plugins: [],
}
