import { useUserStore } from 'store/userStore';
import { SvgExit } from './svg/SvgExit';
import { useNavigate } from 'react-router-dom';

const ButtonExit = () => {
  const setUser = useUserStore((state) => state.setUser);
  const setTokenStore = useUserStore((state) => state.setToken);
  const setIsLogged = useUserStore((state) => state.setIsLogged);
  const setRefreshToken = useUserStore((state) => state.setRefreshToken);
  const navigate = useNavigate();

  const handleButtonClick = async () => {
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

  return (
    <button
      className="flex justify-start items-center mt-1 pl-4 mb-1"
      onClick={handleButtonClick}
    >
      <SvgExit />
      <span className="ml-2 text-shamrock-950 dark:text-shamrock-100">
        Exit
      </span>
    </button>
  );
};

export default ButtonExit;
