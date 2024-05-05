/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect, useState } from 'react';
import { register } from 'services/LoginRegister';
import { toast } from 'sonner';
import { RegisterRequest } from 'types/apiTypes';
import { ErrorsForm } from 'types/types';
import { validateForm } from 'utils/validations';

interface RegisterProps {
  onClose: () => void;
  handleLogin: () => void;
  seedWords: string[];
  showWords: boolean;
  handleAddWords: (seedWords: string[]) => void;
  handleSeedWords: () => void;
}
export const useRegister = ({
  onClose,
  handleLogin,
  seedWords,
  showWords,
  handleAddWords,
  handleSeedWords
}: RegisterProps) => {
  const registerRequest: RegisterRequest = {
    email: '',
    password: '',
    username: ''
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState<ErrorsForm>({});

  useEffect(() => {
    if (!showWords && seedWords.length > 0) {
      onClose();
      handleLogin();
    }
  }, [showWords]);
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
        const res = await register(registerRequest);
        toast.success('User registered successfully', { duration: 2000 });
        const { seedPhrase } = res;
        handleAddWords(seedPhrase);
        handleSeedWords();
      }
    } catch (err) {
      toast.error((err as Error).message, { duration: 2000 });
    }
  };

  return {
    handleLogin,
    handleSeedWords,
    registerNewUser,
    setEmail,
    setPassword,
    setErrors,
    setUsername,
    errors,
    showWords,
    seedWords,
    username,
    email,
    password
  };
};
