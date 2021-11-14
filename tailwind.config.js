/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Hind', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#21c4fd',
        'primary-hover': '#31caff',
        secondary: '#f8f8f8',
        'secondary-hover': '#fAfAfA',
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
