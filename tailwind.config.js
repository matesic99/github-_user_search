module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      'White': '#FFFFFF',
      'lGrayish': '#F6F8FF',
      'lBlack': '#141D2F',
      'lBlue': '#4B6A9B',
      'lGrey': '#697C9A',
      'lSky': '#0079FF',
      'black': '#141D2F',
      'darkBlue': '#1E2A47',
      'bright': '#FEFEFE',
    },


    extend: {
    },
  },
	plugins: [
	 require('flowbite/plugin')
	],
  darkMode: 'class'
}

