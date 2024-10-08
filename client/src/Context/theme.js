import { createTheme } from "@mui/material/styles";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "dark" ? "#005fa3" : "#4d89a8", // Endeavour for dark, Wedgewood for light
      dark: mode === "dark" ? "#004080" : "#3d7080", // Darker shades
      light: mode === "dark" ? "#007bb8" : "#a4c1ae", // Lighter shades for dark mode, Spring Rain for light mode
      hover: mode === "dark" ? "#004080" : "#6da1b1", // Hover effects
    },
    secondary: {
      main: mode === "dark" ? "#e7e8d3" : "#f5f5f5", // White Rock for dark, Wild Sand for light
      dark: mode === "dark" ? "#c7c7b3" : "#d0d0d0", // Darker shades
      light: mode === "dark" ? "#f0f0e0" : "#ffffff", // Light colors
      hover: mode === "dark" ? "#d7d7cc" : "#e7e7e7", // Hover effects
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  background: {
    default: mode === "dark" ? "#0d1a33" : "#a3c1d4", // Darker navy for dark mode, soft icy blue for light mode
    paper: mode === "dark" ? "#1e2a3d" : "#ffffff", // Slightly darker paper for dark mode
    light: mode === "dark" ? "#2c3e50" : "#b3e5fc", // Darker grey for dark mode, light icy blue for light mode
    dark: mode === "dark" ? "#0d0d0d" : "#c7c7c7", // Keep as is for contrast
    accent: mode === "dark" ? "#1a3e6b" : "#dcdde1", // Icy accent colors
    highlight: mode === "dark" ? "#4a607a" : "#e6f2ff", // Darker highlight for dark mode, soft highlight for light mode
},
  text: {
    primary: mode === "dark" ? "#e0e0e0" : "#333333", // Light text on dark background, dark text on light background
    secondary: mode === "dark" ? "#b0bec5" : "#555555", // Adjust for readability
  },
  components: {

    MuiButton: {
      styleOverrides: {
        root: {
          color: (theme) => theme.palette.text.primary, // Set button text color to primary text color
        },
        containedPrimary: {
          backgroundColor: (theme) => theme.palette.primary.main, // Default background color
          color: (theme) => theme.palette.text.primary, // Set text color
          "&:hover": {
            backgroundColor: (theme) => theme.palette.primary.hover, // Hover background color
            color: (theme) => theme.palette.text.primary, // Ensure hover color matches
          },
        },
        containedSecondary: {
          backgroundColor: (theme) => theme.palette.secondary.main, // Default background color
          color: (theme) => theme.palette.text.secondary, // Set text color
          "&:hover": {
            backgroundColor: (theme) => theme.palette.secondary.hover, // Hover background color
            color: (theme) => theme.palette.text.secondary, // Ensure hover color matches
          },
        },
      },
    },
    
    MuiCard: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: (theme) => theme.palette.secondary.hover,
            boxShadow: "0 8px 20px 0 rgba(0,0,0,0.7)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#212121",
          "&:hover": {
            backgroundColor: "#333333",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#2c2c2c",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "secondary.main",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "primary.main",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "primary.light",
            },
            "&:hover fieldset": {
              borderColor: "primary.hover",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          "&:focus": {
            backgroundColor: "transparent",
          },
        },
        icon: {
          color: "secondary.main",
        },
      },
    },
  },
});

const createAppTheme = (mode) => {
  const validatedMode = typeof mode === 'string' ? mode : 'light'; // Fallback to 'light'
  return createTheme(getDesignTokens(validatedMode));
};

export default createAppTheme;
