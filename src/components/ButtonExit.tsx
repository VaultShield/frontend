import { useUserStore } from 'store/userStore';
import { useNavigate } from 'react-router-dom';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

interface ExitProps{
  setShowConfirmation: (show:boolean)=>void
  showConfirmation:boolean
  
}
const ButtonExit = ({setShowConfirmation, showConfirmation}:ExitProps) => {
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
    <>
    <button
    className="flex items-center h-14 cursor-pointer w-full sm:hover:bg-white sm:hover:bg-opacity-25 hover:text-red-600"
    onClick={()=>setShowConfirmation(true)}
  >
    <div className="  aspect-square h-full flex items-center justify-center rounded-full ">
      <LogoutRoundedIcon />
    </div>
    <div className="max-xl:hidden">Log Out</div>
  </button>
  {showConfirmation && (
    <div className="absolute h-screen w-screen  flex items-center justify-center z-20 top-0 right-0">
      <div className="bg-white rounded-xl z-50 text-black w-96 py-6 space-y-3 mx-3">
        <div className='text-xl font-semibold'>
          ¿Estás seguro/a?
        </div>
        <div className='grid min-[500px]:grid-cols-2  gap-3 font-medium w-full px-6 '>
         
          <button onClick={handleButtonClick} className='min-[500px]:order-2 h-12 hover:bg-primary hover:text-white bg-white rounded-lg border-2 border-primary w-full '>
            Confirm
          </button>
          <button onClick={()=>setShowConfirmation(false)} className='h-12 hover:bg-red-600 hover:text-white bg-white rounded-lg border-2 border-red-600 w-full '>
            Cancel
          </button>
        </div>
    </div>
      <div
        onClick={() => setShowConfirmation(false)}
        className="absolute h-screen w-screen bg-[#000000] opacity-90 "
      />
    </div>
  )}</>
  );
};

export default ButtonExit;
