import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        color: '#DFDFDF',
        fontWeight: 'bold',

       '&$completed': {
         color: '#FABD03',
        },
        '&$active': {
          color: '#FABD03',
          
        },
      },
      active: {},
      completed: {},
    }
  },

  typography: {
    button: {
      textTransform: 'none'
    }
  },

  palette: {
    primary: {
      main: '#FABD03'
    },
  
    secondary: {
      main: '#FABD03'
    },
    /*
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
    */
  }
})

export default theme
