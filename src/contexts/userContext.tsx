import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import userService, { User } from 'services/userApi';

// Interfaces
interface UserState {
  user: User | null;
}

interface UserAction {
  type: 'ADD_USER';
  user: User;
}

interface UserContextType {
  userState: UserState;
  userDispatch: Dispatch<UserAction>;
  addUser: (newUser: User) => Promise<void>;
}

//initial state
const initialUserState = {
  user: null
};

const userReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, user: action.user };
    default:
      return state;
  } //swtich
}; //useReducer

export const UserContext = createContext<UserContextType>({
  userState: initialUserState,
  userDispatch: () => {},
  addUser: async () => {}
});

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  // add user
  const addUser = async (newUser: User): Promise<void> => {
    try {
      await userService.register(newUser);
      userDispatch({ type: 'ADD_USER', user: newUser });
    } catch (error) {
      // Handle error
    }
  };

  const contextValue: UserContextType = {
    userState,
    userDispatch,
    addUser
    //clearUser,
    //loginUser
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
}; //UserContextProvider

export const useUser = (): User | null => {
  const { userState } = useContext(UserContext);
  return userState.user;
};

export default UserContext;
