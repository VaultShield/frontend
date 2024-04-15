import React, { createContext, useReducer, Dispatch } from 'react';
import userService, { User } from 'services/userApi';

// Interfaces
interface UserState {
  user: User | null;
  isLogged: boolean;
}

interface UserAction {
  type: 'ADD_USER' | 'LOGGED';
  user: User;
}

interface UserContextType {
  userState: UserState;
  userDispatch: Dispatch<UserAction>;
  addUser: (newUser: User) => Promise<void>;
  loginUser: (credentials: User) => Promise<void>;
  logged: () => void;
}

//initial state
const initialUserState = {
  user: null,
  isLogged: false
};

const userReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, user: action.user };
    case 'LOGGED':
      return { ...state, isLogged: true };
    default:
      return state;
  }
};

export const UserContext = createContext<UserContextType>({
  userState: initialUserState,
  userDispatch: () => {},
  addUser: async () => {},
  loginUser: async () => {},
  logged: () => {}
});

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  // add user
  const addUser = async (newUser: User): Promise<void> => {
    const response = await userService.register(newUser);

    const statusCode = response.status;
    if (statusCode === 201) {
      //userDispatch({ type: 'ADD_USER', user: newUser });// use when call to user api/user
      //const token = response.data.token;// if the backend send api , use this
      //localStorage.setItem('token', token);
      window.history.replaceState({}, document.title, '/login');
      window.location.reload();
    } else {
      throw new Error(`Registration error. Status Code: ${statusCode}`);
    }

    return Promise.resolve();
  };

  const loginUser = async (credentials: User): Promise<void> => {
    const response = await userService.login(credentials);
    const statusCode = response.status;
    if (statusCode === 200) {
      const token = response.data.token;
      localStorage.setItem('token', token);
    } else {
      throw new Error(`Login error. Status code: ${statusCode}`);
    }
  };

  const logged = () => {
    userDispatch({ type: 'LOGGED' });
  };

  const contextValue: UserContextType = {
    userState,
    userDispatch,
    addUser,
    loginUser,
    logged
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
}; //UserContextProvider

export default UserContext;
