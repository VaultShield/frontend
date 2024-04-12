import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'hooks/useTheme';
import { ThemeContext } from 'contexts/themeContext';
import { SvgGear } from './svg/SvgGear';
import { SvgExit } from './svg/SvgExit';

const Welcome = () => {
  const { theme } = useTheme();
  const { updateTheme } = useContext(ThemeContext);

  useEffect(() => {
    /**
     * Change color of SVG according to user preference
     */

    const svgSettings = document.querySelectorAll('.fill-current');

    svgSettings.forEach(function (element) {
      if (theme === 'dark') {
        element?.classList.add('text-white');
        element?.classList.remove('text-black');

        document.body.style.backgroundColor = '#FFFFFF';
      } else {
        element?.classList.add('text-black');
        element?.classList.remove('text-white');

        document.body.style.backgroundColor = '#18181b';
        document.body.classList.remove('dark');
      }
    });
  }, [theme]);

  const changeTheme = async () => {
    await updateTheme(theme === 'dark' ? '' : 'dark');
  };

  return (
    <div
      className="w-full h-[90%] border rounded-md my-4 mx-6 shadow-xl dark:bg-zinc-900 
    dark:border-zinc-800 
    dark:text-white "
    >
      <div className="grid sm:grid-cols-5 h-full grid-cols-1">
        <div className="sm:col-span-1 h-full sm:flex flex-col justify-around items-center px-2  hidden   ">
          <div className=" border my-4 rounded-md bg-zinc-700 dark:border-zinc-800 w-full ">
            Vault Shield
          </div>
          <div className=" border rounded-md bg-zinc-700 dark:border-zinc-800 w-full h-full "></div>
          <div className=" border my-4 rounded-md bg-zinc-700 dark:border-zinc-800 w-full  ">
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

        <div className="col-span-4">
          <button onClick={changeTheme}>change</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
