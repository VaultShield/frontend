import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from 'components/Signup';
import HomeLayout from 'layouts/HomeLayout';
import { useEffect } from 'react';
import { Login } from 'components/login';
import { Home } from 'pages/Home';

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
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/signup" element={<HomeLayout />}>
          <Route index element={<Signup />} />
        </Route>
        <Route path="/login" element={<HomeLayout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
