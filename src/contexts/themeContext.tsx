import React, { createContext, useReducer, Dispatch } from 'react';

interface ThemeState {
  theme: string;
}

interface ThemeAction {
  type: 'UPDATE_THEME';
  theme: string;
}

interface ThemeContextType {
  themeState: ThemeState;
  themeDispatch: Dispatch<ThemeAction>;
  updateTheme: (payload: string) => Promise<void>;
}

//select  browser theme
const initialThemeState = {
  theme: ''
};

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  initialThemeState.theme = 'dark';
} else {
  initialThemeState.theme = 'white';
}

const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case 'UPDATE_THEME':
      return { ...state, theme: action.theme };
    default:
      return state;
  }
};

export const ThemeContext = createContext<ThemeContextType>({
  themeState: initialThemeState,
  themeDispatch: () => {},
  updateTheme: async () => {}
});

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    initialThemeState
  );

  const updateTheme = async (payload: string): Promise<void> => {
    try {
      themeDispatch({ type: 'UPDATE_THEME', theme: payload });
    } catch (err) {
      throw new Error('Error registering theme user');
    }
    return Promise.resolve();
  };

  const contextValue: ThemeContextType = {
    themeState,
    themeDispatch,
    updateTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
