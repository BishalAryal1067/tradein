/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors :{
      'white':'#FFFFFF',
      'grey-1' : '#212121',
      'grey-2' : '#6C6C6C',
      'grey-3': '#959595',
      'grey-4': '#BEBEBE',
      'grey-5':'#E7E7E7',
      'grey-6':'#FBFBFB',
      'grey-7':'#F5F5F5',
      'grey-300' : '#D0D5DD',
      'grey-700' : '#344054',
      'input-grey' : 'rgba(251, 251, 251, 0.23);',
      'primary-1':'#003DA5',
      'primary-green' : '#00525E',
      'blue-200':'#EFF4FF',
      'blue-800': '#1D3999',
      'background-color' : '#F6F8FB'
      
    },
    fontFamily:{
      primary : ['Roboto Flex', 'sans-serif']
    }
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
