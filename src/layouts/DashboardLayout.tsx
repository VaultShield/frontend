import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
