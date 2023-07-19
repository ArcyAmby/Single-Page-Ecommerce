/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    // screens: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // },

    darkMode: 'media',
    extend: {
      colors: {
        customblack: '#0B0C10',
        customDarkGray: '#1F2833',
        customGray: '#C5C6C7',
        customMint: '#66FCF1',
        customDarkMint: '#45A29E'
      },
      fontFamily: {
        primary: ['Montserrat']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]

}

