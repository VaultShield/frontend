import { Outlet } from 'react-router-dom';
import { dashboardMainCard, badgeMenuDashboard } from 'styles/tailwind.classes';

import { Menu } from 'components/Menu';
import { NavLinkDashboard } from 'components/NavLinkDashboard';
import {
  IconCredentials,
  IconNewPasswordGenerator
} from 'components/svg/IconsMenuDashboard';

const DashboardLayout = () => {
  return (
    <div className="flex bg-bground-white dark:bg-bground-dark flex-col justify-start items-center h-full overflow-hidden">
      <header className="w-full h-24  flex justify-between  rounded-none md:rounded-b-xl">
        <Menu />
      </header>
      <div className={dashboardMainCard}>
        <div className="grid sm:grid-cols-5 h-full grid-cols-1 relative">
          {/* Side panel */}
          <div className="sm:col-span-1 h-full sm:flex flex-col justify-around items-center px-2  hidden   ">
            {/*  <div
            className={`${badgeMenuDashboard} flex justify-center w-full`}
          ></div> */}
            <div
              className={`${badgeMenuDashboard} bg-bground-white dark:bg-bground-dark stroke-shamrock-900 fill-black  dark:stroke-shamrock-50 h-full w-full flex sm:flex-col items-center absolute bottom-0 sm:relative`}
            >
              {/*  <div className="flex items-center justify-center py-8">
                <IconVaultShield />
              </div>
 */}
              <NavLinkDashboard nameLink="My Credentials" to="/">
                <IconCredentials />
              </NavLinkDashboard>
              <NavLinkDashboard nameLink="Password generator" to="/generator">
                <IconNewPasswordGenerator />
              </NavLinkDashboard>
            </div>
          </div>
          {/* panel principal  */}
          <div className="col-span-4 flex overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
