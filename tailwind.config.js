/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-color':"#232f3e",
         'hover':"#febd69",
         "catBannerText":"#bf4800"
      },
    },
  },
  plugins: [],
}
