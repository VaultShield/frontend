import { btnDefault } from 'styles/tailwind.classes';
import InputBase from '../InputBase';
import { useState, useContext } from 'react';
import { UserContext } from 'contexts/userContext';
import { validateForm } from 'utils/validations';
import { useNavigate } from 'react-router-dom';
import { NotificationContext } from 'contexts/notificationContext';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import { Recover } from './Recover';
interface ErrorsForm {
  email?: string;
  password?: string;
  error?: string;

}

interface LoginProps {
  isOpen: boolean;
    onClose: () => void;
}


export function Login({ isOpen, onClose }:LoginProps) {
  const [showRecover, setShowRecover] = useState(false)
  type InfoUser = {
    email: string;
    password: string;
  };
  const navigate = useNavigate();
  const [infoUser, setInfoUser] = useState({
    email: '',
    password: ''
  });
  //contexts
  const { loginUser } = useContext(UserContext);
  const { showNotification } = useContext(NotificationContext);

  const [errors, setErrors] = useState<ErrorsForm>({});

  const sendData = async (infoUser: InfoUser) => {
    try {
      const errorsForm: ErrorsForm = validateForm([
        { name: 'email', value: infoUser.email, required: true },
        {
          name: 'password',
          value: infoUser.password,
          required: true,
          minLength: 8
        }
      ]);

      setErrors(errorsForm);
      if (!errorsForm.email && !errorsForm.password) {
        await loginUser(infoUser);
        showNotification({
          message: 'Login successfuly!',
          variant: 'success'
        });
        navigate('/');
      }
    } catch (err) {
      if (err instanceof Error) setErrors({ error: err.message });
      showNotification({
        message: 'Error in login user!',
        variant: 'danger'
      });
    }
  };



  return (
    <>
      {
        isOpen ? (
          <div className='absolute flex justify-center items-center right-0 top-0 h-screen w-screen text-white '>
            <div onClick={onClose} className='absolute bg-[#000000] opacity-80 h-screen w-screen '></div>
            <div className='flex flex-col justify-center bg-white w-[57rem] h-[75%] rounded-lg z-10 text-whitebg  font-semibold'>
              <div className="  text-whitebg w-full flex justify-end items-start  pr-5 pt-5">
                <div className="cursor-pointer z-20">
                  x

                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center space-y-4 px-56 h-full mt-[-2.84rem] text-black">
                <div className="text-4xl  mb-5">
                  Welcome Back!
                </div>
                <div className="w-full flex items-center">
                  <PersonRoundedIcon className="absolute ml-4 text-primary" />
                  <input type="text" className="bg-primary bg-opacity-15  rounded-full h-12 w-full pl-12 outline-none placeholder:text-gray " placeholder="Username" />

                </div>

                <div className="w-full flex items-center">
                  <KeyRoundedIcon className="absolute ml-4 text-primary" />

                  <input type="password" className="bg-primary bg-opacity-15 rounded-full h-12 w-full pl-12 outline-none placeholder:text-gray " placeholder="Password" />

                </div>
                <div className="w-full">
                  <button className="bg-primary w-full h-12 rounded-full text-white">
                    Login
                  </button>
                </div>
                <div className="w-full flex justify-center text-black  font-medium ">
                  Forget the password?&nbsp; <span onClick={()=>setShowRecover(true)} className="text-primary font-semibold cursor-pointer">Recover</span>
                </div>
              </div>

            </div>
            <Recover isOpen={showRecover} onClose={() => setShowRecover(false)} />
          </div>
        ) : null
      }
    </>

  );
}
