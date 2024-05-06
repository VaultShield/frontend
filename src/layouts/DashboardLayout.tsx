import EditRoundedIcon from '@mui/icons-material/EditRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ButtonExit from 'components/ButtonExit';
import { NavLinkDashboard } from 'components/NavLinkDashboard';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useUserStore } from 'store/userStore';
import { dashboardMainCard } from 'styles/tailwind.classes';
import LogoVault from '../../public/Logo_ValutShield.png';
import LogoVaultIcon from '../../public/shield_lock.png';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { FormCreateCredential } from 'components/CreateCredential/FormCreateCredential';

const DashboardLayout = () => {
  const [showOptions, setShowOptions] = useState(false);
  const username = useUserStore((state) => state.user.username);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [newCredential, setNewCredential] = useState(false);

  return (
    <div className="flex degradado flex-col justify-start items-center h-full overflow-hidden text-white">
      {/* <header className="w-full max-h-[64px]  flex justify-between  rounded-none md:rounded-b-xl">
        <Menu />
      </header> */}
      <div className={dashboardMainCard}>
        <div className="h-full flex  relative">
          {/* SideBar */}
          <div className="max-sm:hidden h-full xl:w-1/5  w-24 min-w-24 flex flex-col justify-between   items-center xl:p-5 max-xl:px-5 py-5">
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
                  <button
                  className="flex items-center h-14 cursor-pointer w-full sm:hover:bg-white sm:hover:bg-opacity-25 hover:text-red-600"
                  onClick={() => setShowConfirmation(true)}
                >
                  <div className="  aspect-square h-full flex items-center justify-center rounded-full ">
                    <LogoutRoundedIcon />
                  </div>
                  <div className="max-xl:hidden">Log Out</div>
                </button>
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
                <div className=" absolute right-3 transition-colors duration-150 w-10 h-10 flex items-center justify-center xl:group-hover:bg-white rounded-full xl:group-hover:bg-opacity-25">
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

          {/* Bottombar */}
          <div className="sm:hidden absolute  w-screen bottom-0 right-0  flex items-end">
            <div className="w-full degradado  flex justify-between items-center py-3 max-[400px]:px-3 px-6 ">
              <NavLinkDashboard nameLink="Passwords" to="/">
                <GridViewRoundedIcon />
              </NavLinkDashboard>

              <NavLinkDashboard nameLink="Passwords" to="/generator">
                <PasswordRoundedIcon />
              </NavLinkDashboard>
              <div
                onClick={() => setNewCredential(true)}
                className="bg-white rounded-full w-12 aspect-square text-primary flex items-center justify-center hover:bg-[#ffffff] cursor-pointer"
              >
                <AddRoundedIcon />
              </div>
              <NavLinkDashboard nameLink="Passwords" to="/settings">
                <PersonRoundedIcon />
              </NavLinkDashboard>
              <div className="aspect-square h-12 flex items-center justify-center  cursor-pointer">
                <button
                  className="flex items-center h-14 cursor-pointer w-full sm:hover:bg-white sm:hover:bg-opacity-25 hover:text-red-600"
                  onClick={() => setShowConfirmation(true)}
                >
                  <div className="  aspect-square h-full flex items-center justify-center rounded-full ">
                    <LogoutRoundedIcon />
                  </div>
                  <div className="max-xl:hidden">Log Out</div>
                </button>
              </div>
            </div>
          </div>
          <FormCreateCredential
            isOpen={newCredential}
            onClose={() => setNewCredential(false)}
          />
          <div className="xl:w-4/5 w-full flex overflow-y-auto">
            <Outlet />
          </div>
          {showConfirmation && (
        <div className="absolute h-screen w-screen  flex items-center justify-center z-20 top-0 right-0">
          <div className="bg-white rounded-xl z-50 text-black w-96 py-6 space-y-3 mx-3">
            <div className="text-xl font-semibold">Are your sure?</div>
            <div className="grid min-[500px]:grid-cols-2  gap-3 font-medium w-full px-6 ">
              <ButtonExit/>
              <button
                onClick={() => setShowConfirmation(false)}
                className="h-12 bg-red-600 text-white  rounded-full border-2 border-red-600 w-full "
              >
                Cancel
              </button>
            </div>
          </div>
          <div
            onClick={() => setShowConfirmation(false)}
            className="absolute h-screen w-screen bg-[#000000] opacity-90 "
          />
        </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
