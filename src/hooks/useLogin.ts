import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginRegister from 'services/LoginRegister';
import { toast } from 'sonner';
import { LoginRequest } from 'types/apiTypes';
import { validateForm } from 'utils/validations';
import { useStorage } from './useStorage';

interface ErrorsForm {
  username?: string;
  password?: string;
  error?: string;
}

interface LoginProps {
  handleLogin: () => void;
}

export const useLogin = ({ handleLogin }: LoginProps) => {
  const { saveGlobalStateUser } = useStorage();
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

  return {
    infoUser,
    errors,
    sendData,
    handleSignupClick,
    setInfoUser
  };
};
