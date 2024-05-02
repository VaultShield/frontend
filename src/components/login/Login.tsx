import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginRegister from 'services/LoginRegister';
import { toast } from 'sonner';
import { useUserStore } from 'store/userStore';
import { btnDefault } from 'styles/tailwind.classes';
import { LoginRequest, User } from 'types/apiTypes';
import { validateForm } from 'utils/validations';
import InputBase from '../InputBase';

interface ErrorsForm {
  username?: string;
  password?: string;
  error?: string;
}

interface LoginProps {
  handleLogin: () => void;
}
export function Login({ handleLogin }: LoginProps) {
  const setUser = useUserStore((state) => state.setUser);
  const setTokenStore = useUserStore((state) => state.setToken);
  const setIsLogged = useUserStore((state) => state.setIsLogged);
  const setRefreshToken = useUserStore((state) => state.setRefreshToken);

  const navigate = useNavigate();
  const [infoUser, setInfoUser] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState<ErrorsForm>({});

  const sendData = async (infoUser: LoginRequest) => {
    try {
      const errorsForm: ErrorsForm = validateForm([
        { name: 'userName', value: infoUser.username, required: true },
        {
          name: 'password',
          value: infoUser.password,
          required: true,
          minLength: 8
        }
      ]);

      setErrors(errorsForm);
      if (!errorsForm.username && !errorsForm.password) {
        await loginUser(infoUser);
        navigate('/');
      }
    } catch (err) {
      if (err instanceof Error) setErrors({ error: err.message });
    }
  };

  const handleSignupClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    handleLogin();
  };

  const loginUser = async (credentials: LoginRequest): Promise<void> => {
    const response = await LoginRegister.login(credentials);
    const { token, user, refreshToken } = response;
    if (token) {
      localStorage.setItem('token', JSON.stringify(token)); // Store the user token in local storage
      saveGlobalStateUser(token, user, refreshToken);
      toast.success('Login successful', {
        duration: 2000
      });
    } else {
      throw new Error('Incorrect username or password');
    }
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
  };

  return (
    <div className="flex flex-col justify-center items-center p-0 m-0 ">
      <div className="border rounded-md shadow-xl h-max w-[360px] md:w-6/12 m-0 px-4 pb-2 dark:bg-zinc-900 dark:border-zinc-800 dark:text-white flex flex-col">
        <form className="flex justify-evenly flex-col rounded-md dark:bg-zinc-700 h-[420px] mt-9 w-full px-2">
          <div>
            <h2 className="dark:text-gray-100 text-lg">Acount Login</h2>
            <p className="dark:text-gray-100"></p>
          </div>
          <InputBase
            label="Username"
            type="username"
            placeholder="username ..."
            value={infoUser.username}
            onChange={(e) =>
              setInfoUser({ ...infoUser, username: e.target.value })
            }
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}{' '}
          <InputBase
            label="Password"
            type="password"
            value={infoUser.password}
            onChange={(e) =>
              setInfoUser({ ...infoUser, password: e.target.value })
            }
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}{' '}
          <button
            onClick={(e) => {
              e.preventDefault();
              sendData(infoUser);
            }}
            className={btnDefault}
          >
            Login
          </button>
          {errors.error && <p className="text-red-500">{errors.error}</p>}{' '}
          <div>
            <span>You don't have an account?</span>

            <span
              className="ml-2 hover:underline hover:text-cinder-600 text-cinder-400 cursor-pointer"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleSignupClick(e)
              }
            >
              signup
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
