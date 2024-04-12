import { Route, Routes } from 'react-router-dom';
import './App.css';

import AuthLayout from 'layouts/AuthLayout';
import { useEffect } from 'react';
import Home from 'pages/Home';
import { Login } from 'components/login';
import Signup from 'components/Signup';

const App = () => {
  /**
   *Check the user's color theme preferences.
   */
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (prefersDarkMode) {
      document.body.classList.add('dark');
      document.body.style.backgroundColor = '#18181b';
    } else {
      document.body.classList.remove('dark');
      document.body.style.backgroundColor = '#FFFFFF';
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
