import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateForm } from 'utils/validations';
import { LoginRequest, User } from 'types/apiTypes';
import LoginRegister from 'services/LoginRegister';
import { useUserStore } from 'store/userStore';
import { toast } from 'sonner';

interface ErrorsForm {
  username?: string;
  password?: string;
  error?: string;
}

interface LoginProps {
  handleLogin: () => void;
}

export const useLogin = ({ handleLogin }: LoginProps) => {
  useEffect(() => {
    recoverSesionStorage();
  }, []);
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
      localStorage.setItem('token', token); // Store the user token in local storage
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
    saveSesionStorage(user, refreshToken);
  };
  const saveSesionStorage = (user: User, refreshToken: string) => {
    const sesionID = `${user.id};${user.username};${user.email};${refreshToken}`;
    sessionStorage.setItem('sesionId', sesionID);
  };
  const recoverSesionStorage = () => {
    const sesionID = sessionStorage.getItem('sesionId');
    const localStoragetoken = localStorage.getItem('token');
    if (sesionID !== null && localStoragetoken !== null) {
      const token = localStoragetoken;
      const sesion = sesionID.split(';', 4);
      const user = {
        id: sesion[0],
        username: sesion[1],
        email: sesion[2],
        active: true,
        updateDate: '',
        softDeleteDate: ''
      };
      const refreshToken = sesion[3];
      saveGlobalStateUser(token, user, refreshToken);
    }
  };
  return {
    infoUser,
    errors,
    sendData,
    handleSignupClick,
    setInfoUser,
    recoverSesionStorage
  };
};
