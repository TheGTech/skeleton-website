import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';
import Home from './pages/Home';
import defaultConfig from './config/landingConfig';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home config={defaultConfig} />
    </ThemeProvider>
  );
}

export default App;
