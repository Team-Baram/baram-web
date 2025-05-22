import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
    text: {
      primary: '#1e1e1e',
      secondary: '#6e6e6e',
    },
    primary: {
      main: '#1e1e1e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#007aff',
      contrastText: '#ffffff',
    },
    divider: '#e0e0e0',
    error: {
      main: '#e53935',
    },
    success: {
      main: '#43a047',
    },
    warning: {
      main: '#fbc02d',
    },
    info: {
      main: '#0288d1',
    },
  },
})

export default theme
