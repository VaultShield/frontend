import { SvgDarkIcon } from 'components/svg/SvgDarkIcon';
import { SvgLightIcon } from 'components/svg/SvgLightIcon';
import { useTheme } from 'hooks/useTheme';

export default function ButtonSwitch() {
  const { theme, themeDispatch } = useTheme();

  const handleButtonClick = () => {
    themeDispatch({ type: 'UPDATE_THEME' });
  };

  return (
    <button
      className="w-12 h-6 rounded-full bg-shamrock-700 dark:bg-white flex items-center transition-colors duration-500 focus:outline-none shadow"
      onClick={handleButtonClick}
    >
      <div className="w-6 h-6 relative rounded-full transition duration-500 transform dark:bg-shamrock-900 dark:translate-x-full bg-shamrock-50 -translate-x-2 p-1 dark:text-shamrock-50 text-shamrock-900 border-[0.6px]">
        {theme === 'dark' ? <SvgDarkIcon /> : <SvgLightIcon />}
      </div>
    </button>
  );
}
