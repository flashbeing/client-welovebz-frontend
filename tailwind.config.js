/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      serif: ['Courier Prime', 'serif'],
    },
    extend: {
      colors: {
        primary: '#2B845F',
        'primary-hover': '#2B845F',
        secondary: '#FB5656',
        'secondary-hover': '#FB5656',
        'light-black': '#343434',
        grey: '#888888',
        green: '#31b748',
        input: '#F2F2F2',
        'input-focus': '#F0F0F0',
        'light-red': '#fff1f1',
        'light-red-focus': '#fde9e9',
        placeholder: '#eeeeee',
      },
      borderRadius: {
        button: '10px',
        box: '20px',
      },
    },
  },
  variants: {},
  plugins: [],
}
