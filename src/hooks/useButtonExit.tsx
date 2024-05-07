import { useUserStore } from 'store/userStore';
import { useNavigate } from 'react-router-dom';

export const useButtonExit = () => {
  const setUser = useUserStore((state) => state.setUser);
  const setTokenStore = useUserStore((state) => state.setToken);
  const setIsLogged = useUserStore((state) => state.setIsLogged);
  const setRefreshToken = useUserStore((state) => state.setRefreshToken);
  const navigate = useNavigate();

  const handleButtonExitClick = () => {
    deletteGlobalStateUser();
  };

  const deletteGlobalStateUser = () => {
    setTokenStore('');
    setUser({
      id: '',
      username: '',
      email: '',
      active: false,
      updateDate: '',
      softDeleteDate: ''
    });
    setRefreshToken('');
    setIsLogged(false);
    localStorage.removeItem('token');
    sessionStorage.removeItem('sesionId');
    navigate('/');
  };

  return {
    handleButtonExitClick
  };
};
