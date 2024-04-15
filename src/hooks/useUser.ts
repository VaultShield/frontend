import { useContext } from 'react';
import { UserContext } from 'contexts/userContext';
import { User } from 'services/userApi';

export const useUser = (): User | null => {
  const { userState } = useContext(UserContext);
  return userState.user;
};
