import { Link } from 'react-router-dom';
import { Anchor } from './Anchor';
import { IconVaultShield } from './svg/IconVaultShield';
import { CloseMenuIcon, OpenMenuIcon } from './svg/MenuIcon';
import { Link } from 'react-router-dom';
import { SvgExit } from './svg/SvgExit';
import { SvgGear } from './svg/SvgGear';
import ButtonSwitch from './ButtonSwitch';
import { useUser } from 'hooks/useUser';
import { badgeMenuDashboard } from 'styles/tailwind.classes';
import { useContext, useEffect } from 'react';
import { useTheme } from 'hooks/useTheme';
import ThemeContext from 'contexts/themeContext';

export function Menu() {
  const { isLogged } = useUser();
  const menuOpen = () => {
    const menu = document.getElementById('menu');
    const openMenu = document.querySelector('.open-menu');
    const closeMenu = document.querySelector('.close-menu');
    closeMenu?.classList.remove('hidden');
    openMenu?.classList.add('hidden');

    menu?.classList.remove('hidden');
  };
  const menuClose = () => {
    const menu = document.getElementById('menu');
    const openMenu = document.querySelector('.open-menu');
    const closeMenu = document.querySelector('.close-menu');
    menu?.classList.add('hidden');
    openMenu?.classList.remove('hidden');
    closeMenu?.classList.add('hidden');
  };
  const { theme } = useTheme();
  const { updateTheme } = useContext(ThemeContext);
  useEffect(() => {
    /**
     * Change color of SVG according to user preference
     */

    const svgSettings = document.querySelectorAll('.fill-current');
    //update svgs
    svgSettings.forEach(function (element) {
      if (theme === 'dark') {
        element?.classList.add('text-white');
        element?.classList.remove('text-black');
      } else {
        element?.classList.add('text-black');
        element?.classList.remove('text-white');
      }
    });
    //update body
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.style.backgroundColor = '#18181b';
    } else {
      document.body.style.backgroundColor = '#FFFFFF';
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const changeTheme = async () => {
    await updateTheme(theme === 'dark' ? '' : 'dark');
  };

  const justify = isLogged ? 'md:justify-between' : 'md:justify-start';

  return (
    <nav className="w-full flex justify-center items-start">
      <div
        className={`${justify} dark:bg-cinder-750 bg-white h-16 flex justify-center md:rounded-b-xl md:justify-center w-full max-w-[2400px] items-center relative z-20 px-2 md:px-4`}
      >
        <div className="w-[172px] flex justify-center sm:justify-center">
          <IconVaultShield />
        </div>
        {/* 
      {!isLogged && (
        <ul className="md:flex gap-4 w-[172px] hidden  md:visible  justify-between">
          <li className="flex  w-full items-center ">
            <Anchor direction="/login" name="Login" />
          </li>

          <li className="w-full flex items-center">
            <Anchor direction="/signup" name="Signup" />
          </li>
        </ul>
      )} */}
        {isLogged && (
          <div
            className={`${badgeMenuDashboard} hidden md:flex w-full md:w-[260px]`}
          >
            <div className="flex pl-6  my-2">
              <ButtonSwitch handleClick={changeTheme} />
            </div>
            <Link
              className="flex justify-start items-center my-1 pl-4"
              to="/settings"
            >
              <SvgGear />
              <span className="ml-2 dark:text-white text-cinder-900">
                Settings
              </span>
            </Link>

            <Link
              className="flex justify-start items-center mt-1 pl-4 mb-1"
              to="/logout"
            >
              <SvgExit />
              <span className="ml-2 dark:text-white text-cinder-900">Exit</span>
            </Link>
          </div>
        )}
        <div className="absolute right-2 md:hidden pr-3 md:pr-0 flex flex-col items-end">
          <button
            onClick={() => menuOpen()}
            className="open-menu flex items-center"
          >
            <OpenMenuIcon />
          </button>
          <button
            onClick={() => menuClose()}
            className="close-menu hidden items-center"
          >
            <CloseMenuIcon />
          </button>
        </div>
        <div
          id="menu"
          className="absolute top-14 bg-cinder-100 dark:bg-cinder-750 bg-opacity-90 w-full z-10 flex flex-col justify-center items-center hidden md:hidden"
        >
          {!isLogged && (
            <ul className="[&>li]:py-3 [&>li]:w-full w-full pt-3 pb-2">
              <li className="w-full overflow-hidden flex items-center px-4">
                <Anchor direction="/login" name="Login" />
              </li>

              <li className="w-full overflow-hidden flex items-center px-4">
                <Anchor direction="/signup" name="Signup" />
              </li>
              <li>
                <a className="hover:underline text-cinder-100" href="/">
                  Home
                </a>
              </li>
            </ul>
          )}
          {isLogged && (
            <div
              className={`${badgeMenuDashboard} flex w-full md:w-[260px] justify-between px-6`}
            >
              <div className="flex pl-6  my-2">
                <ButtonSwitch handleClick={changeTheme} />
              </div>
              <Link
                className="flex justify-start items-center my-1 pl-4"
                to="/settings"
              >
                <SvgGear />
                <span className="ml-2 dark:text-white text-cinder-900">
                  Settings
                </span>
              </Link>

              <Link
                className="flex justify-start items-center mt-1 pl-4 mb-1"
                to="/logout"
              >
                <SvgExit />
                <span className="ml-2 dark:text-white text-cinder-900">
                  Exit
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
