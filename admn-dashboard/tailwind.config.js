/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      colors: {
        sidebarTop: '#5062a0',
        sidebarBottom: '#384886',
        customOrange: '#ff7556',
        customGray: '#eff3fc',
        customBlue: '#3ba0ea',
        customGreen: '#2aad93',
        customYellow: '#feb558',
        customPurple: '#8884d8',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
