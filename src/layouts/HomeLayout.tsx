import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div className="flex flex-col justify-between h-full text-white">
      <Outlet />
    </div>
  );
};

export default HomeLayout;
