/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      
      width: {
        'mobile-menu': '75%',

        '30pc':'30%',
        '70pc':'70%',
      },

      maxWidth:{
        'container':'1400px',
        '1100':'1100px',
        '1200':"1200px",
        '1000':'1000px',
        '300':'300px',
        '550':'550px',
        '450':'450px',
        
        '58pc':'58%',
        '90pc':'90%',
      },

      colors: {
        'primary': 'rgba(0, 105, 171, 1)',
        'light-black':'rgba(61, 61, 61, 1)',
        'secondary': '#4b5563',
        'secondary-light':'rgba(176, 176, 176, 1)',

        'blue': 'rgba(0, 164, 244, 1)',
        'blue-dark':'#0284c7',
        'blue-light':'#7dd3fc',
        'blue-extra-light':'#f0f9ff',
      },

      inset:{
        'nav': '-100%'
      }

    },
  },
  plugins: [],
}