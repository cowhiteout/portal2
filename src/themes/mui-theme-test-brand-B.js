import { createMuiTheme } from '@material-ui/core/styles';

// # MUI THEMING REFERENCE/SYNTAX:
// ## https://next.material-ui.com/customization/theming/

export const muiThemeTestBrandB = createMuiTheme({
  palette: {
    primary: {
      main: "#00ff00"
    },
    secondary: {
      main: "#00ff99"
    }
  },
  typography: {
    fontFamily: 'Times, Times New Roman, serif',
    button: {
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 6
  }
})
