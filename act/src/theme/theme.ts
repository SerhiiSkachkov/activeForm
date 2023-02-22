import { createMuiTheme } from '@material-ui/core/styles';
import { typography } from './typografy';

// breakpoints

const xl = 1280;
const lg = 1024;
const md = 768;
const sm = 575;
const xs = 0;

// colors

const spacing = 8;

export const theme = createMuiTheme({
  spacing,
  typography,
  breakpoints: {
    values: { xs, sm, md, lg, xl },
  },
  overrides: {
    MuiCssBaseline: {},
    MuiTypography: {},
    MuiInput: {},
    MuiFormLabel: {
      root: {
        textTransform: 'capitalize',
      },
    },
    MuiInputLabel: {
      root: {
        textTransform: 'capitalize',
      },
    },
    MuiButton: {},
  },
  props: {},
});
