import {createTheme, responsiveFontSizes} from '@mui/material';

let theme = createTheme({
  palette: {
    type: 'light',
    tertiary: {
      main: '#eaeaff',
    },
    primary: {
      main: '#3d5cff',
    },
    secondary: {
      main: '#ffebf0',
    },
    background: {
      default: '#ffffff',
    },
    success: {
      main: '#38c875',
    },
    info: {
      main: '#3d5cff',
    },
    text: {
      primary: '#1f1f39',
      secondary: '#858597',
      disabled: '#b8b8d2',
      hint: '#f4f3fd',
    },
    warning: {
      main: '#ff6905',
    },
  },
  typography: {
    fontFamily: '"Mulish", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ownerState, theme}) => ({
          ...(ownerState.variant === 'outlined' && {
            borderWidth: '2px',
            '&:hover, &:focus': {
              borderWidth: '2px',
            },
          }),
          ...(ownerState.color === 'warning' && {
            color: '#ffffff',
          }),
          whiteSpace: 'nowrap',
          fontWeight: theme.typography.fontWeightBold,
        }),
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: ({theme}) => ({
          padding: '16px',
        }),
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
