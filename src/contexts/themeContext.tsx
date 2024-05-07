import React, { createContext, useReducer, Dispatch } from 'react';

interface ThemeState {
  theme: string;
}

interface ThemeAction {
  type: 'UPDATE_THEME';
}

interface ThemeContextType {
  themeState: ThemeState;
  themeDispatch: Dispatch<ThemeAction>;
}

const initialThemeState = {
  theme: ''
};

const valueThemeStorage = window.localStorage.getItem('theme');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  if (valueThemeStorage === null) {
    initialThemeState.theme = 'dark';
    document.body.classList.add('dark');
  }
  if (valueThemeStorage === 'dark') {
    initialThemeState.theme = 'dark';
    document.body.classList.add('dark');
  }
  if (valueThemeStorage === '') initialThemeState.theme = '';
}
// modo claro
else {
  if (valueThemeStorage === null) initialThemeState.theme = '';
  if (valueThemeStorage === '') initialThemeState.theme = '';
  if (valueThemeStorage === 'dark') initialThemeState.theme = 'dark';
}

const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case 'UPDATE_THEME': {
      if (state.theme === 'dark') {
        document.body.classList.remove('dark');
        window.localStorage.setItem('theme', '');
        return { theme: '' };
      }
      document.body.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
      return { theme: 'dark' };
    }
    default:
      return initialThemeState;
  }
};

export const ThemeContext = createContext<ThemeContextType>({
  themeState: initialThemeState,
  themeDispatch: () => Promise<void>
});

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    initialThemeState
  );

  const contextValue: ThemeContextType = {
    themeState,
    themeDispatch
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
