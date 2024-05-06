import { useUserStore } from 'store/userStore';
import { SvgExit } from './svg/SvgExit';
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
    className="flex items-center h-14 cursor-pointer w-full hover:bg-white hover:bg-opacity-25 hover:text-red-600"
    onClick={handleButtonClick}
  >
    <div className="  aspect-square h-full flex items-center justify-center rounded-full ">
      <LogoutRoundedIcon />
    </div>
    <div className="max-xl:hidden">Log Out</div>
  </button>
  );
};

export default ButtonExit;
