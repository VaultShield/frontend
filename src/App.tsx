import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
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
import { useUserStore } from 'store/userStore';
//hooks

const App = () => {
  const isLogged = useUserStore((state) => state.isLogged);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token');
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
        {/* lo mas probable borrar estas dos lineas porque no seran necesarias */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
    );
  }

  return (
    <div className="bg-bground-white dark:bg-bground-dark h-screen">
      <Notification />

      <Routes>
        {routes}
        <Route path="*" element={<Navigate to={lastVisitedPage} replace />} />
      </Routes>
    </div>
  );
};

export default App;
