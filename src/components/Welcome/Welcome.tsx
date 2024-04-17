import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'hooks/useTheme';
import { SvgGear } from 'components/svg/SvgGear';
import { SvgExit } from 'components/svg/SvgExit';
import { ThemeContext } from 'contexts/themeContext';
import ButtonSwitch from 'components/ButtonSwitch';
import Table from 'components/Table';
import { dashboardMainCard, badgeMenuDashboard } from 'styles/tailwind.classes';
import { IconVaultShield } from 'components/svg/IconVaultShield';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CardPassword } from 'components/CardPassword';

const Welcome = () => {
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
  return (
    <div className={dashboardMainCard}>
      <div className="grid sm:grid-cols-5 h-full grid-cols-1 ">
        <div className="sm:col-span-1 h-full sm:flex flex-col justify-around items-center px-2  hidden   ">
          {/*  <div
            className={`${badgeMenuDashboard} flex justify-center w-full`}
          ></div> */}
          <div
            className={`${badgeMenuDashboard} h-full w-full flex flex-col items-center`}
          >
            <div className="flex items-center justify-center py-8">
              <IconVaultShield />
            </div>

            <div className="w-full dark:bg-cinder-800 dark:bg-opacity-55 bg-cinder-700 bg-opacity-25 py-2 border-r-cinder-700 border-r-2">
              My acounts
            </div>
          </div>
          <div className={`${badgeMenuDashboard} w-full`}>
            <div className="flex pl-6  my-2">
              <ButtonSwitch handleClick={changeTheme} />
            </div>
            <Link
              className="flex justify-start items-center my-1 pl-4"
              to="/settings"
            >
              <SvgGear />
              <span className="ml-2">Settings</span>
            </Link>

            <Link
              className="flex justify-start items-center mt-1 pl-4 mb-1"
              to="/logout"
            >
              <SvgExit />
              <span className="ml-2">Exit</span>
            </Link>
          </div>
        </div>

        <div className="col-span-4 flex flex-col pt-14">
          <header className="w-full text-start bg-opacity-55 py-2 text-xl">
            <div className="pl-20">My acounts</div>
          </header>
          <div
            className={`${badgeMenuDashboard} flex flex-col items-start h-full mr-2 p-0`}
          >
            <Table />
            {/* 
            <CardPassword /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
