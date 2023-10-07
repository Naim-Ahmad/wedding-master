/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-image': "url('https://i.ibb.co/ZW0HZVc/Banner-min.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        title: 'Bebas Neue, sans-serif',
        primary: 'Montserrat, sans-serif',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
