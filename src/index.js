import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './components/theme/themeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
