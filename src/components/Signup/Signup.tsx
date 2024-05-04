import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { FormEvent, useState } from 'react';
import LoginRegister from 'services/LoginRegister';
import { toast } from 'sonner';
import { RegisterRequest } from 'types/apiTypes';
import { ErrorsForm } from 'types/types';
import { validateForm } from 'utils/validations';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
interface RegisterProps {
  onClose: () => void;
  handleLogin: () => void;
}
const Signup = ({ onClose, handleLogin }: RegisterProps) => {
  const registerRequest: RegisterRequest = {
    email: '',
    password: '',
    username: ''
  };

  //user variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  //validation error;
  const [errors, setErrors] = useState<ErrorsForm>({});

  const registerNewUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const errorsForm: ErrorsForm = validateForm([
        { name: 'email', value: email, required: true },
        { name: 'password', value: password, required: true, minLength: 8 },
        { name: 'username', value: username, required: true }
      ]);

      setErrors(errorsForm);

      if (!errorsForm.email && !errorsForm.password && !errorsForm.username) {
        registerRequest.email = email;
        registerRequest.password = password;
        registerRequest.username = username;
        const response = await LoginRegister.register(registerRequest);
        if (response !== '200') {
          toast.error(response.message, { duration: 2000 });
          return;
        }
        toast.success('User registered successfully', { duration: 2000 });
        onClose();
        handleLogin();
      }
    } catch (err) {
      if (err instanceof Error) setErrors({ error: err.message });
    }
  };

  return (
    <div className="absolute flex justify-center items-center right-0 top-0 h-screen w-screen text-white ">
      <div
        onClick={onClose}
        className="absolute bg-[#000000] opacity-80 h-screen w-screen "
      ></div>

      <div className="flex flex-col justify-center items-center bg-white w-full max-w-[57rem]  sm:h-[75%] h-full rounded-lg z-10 text-whitebg  font-semibold">
        <div className="  text-whitebg w-full flex justify-end items-start text-black  pr-5 pt-5">
          <CloseRoundedIcon onClick={onClose} className='cursor-pointer' />
        </div>
        <form
          className="w-[90%] max-w-[30rem]l flex flex-col justify-center items-center space-y-4  h-full mt-[-2.84rem] text-black"
          onSubmit={registerNewUser}
        >
          <div className="text-4xl  mb-5">Lets Start!</div>
          <div className="w-full flex items-center">
            <PersonRoundedIcon className="absolute ml-4 text-primary" />
            <input
              type="text"
              className="bg-primary bg-opacity-15  rounded-full h-12 w-full pl-12 outline-none placeholder:text-gray "
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            {errors.username && (
              <p className="text-red-500">{errors.username}</p>
            )}{' '}
          </div>
          <div className="w-full flex items-center">
            <EmailRoundedIcon className="absolute ml-4 text-primary" />
            <input
              type="email"
              className="bg-primary bg-opacity-15  rounded-full h-12 w-full pl-12 outline-none placeholder:text-gray "
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}{' '}
          </div>
          <div className="w-full flex items-center">
            <KeyRoundedIcon className="absolute ml-4 text-primary" />
            <input
              type="password"
              className="bg-primary bg-opacity-15  rounded-full h-12 w-full pl-12 outline-none placeholder:text-gray "
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}{' '}
          </div>
          <button className="bg-primary w-full h-12 rounded-full text-white">
            Create Account
          </button>
          {errors.error && <p className="text-red-500">{errors.error}</p>}{' '}
        </form>
      </div>
    </div>
  );
};

export default Signup;
