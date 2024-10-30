/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C6DD0', // Adjust based on your brand color
        secondary: '#FF5733',
        darkBlue: '#003366',
        lightGray: '#F3F4F6',
      },
    },
  },
  plugins: [],
};

