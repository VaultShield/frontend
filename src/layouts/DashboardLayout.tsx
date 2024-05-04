import { Outlet } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import { dashboardMainCard, badgeMenuDashboard } from 'styles/tailwind.classes';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import { Menu } from 'components/Menu';
import { NavLinkDashboard } from 'components/NavLinkDashboard';
import LogoVault from '../../public/Logo_ValutShield.png';
import LogoVaultIcon from '../../public/shield_lock.png';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {
  IconCredentials,
  IconNewPasswordGenerator
} from 'components/svg/IconsMenuDashboard';
import { useState } from 'react';

const DashboardLayout = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="flex degradado flex-col justify-start items-center h-full overflow-hidden">
      {/* <header className="w-full max-h-[64px]  flex justify-between  rounded-none md:rounded-b-xl">
        <Menu />
      </header> */}
      <div className={dashboardMainCard}>
        <div className="h-full flex  relative">
          <div className=" h-full xl:w-1/5  w-24 min-w-24 flex flex-col justify-between   items-center xl:p-5 max-xl:px-5 py-5">
            <div className="w-full">
              <div className=" h-28 flex justify-center items-center">
                <img
                  src={LogoVaultIcon}
                  alt="sda"
                  className="w-10 xl:hidden "
                />
                <img src={LogoVault} alt="sda" className="w-40 max-xl:hidden" />
              </div>
              <div className="w-full space-y-3  ">
                <NavLinkDashboard nameLink="Passwords" to="/">
                  <GridViewRoundedIcon />
                </NavLinkDashboard>

                <NavLinkDashboard nameLink="Pass Generator" to="/generator">
                  <PasswordRoundedIcon />
                </NavLinkDashboard>
              </div>
            </div>
            <div
              className={`w-full ${showOptions ? 'bg-white bg-opacity-25' : ''}  rounded-3xl flex-col flex justify-end text-lg font-semibold items-start`}
            >
              {showOptions ? (
                <>
                  <div className="flex items-center h-14 opacity-50 hover:opacity-100 cursor-pointer w-full ">
                    <div className="  aspect-square h-full flex items-center justify-center rounded-full ">
                      <EditRoundedIcon />
                       
                    </div>
                    <div className="max-xl:hidden">Edit Profile</div>
                  </div>
                  <div className="flex items-center h-14 opacity-50 hover:opacity-100 cursor-pointer w-full hover:text-red-400">
                    <div className="  aspect-square h-full flex items-center justify-center rounded-full ">
                      <LogoutRoundedIcon />
                    </div>
                    <div className="max-xl:hidden">Log Out</div>
                  </div>
                </>
              ) : null}

              <div onClick={()=>setShowOptions(!showOptions)} className="bg-white w-full bg-opacity-25 h-14 flex items-center p-1 rounded-full space-x-2 text-lg font-semibold cursor-pointer max-xl:flex  max-xl:justify-center ">
                <div className="xl:bg-white xl:bg-opacity-25  aspect-square h-full flex items-center justify-center rounded-full ">
                  <PersonRoundedIcon />
                </div>
                <div className="max-xl:hidden">Passwords</div>
              </div>
            </div>
          </div>

          <div className="xl:w-4/5 w-full flex overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
