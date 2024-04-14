import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import './App.css';

import DashboardLayout from 'layouts/DashboardLayout';
import HomeLayout from 'layouts/HomeLayout';

import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';

import { Login } from 'components/login';
import Signup from 'components/Signup';
import { ThemeContext } from 'contexts/themeContext';
import { UserContext } from 'contexts/userContext';
import { useUser } from 'hooks/useUser';

const App = () => {
  const { updateTheme } = useContext(ThemeContext);
  const { logged } = useContext(UserContext);
  const { isLogged } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token'); //check token in localStorage

  useEffect(() => {
    console.log(isLogged);
    if (isLogged !== undefined) {
      setIsLoading(false);
    }
  }, [isLogged]);

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

  if (token) {
    logged();
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
      <Route path="/" element={<HomeLayout />}>
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
