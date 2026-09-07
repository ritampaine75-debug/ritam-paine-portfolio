import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './theme';
import './styles/global.css';

const base =
  (typeof import.meta !== 'undefined' && import.meta.env.BASE_URL) || '/ritam-paine-portfolio/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={base.replace(/\/$/, '') || '/'}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
