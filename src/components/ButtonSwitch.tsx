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
    ? 'bg-cinder-700 translate-x-full'
    : 'bg-yellow-300 -translate-x-2';

     /**
     * Change color of SVG according to user preference
     */
     useEffect(() => {
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

   
 

  return (
    <button
      className="w-12 h6 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
      onClick={handleButtonClick}
    >
      <div
        id="switch-toggle"
        className={`w-6 h-6 relative rounded-full transition duration-500 transform ${switchToggleClass} p-1 dark:text-yellow-900 text-yellow-100 border-[0.6px]`}
      >
        {isDark ? <SvgDarkIcon /> : <SvgLightIcon />}
      </div>
    </button>
  );
};

export default ButtonSwitch;
function switchButton() {
  throw new Error('Function not implemented.');
}

