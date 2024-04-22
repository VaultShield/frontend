import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'contexts/themeContext';
import { SvgDarkIcon } from 'components/svg/SvgDarkIcon';
import { SvgLightIcon } from 'components/svg/SvgLightIcon';

import { useTheme } from 'hooks/useTheme';
const ButtonSwitch = () => {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(theme === 'dark');
  const { updateTheme } = useContext(ThemeContext);

  const handleButtonClick = async () => {
    await updateTheme(theme === 'dark' ? '' : 'dark');
    switchButton();
  };

  const switchButton = () => {
    setIsDark(!isDark);
  };

  const switchToggleClass = isDark
    ? 'bg-shamrock-800 translate-x-full'
    : 'bg-shamrock-100 -translate-x-2';

    setTheme();
   

  return (
    <button
      className="w-12 h6 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
      onClick={handleButtonClick}
    >
      <div
        id="switch-toggle"
        className={`w-6 h-6 relative rounded-full transition duration-500 transform ${switchToggleClass} p-1 dark:text-yellow-100 text-yellow-900 border-[0.6px]`}
      >
        {isDark ? <SvgDarkIcon /> : <SvgLightIcon />}
      </div>
    </button>
  );
};

function setTheme(){
  const {theme } = useTheme();

  /**
   * Change color of SVG according to user preference
   */
  useEffect(() => {
    const svgSettings = document.querySelectorAll('.fill-current');
    const background = document.querySelector('body');
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
    setBackgroundColor(theme);
    
  }, [theme]);

 }

 function setBackgroundColor(theme: string){

    const background = document.querySelector('body');
    if (theme === 'dark') {
      background?.classList.add('dark');
      background?.classList.add('bg-bground-dark');
      background?.classList.remove('bg-bground-grey');
    
    } else {
      background?.classList.remove('dark');
      document.body.classList.remove('bg-bground-dark');
      document.body.classList.add('bg-bground-grey');
      
      }
 }



  

export default ButtonSwitch;

