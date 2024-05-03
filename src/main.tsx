import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeContextProvider } from 'contexts/themeContext';
import App from './App';
import './index.css';
import { NotificationContextProvider } from 'contexts/notificationContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <NotificationContextProvider>
        <Router>
          <App />
        </Router>
      </NotificationContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
