import { Anchor } from './Anchor';
import { IconVaultShield } from './svg/IconVaultShield';
import { CloseMenuIcon, OpenMenuIcon } from './svg/MenuIcon';
import { Link } from 'react-router-dom';
import { SvgGear } from './svg/SvgGear';
import ButtonSwitch from './ButtonSwitch';
import ButtonExit from './ButtonExit';
import { badgeMenuDashboard } from 'styles/tailwind.classes';
import { useUserStore } from 'store/userStore';


export function Menu() {
  const isLogged = useUserStore((state) => state.isLogged);
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

  const justify = isLogged ? 'md:justify-between' : 'md:justify-start';

  return (
    <nav className="w-full h-full max-h-[64px] flex justify-center items-start">
      <div
        className={`${justify} dark:bg-shamrock-600 bg-shamrock-500 h-full flex justify-center md:rounded-b-lg md:justify-center w-full max-w-[2400px] items-center relative z-20 px-2  md:px-4`}
      >
        <div className="w-[172px] flex justify-center sm:justify-center">
          <IconVaultShield />
        </div>
        {!isLogged && (
          <div className="absolute right-2 sm:right-8 top-0 bottom-0 flex justify-center items-center h-full">
            <ButtonSwitch />
          </div>
        )}
        {isLogged && (
          <div
            className={`${badgeMenuDashboard} hidden md:flex justify-between w-full md:w-[260px] pr-2 py-3`}
          >
            <div className="flex pl-1  my-2">
              <ButtonSwitch />
            </div>
            <Link
              className="flex justify-start items-center my-1 pl-4"
              to="/settings"
            >
              <SvgGear />
              <span className="ml-2 text-shamrock-950 dark:text-shamrock-100">
                Settings
              </span>
            </Link>

            <ButtonExit />
          </div>
        )}

        {isLogged && (
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
        )}
        <div
          id="menu"
          className="absolute top-12 py-2 bg-shamrock-200 dark:bg-shamrock-700  w-full z-10 flex flex-col justify-center items-center hidden md:hidden"
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
                <a className="hover:underline text-shamrock-100" href="/">
                  Home
                </a>
              </li>
            </ul>
          )}
          {isLogged && (
            <div
              className={`${badgeMenuDashboard} flex w-full md:w-[260px] justify-between px-6`}
            >
              <div className="flex  my-2">
                <ButtonSwitch />
              </div>
              <Link
                className="flex justify-start items-center my-1 pl-4"
                to="/settings"
              >
                <SvgGear />
                <span className="ml-2 text-shamrock-950 dark:text-shamrock-100">
                  Settings
                </span>
              </Link>

              <ButtonExit />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
