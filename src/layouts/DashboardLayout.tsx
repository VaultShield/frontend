import { Outlet } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import { dashboardMainCard } from 'styles/tailwind.classes';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import { NavLinkDashboard } from 'components/NavLinkDashboard';
import LogoVault from '../../public/Logo_ValutShield.png';
import LogoVaultIcon from '../../public/shield_lock.png';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { useState } from 'react';
import { useUserStore } from 'store/userStore';
import { Link } from 'react-router-dom';
const DashboardLayout = () => {
  const [showOptions, setShowOptions] = useState(false);
  const username = useUserStore((state) => state.user.username);
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
              className={`w-full ${showOptions ? 'bg-white bg-opacity-25' : ''}  rounded-[1.73rem] flex-col flex justify-end text-lg font-semibold items-start overflow-hidden`}
            >
              {showOptions ? (
                <aside className="w-full">
                  <Link
                    onClick={() => setShowOptions(!showOptions)}
                    className="flex items-center h-14 cursor-pointer w-full hover:bg-white hover:bg-opacity-25"
                    to="/settings"
                  >
                    <div className="  aspect-square h-full flex items-center justify-center rounded-full ">
                      <EditRoundedIcon />
                    </div>
                    <div className="max-xl:hidden">Edit Profile</div>
                  </Link>
                  <div
                    onClick={() => setShowOptions(!showOptions)}
                    className="flex items-center h-14  cursor-pointer w-full hover:text-red-500 hover:bg-white hover:bg-opacity-25"
                  >
                    <div className="  aspect-square h-full flex items-center justify-center rounded-full ">
                      <LogoutRoundedIcon />
                    </div>
                    <div className="max-xl:hidden">Log Out</div>
                  </div>
                </aside>
              ) : null}
              <div
                onClick={() => setShowOptions(!showOptions)}
                className={`w-full bg-opacity-25 h-14 flex items-center p-1 ${showOptions ? 'rounded-b-2xl ' : 'rounded-full bg-white '}  space-x-2 text-lg font-semibold cursor-pointer max-xl:flex  max-xl:justify-center group relative`}
              >
                <div className="xl:bg-white xl:bg-opacity-25  aspect-square h-full flex items-center justify-center rounded-full ">
                  <PersonRoundedIcon />
                </div>
                <div className="max-xl:hidden">{username}</div>
                <div className=" absolute right-3 transition-colors duration-150 w-10 h-10 flex items-center justify-center group-hover:bg-white rounded-full group-hover:bg-opacity-25">
                  <div className=" flex justify-end max-xl:hidden ">
                    {showOptions && (
                      <KeyboardArrowUpRoundedIcon className="scale-125" />
                    )}
                    {!showOptions && (
                      <KeyboardArrowDownRoundedIcon className="scale-125 " />
                    )}
                  </div>
                </div>
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
