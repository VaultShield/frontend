import { Route, Routes, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import './App.css';
//layouts
import DashboardLayout from 'layouts/DashboardLayout';
import HomeLayout from 'layouts/HomeLayout';
//pages
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
//components
import { Login } from 'components/login';
import Signup from 'components/Signup';
import Notification from 'components/Notification';
import Generator from 'components/Generator';
//contexts
//import { ThemeContext } from 'contexts/themeContext';
import { UserContext } from 'contexts/userContext';
//hooks
import { useUser } from 'hooks/useUser';
//import ThemeContext from 'contexts/themeContext';

const App = () => {
  //const { updateTheme } = useContext(ThemeContext);
  const { logged } = useContext(UserContext);
  const navigate = useNavigate();
  const { isLogged } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token'); //check token in localStorage

  useEffect(() => {
    if (isLogged !== undefined) {
      setIsLoading(false);
    }
    if (isLogged) {
      navigate('/');
    }
  }, [isLogged]);

  useEffect(() => {
    if (token) {
      logged();
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let routes;
  if (isLogged) {
    routes = null;
    routes = (
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/generator" element={<Generator />} />
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
      <Notification />

      <Routes>{routes}</Routes>
    </>
  );
};

export default App;
