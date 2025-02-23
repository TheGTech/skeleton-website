import { createTheme } from '@mui/material/styles';

// Font definitions - Apple-style system fonts
const systemDisplay = '"-apple-system", "SF Pro Display", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif';
const systemText = '"-apple-system", "SF Pro Text", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#41433c', // Modern blue for learning/tech
      light: '#60a5fa',
      dark: '#1d4ed8',
      contrastText: '#fff',
    },
    secondary: {
      main: '#7c3aed', // Purple for creativity/innovation
      light: '#a78bfa',
      dark: '#5b21b6',
      contrastText: '#fff',
    },
    neutral: {
      main: '#64748B',
      light: '#94A3B8',
      dark: '#475569',
    },
  },
  typography: {
    fontFamily: systemText,
    h1: {
      fontFamily: systemDisplay,
      fontSize: '3.5rem',
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: '-0.015em',
    },
    h2: {
      fontFamily: systemDisplay,
      fontSize: '2.75rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: systemDisplay,
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: systemDisplay,
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: systemDisplay,
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: systemDisplay,
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontSize: '1.0625rem',
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.00714em',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;
