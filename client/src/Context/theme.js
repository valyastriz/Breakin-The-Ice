import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#8a85ff' : '#6a5acd',
      dark: mode === 'dark' ? '#5041b2' : '#352f78',
      light: mode === 'dark' ? '#b2afff' : '#7f78d2',
      hover: mode === 'dark' ? '#7874e6' : '#3d3187',
    },
    secondary: {
      main: mode === 'dark' ? '#ba95ff' : '#9a70d1',
      dark: mode === 'dark' ? '#8362bc' : '#5e457a',
      light: mode === 'dark' ? '#d1baff' : '#b394e6',
      hover: mode === 'dark' ? '#a87cd9' : '#6f519b',
    },
    },
    breakpoints: {
      values: {
        xs: 0,  // extra-small screens
        sm: 600, // small screens
        md: 900, // medium screens
        lg: 1200, // large screens
        xl: 1536, // extra-large screens
      },
    },
    background: {
      default: mode === 'dark' ? '#121212' : '#f4f4f4',
      paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
      light: mode === 'dark' ? '#2c2f33' : '#e0e0e0',
      dark: mode === 'dark' ? '#0d0d0d' : '#c7c7c7',
      accent: mode === 'dark' ? '#25274d' : '#9ab3f5',
      highlight: mode === 'dark' ? '#464866' : '#dcdde1',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#b0bec5',
    },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&:hover': {
            boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
          },
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: 'primary.hover',
          },
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: 'secondary.hover',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#282828',
            boxShadow: '0 8px 20px 0 rgba(0,0,0,0.7)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#212121',
          '&:hover': {
            backgroundColor: '#333333',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#2c2c2c',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: 'primary.main',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'primary.main',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'primary.light',
            },
            '&:hover fieldset': {
              borderColor: 'primary.hover',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
        icon: {
          color: 'primary.main',
        },
      },
    },
  },
});
const theme =  createTheme(getDesignTokens('dark'));
export default theme;