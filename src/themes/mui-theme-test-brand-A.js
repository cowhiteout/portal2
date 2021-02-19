import { createMuiTheme } from '@material-ui/core/styles';

// # MUI THEMING REFERENCE/SYNTAX:
// ## https://next.material-ui.com/customization/theming/

export const muiThemeTestBrandA = createMuiTheme({
  palette: {
    primary: {
      main: "#ff0000"
    },
    secondary: {
      main: "#ff9900"
    }
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
    button: {
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 3
  }
})
