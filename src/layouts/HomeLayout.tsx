import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div className="flex justify-center  h-full">
      <Outlet />
    </div>
  );
};

export default HomeLayout;