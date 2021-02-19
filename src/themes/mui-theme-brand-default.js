import { createMuiTheme } from '@material-ui/core/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// # MUI THEMING REFERENCE/SYNTAX:
// ## https://next.material-ui.com/customization/theming/

export const muiThemeBrandDefault = createMuiTheme({
  spacing: 20,
  palette: {
    type: 'light',
    primary: {
      main: '#388e3c',
    },
    secondary: {
      main: '#ab47bc',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    button: {
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 12,
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
    MuiList: {
      dense: false,
    },
    MuiMenuItem: {
      dense: false,
    },
    MuiTable: {
      size: 'medium',
    },
    MuiButton: {
      size: 'medium',
    },
    MuiButtonGroup: {
      size: 'medium',
    },
    MuiCheckbox: {
      size: 'medium',
    },
    MuiFab: {
      size: 'medium',
    },
    MuiFormControl: {
      // margin: 'dense',
      size: 'medium',
    },
    MuiFormHelperText: {
      // margin: 'dense',
    },
    MuiIconButton: {
      size: 'medium',
    },
    MuiInputBase: {
      // margin: 'dense',
    },
    MuiInputLabel: {
      // margin: 'dense',
    },
    MuiRadio: {
      size: 'medium',
    },
    MuiSwitch: {
      size: 'medium',
    },
    MuiTextField: {
      // margin: 'dense',
      size: 'medium',
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#689f38',
        color: '#fff',
      },
    },
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
  },
  spacing: 8,
})
