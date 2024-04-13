import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'hooks/useTheme';
import { SvgGear } from 'assets/SvgGear';
import { SvgExit } from 'assets/SvgExit';
import { ThemeContext } from 'contexts/themeContext';
import ButtonSwitch from 'components/ButtonSwitch';
import { dashboardMainCard } from 'styles/tailwind.classes';

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
    console.info(theme);
  }, [theme]);

  const changeTheme = async () => {
    await updateTheme(theme === 'dark' ? '' : 'dark');
  };
  return (
    <div className={dashboardMainCard}>
      <div className="grid sm:grid-cols-5 h-full grid-cols-1">
        <div className="sm:col-span-1 h-full sm:flex flex-col justify-around items-center px-2  hidden   ">
          <div className=" border my-4 rounded-md  dark:bg-zinc-700 bg-cinder-100 border-cinder-400 dark:border-zinc-800 w-full ">
            Vault Shield
          </div>
          <div className=" border rounded-md bg-cinder-100 border-cinder-400 dark:bg-zinc-700 dark:border-zinc-800 w-full h-full "></div>
          <div className=" border my-4 rounded-md bg-cinder-100 border-cinder-400 dark:bg-zinc-700 dark:border-zinc-800 w-full  ">
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

        <div className="col-span-4 flex flex-col">
          <div className="flex justify-end mr-4 my-4">
            <ButtonSwitch handleClick={changeTheme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
