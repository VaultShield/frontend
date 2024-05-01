import { useContext } from 'react';
import ThemeContext from 'contexts/themeContext';
import { Dispatch } from 'react';

interface ThemeAction {
  type: 'UPDATE_THEME';
}

export const useTheme = (): {
  theme: string;
  themeDispatch: Dispatch<ThemeAction>;
} => {
  const { themeState, themeDispatch } = useContext(ThemeContext);
  return { theme: themeState.theme, themeDispatch: themeDispatch };
};
