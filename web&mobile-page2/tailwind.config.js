module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
    },
    colors:{
      'white': '#ffffff',
      'purple-test': '#5424F3',
      'bone-test': '#F6F9FC',
      'metal-test': '#999999',
      'darkblue-test': '#3D4456',
      
    },
    boxShadow: {
      'test': '0px 2px 2px rgba(0, 0, 0, 0.15)',
    },
    margin:{
      '69':'276px'
    }
  }
  },
  plugins: [],
}