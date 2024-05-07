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
import Notification from 'components/Notification';
import Generator from 'pages/Generator';
//contexts
import { useUserStore } from 'store/userStore';
//hooks
import { GENERATOR, HOME, SETTINGS } from 'lib/routes';
//import ThemeContext from 'contexts/themeContext';

import { useStorage } from 'hooks/useStorage';
import { Toaster } from 'sonner';

const App = () => {
  const isLogged = useUserStore((state) => state.isLogged);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { recoverSesionStorage } = useStorage();

  const lastVisitedPage = localStorage.getItem('lastVisitedPage') ?? '/';
  useEffect(() => {
    if (!isLogged && !recoverSesionStorage()) {
      navigate('/');
    }
  }, []);
  useEffect(() => {
    setIsLoading(false);
    const currentPath = window.location.pathname;
    localStorage.setItem('lastVisitedPage', currentPath);
  }, [navigate]);

  useEffect(() => {
    if (!isLoading && isLogged) {
      const lastVisitedPage = localStorage.getItem('lastVisitedPage');
      if (lastVisitedPage) navigate(lastVisitedPage);
    }
  }, [isLogged, isLoading]);

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
