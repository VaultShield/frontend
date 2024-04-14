import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import './App.css';

import AuthLayout from 'layouts/AuthLayout';
import DashboardLayout from 'layouts/DashboardLayout';

import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import { Login } from 'components/login';
import Signup from 'components/Signup';
import { ThemeContext } from 'contexts/themeContext';

const App = () => {
  const { updateTheme } = useContext(ThemeContext);
  //temporary use, for development purposes only
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogged, _setIsLogged] = useState(false);

  /**
   *Check the user's color theme preferences.
   */
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const asignTheme = async () => {
      if (prefersDarkMode) {
        document.body.classList.add('dark');
        document.body.style.backgroundColor = '#18181b';
        await updateTheme('dark');
      } else {
        document.body.classList.remove('dark');
        document.body.style.backgroundColor = '#FFFFFF';
        await updateTheme('');
      }
    };

    asignTheme();
  }, []);

  let routes;
  if (isLogged) {
    routes = null;
    routes = (
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    );
  } else {
    routes = null;
    routes = (
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
    );
  }

  return (
    <>
      <Routes>{routes}</Routes>
    </>
  );
};

export default App;
