import { useUserStore } from 'store/userStore';
import { User } from 'types/apiTypes';

export const useStorage = () => {
  const setUser = useUserStore((state) => state.setUser);
  const setTokenStore = useUserStore((state) => state.setToken);
  const setIsLogged = useUserStore((state) => state.setIsLogged);
  const setRefreshToken = useUserStore((state) => state.setRefreshToken);
  const saveSesionStorage = (user: User, refreshToken: string) => {
    sessionStorage.removeItem('sesionId');
    const sesionID = `${user.id};${user.username};${user.email};${refreshToken}`;
    sessionStorage.setItem('sesionId', sesionID);
  };
  const saveGlobalStateUser = (
    token: string,
    user: User,
    refreshToken: string
  ) => {
    setTokenStore(token);
    setUser(user);
    setRefreshToken(refreshToken);
    setIsLogged(true);
    saveSesionStorage(user, refreshToken);
  };

  const recoverSesionStorage = () => {
    const sesionID = sessionStorage.getItem('sesionId');
    const localStoragetoken = localStorage.getItem('token');
    if (sesionID !== null && localStoragetoken !== null) {
      const token = localStoragetoken;
      const sesion = sesionID.split(';', 4);
      const user = {
        id: sesion[0],
        username: sesion[1],
        email: sesion[2],
        active: true,
        updateDate: '',
        softDeleteDate: ''
      };
      const refreshToken = sesion[3];
      saveGlobalStateUser(token, user, refreshToken);
      return true;
    }
    return false;
  };

  return { saveSesionStorage, recoverSesionStorage, saveGlobalStateUser };
};
