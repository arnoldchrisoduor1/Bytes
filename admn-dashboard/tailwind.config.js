/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sidebarTop: '#5062a0',
        sidebarBottom: '#384886',
        customOrange: '#ff7556'
      }
    },
  },
  plugins: [],
};
