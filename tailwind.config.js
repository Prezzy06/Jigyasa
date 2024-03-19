/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'sans': [ 'ui-sans-serif',  'system-ui',],
      },
      colors: {
        'white':'#ffffff',
        'black':'#000000',
      },
      screens: {
        'sm': '520px',
        'md': '768px',
        'lg': '1100px',
      },
    },
    plugins: [],
  }
}