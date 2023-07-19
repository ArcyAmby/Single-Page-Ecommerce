/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "**/*.{html, js}", "**/**/*.{html, js}", "./index.html"
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
    extend: {
      colors: {
        black: '#0B0C10',
        darkGray: '#1F2833',
        gray: '#C5C6C7',
        mint: '#66FCF1',
        darkMint: '#45A29E'
      }
    },
  },
  plugins: [],
}

