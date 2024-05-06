import { useUserStore } from 'store/userStore';
import { useNavigate } from 'react-router-dom';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';


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
    onClick={handleButtonClick}
    className="min-[500px]:order-2 h-12 text-white bg-primary rounded-full border-2 border-primary w-full  "
  >
    Confirm
  </button>
  );
};

export default ButtonExit;
