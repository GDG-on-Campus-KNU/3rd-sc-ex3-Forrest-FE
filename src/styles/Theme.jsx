import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTablePagination: {
      styleOverrides: {
        root: {
          margin: '0px',
          borderRadius: 0,
          '&:last-child': {
            padding: '0px',
          },
        },
        spacer: {
          flex: '1 1 100%',
        },
      },
    },
  },
  palette: {
    primary: {
      light: '#448aff',
      main: '#2979ff',
      dark: '#2962ff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b0bec5',
      main: '#455a64',
      dark: '#263238',
      contrastText: '#fff',
    },
  },
});

export default theme;
