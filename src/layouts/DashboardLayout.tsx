import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { NavLinkDashboard } from 'components/NavLinkDashboard';
import { useCredentials } from 'hooks/useCredentials';
import { GENERATOR, HOME, SETTINGS } from 'lib/routes';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useUserStore } from 'store/userStore';
import LogoVault from '../../public/Logo_ValutShield.png';
import LogoVaultIcon from '../../public/shield_lock.png';
import FormCredential from 'components/Dashboard/Credentials/FormCredential';
import { useButtonExit } from 'hooks/useButtonExit';

const DashboardLayout = () => {
  const [showOptions, setShowOptions] = useState(false);
  const username = useUserStore((state) => state.user.username);
  const { handleButtonExitClick } = useButtonExit();
  const {
    errors,
    handleSubmitAddCredential,
    handleChange,
    handleOpenForm,
    openForm,
    credential
  } = useCredentials();
  return (
    <div className="flex degradado flex-col justify-start items-center h-full overflow-hidden text-white">
      <div className="w-full h-full flex-col   rounded-md my-0 mx-0 shadow-xl">
        <div className="h-full flex  relative">
          {openForm && (
            <FormCredential
              formTitle="New credential"
              credential={credential}
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmitAddCredential}
              handleClose={handleOpenForm}
              buttonText="Add credential"
            />
          )}
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
              {showOptions && (
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
                    onClick={handleButtonExitClick}
                  >
                    <div className="  aspect-square h-full flex items-center justify-center rounded-full ">
                      <LogoutRoundedIcon />
                    </div>
                    <div className="max-xl:hidden">Log Out</div>
                  </button>
                </aside>
              )}
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
              <NavLinkDashboard nameLink="Home" to={HOME}>
                <GridViewRoundedIcon />
              </NavLinkDashboard>

              <NavLinkDashboard nameLink="Generador" to={GENERATOR}>
                <PasswordRoundedIcon />
              </NavLinkDashboard>
              <div
                onClick={() => {
                  handleOpenForm();
                }}
                className="bg-white rounded-full w-12 aspect-square text-primary flex items-center justify-center hover:bg-[#ffffff] cursor-pointer"
              >
                <AddRoundedIcon />
              </div>
              <NavLinkDashboard nameLink="Settings" to={SETTINGS}>
                <PersonRoundedIcon />
              </NavLinkDashboard>

              <div className="aspect-square h-12 flex items-center justify-center  cursor-pointer">
                <button
                  className="flex items-center h-14 cursor-pointer w-full sm:hover:bg-white sm:hover:bg-opacity-25 hover:text-red-600"
                  onClick={handleButtonExitClick}
                >
                  <div className="  aspect-square h-full flex items-center justify-center rounded-full ">
                    <LogoutRoundedIcon />
                  </div>
                  <div className="max-xl:hidden">Log Out</div>
                </button>
              </div>
            </div>
          </div>

          <div className="xl:w-4/5 w-full flex overflow-y-auto max-sm:mb-20">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
