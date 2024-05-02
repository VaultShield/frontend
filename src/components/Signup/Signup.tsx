import { useState } from 'react';

import InputBase from 'components/InputBase';
import LoginRegister from 'services/LoginRegister';
import { toast } from 'sonner';
import { btnDefault } from 'styles/tailwind.classes';
import { RegisterRequest } from 'types/apiTypes';
import { validateForm } from 'utils/validations';

interface ErrorsForm {
  email?: string;
  password?: string;
  username?: string;
  error?: string;
}

interface RegisterProps {
  handleSignup: () => void;
}
const Signup = ({ handleSignup }: RegisterProps) => {
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

  const RegisterNewUser = async () => {
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
        handleSignup();
      }
    } catch (err) {
      if (err instanceof Error) setErrors({ error: err.message });
    }
  };

  const handleLoginClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    handleSignup();
  };

  return (
    <div className="flex flex-col justify-center items-center p-0 m-0">
      <div className="border rounded-md shadow-xl h-max w-[360px] md:w-6/12 m-0 px-4 pb-2  dark:bg-zinc-900 dark:border-zinc-800 dark:text-white flex flex-col">
        <div className="flex justify-evenly flex-col rounded-md dark:bg-zinc-700 h-[420px] mt-9 w-full">
          <div>
            <h2 className="dark:text-gray-100 text-lg">
              Create a VaultShield account
            </h2>
            <p className="dark:text-gray-100"> one account for everything!</p>
          </div>
          <InputBase
            label="Username"
            type="text"
            placeholder="what do you want to call yourself?"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></InputBase>
          {errors.username && <p className="text-red-500">{errors.username}</p>}{' '}
          <InputBase
            label="Email"
            type="email"
            placeholder="input your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}{' '}
          <InputBase
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}{' '}
          <button className={btnDefault} onClick={() => RegisterNewUser()}>
            Create Account
          </button>
          {errors.error && <p className="text-red-500">{errors.error}</p>}{' '}
          <div>
            <span>Already have an account?</span>
            <span
              className="ml-2 hover:underline hover:text-cinder-600 text-cinder-400 cursor-pointer"
              onClick={(e) => handleLoginClick(e)}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
