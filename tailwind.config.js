/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}','node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',"./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      ringColor: {
        'custom-color': '#000', // Replace with your desired color code
      },
    },
  },
  plugins: [require('flowbite/plugin', 'tw-elements/dist/plugin.cjs','daisyui','fontawsome')],
}

