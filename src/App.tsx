import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
//layouts
import DashboardLayout from 'layouts/DashboardLayout';
import HomeLayout from 'layouts/HomeLayout';
//pages
import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import Settings from 'pages/Settings';
//components
import Generator from 'components/Generator';
import Notification from 'components/Notification';
//contexts
import { useUserStore } from 'store/userStore';
//hooks
import { GENERATOR, HOME, SETTINGS } from 'lib/routes';
//import ThemeContext from 'contexts/themeContext';

import { Toaster } from 'sonner';

const App = () => {
  const isLogged = useUserStore((state) => state.isLogged);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const lastVisitedPage = localStorage.getItem('lastVisitedPage') ?? '/';

  useEffect(() => {
    if (isLogged !== undefined) {
      setIsLoading(false);
    }
    if (isLogged) {
      if (lastVisitedPage === null || lastVisitedPage === '') navigate('/');
      if (lastVisitedPage === '/generator') navigate('/generator');
    }
  }, [isLogged, lastVisitedPage, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let routes;
  if (isLogged) {
    routes = null;
    routes = (
      <Route path={HOME} element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path={GENERATOR} element={<Generator />} />
        <Route path={SETTINGS} element={<Settings />} />
      </Route>
    );
  } else {
    routes = null;
    routes = (
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        {/* lo mas probable borrar estas dos lineas porque no seran necesarias */}
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
      </Route>
    );
  }

  return (
    <div className="bg-bground-white dark:bg-bground-dark h-screen">
      <Notification />
      <Toaster richColors />
      <Routes>
        {routes}
        <Route path="*" element={<Navigate to={lastVisitedPage} replace />} />
      </Routes>
    </div>
  );
};

export default App;
