/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: 'Bebas Neue, sans-serif',
        primary: 'Montserrat, sans-serif',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
