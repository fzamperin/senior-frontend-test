const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        primary: defaultTheme.colors.green
      }
    }
  }
}
