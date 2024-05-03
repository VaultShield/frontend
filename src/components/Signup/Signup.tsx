import { useContext, useState, MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import { validateForm } from 'utils/validations';
import { btnDefault } from 'styles/tailwind.classes';
import InputBase from 'components/InputBase';
import { UserContext } from 'contexts/userContext';
import { NotificationContext } from 'contexts/notificationContext';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
interface ErrorsForm {
  email?: string;
  password?: string;
  username?: string;
  error?: string;
}

interface RegisterProps {
  isOpen: boolean,
  onClose: () => void
}

const Signup = ({  onClose, isOpen }:RegisterProps) => {
  const navigate = useNavigate();
  //context
  const { addUser } = useContext(UserContext);
  const { showNotification } = useContext(NotificationContext);
  //user variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  //validation error;
  const [errors, setErrors] = useState<ErrorsForm>({});

  // const handleRegister: MouseEventHandler<HTMLButtonElement> = async (
  //   event
  // ) => {
  //   try {
  //     event.preventDefault();

  //     const errorsForm: ErrorsForm = validateForm([
  //       { name: 'email', value: email, required: true },
  //       { name: 'password', value: password, required: true, minLength: 8 },
  //       { name: 'username', value: username, required: true }
  //     ]);

  //     setErrors(errorsForm);

  //     if (!errorsForm.email && !errorsForm.password && !errorsForm.username) {
  //       const newUser = {
  //         email,
  //         password,
  //         username
  //       };
  //       await addUser(newUser);
  //       showNotification({
  //         message: 'Registration successfuly!',
  //         variant: 'success'
  //       });
  //       navigate('/');
  //     }
  //   } catch (err) {
  //     if (err instanceof Error) setErrors({ error: err.message });
  //     showNotification({
  //       message: 'Error in registration!',
  //       variant: 'danger'
  //     });
  //   }
  // };

  // const handleLoginClick = (e) => {
  //   e.preventDefault();
  //   handleSignup();
  // };

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
                  Lets Start!
                </div>
                <div className="w-full flex items-center">
                  <PersonRoundedIcon className="absolute ml-4 text-primary" />
                  <input type="text" className="bg-primary bg-opacity-15  rounded-full h-12 w-full pl-12 outline-none placeholder:text-gray " placeholder="Username" />

                </div>
                <div className="w-full flex items-center">
                  <EmailRoundedIcon className="absolute ml-4 text-primary" />
                  <input type="text" className="bg-primary bg-opacity-15  rounded-full h-12 w-full pl-12 outline-none placeholder:text-gray " placeholder="Email" />

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
               
              </div>

            </div>
          </div>
        ) : null
      }
    </>
  );
};

export default Signup;
