import { Outlet } from 'react-router-dom';

import { Menu } from 'components/Menu';
import { GithubIcon } from 'components/svg/GithubIcon';

const HomeLayout = () => {
  return (
    <div className="flex flex-col justify-between h-screen text-white">
      
      <Outlet />
      
    </div>
  );
};

export default HomeLayout;
