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
    ? 'bg-shamrock-900 translate-x-full'
    : 'bg-shamrock-50 -translate-x-2';

  SetTheme();

  return (
    <button
      className="w-12 h-6 rounded-full bg-shamrock-700 dark:bg-white flex items-center transition-colors duration-500 focus:outline-none shadow"
      onClick={handleButtonClick}
    >
      <div
        id="switch-toggle"
        className={`w-6 h-6 relative rounded-full transition duration-500 transform ${switchToggleClass} p-1 dark:text-shamrock-50 text-shamrock-900 border-[0.6px]`}
      >
        {isDark ? <SvgDarkIcon /> : <SvgLightIcon />}
      </div>
    </button>
  );
};

const SetTheme = () => {
  const { theme } = useTheme();

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
    SetBackgroundColor(theme);
  }, [theme]);
};

const SetBackgroundColor = (theme: string) => {
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
};

export default ButtonSwitch;
