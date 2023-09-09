import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2874F0'
    },
    secondary: {
      main: '#ffffff',
      contrastText: 'green'
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
    },  
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    }, 
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    }, 
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}></ThemeProvider>
    <App />
  </React.StrictMode>
);

