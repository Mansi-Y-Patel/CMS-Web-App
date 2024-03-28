/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      // bg:{
      //   'hero-pattern':"url('/src/images/student')"
      // }
      // fontFamily: {
      //   'sans-sarif': ['"Poppins"', ],
      // },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}