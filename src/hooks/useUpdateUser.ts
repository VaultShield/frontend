import { ChangeEvent, FormEvent, useState } from 'react';
import { updateToken, updateUserData } from 'services/updateUserData';
import { toast } from 'sonner';
import { useUserStore } from 'store/userStore';
import { RefreshTokenResponse } from 'types/apiTypes';
import { ErrorsForm } from 'types/types';
import { validateForm } from 'utils/validations';
import { useStorage } from './useStorage';

export const useUpdateUser = () => {
  const { user, token, refreshToken } = useUserStore((state) => state);
  const setUser = useUserStore((state) => state.setUser);
  const setRefreshToken = useUserStore((state) => state.setRefreshToken);
  const setToken = useUserStore((state) => state.setToken);
  const [errors, setErrors] = useState<ErrorsForm>({});
  const { saveSessionStorage } = useStorage();
  const { username, email } = user;
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewEmail(email);
    setNewUsername(username);
    setErrors({});
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setNewUsername(value);
    } else if (name === 'email') {
      setNewEmail(value);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newEmail === email && newUsername === username) return;
    const formData = new FormData();
    formData.append('username', newUsername);
    formData.append('email', newEmail);
    formData.append('id', user.id);
    const errorsForm: ErrorsForm = validateForm([
      { name: 'email', value: newEmail, required: true },
      {
        name: 'username',
        value: newUsername,
        required: true,
        minLength: 8
      }
    ]);
    setErrors(errorsForm);
    if (!errorsForm.email && !errorsForm.username) {
      const res = await updateUserData(formData, token);
      if (res.error) {
        toast.error(res.message, { duration: 2000 });
        return;
      }
      const newToken = (await updateToken(
        refreshToken
      )) as RefreshTokenResponse;
      setUser({ ...user, username: res.username, email: res.email });
      setToken(newToken.token);
      setRefreshToken(newToken.refreshToken);
      localStorage.setItem('token', newToken.token);
      saveSessionStorage(
        { ...user, username: res.username, email: res.email },
        newToken.refreshToken
      );
      setIsEditing(false);
      toast.success('User updated successfully', {
        duration: 2000
      });
    }
  };

  return {
    isEditing,
    errors,
    username,
    email,
    newEmail,
    newUsername,
    handleEdit,
    handleCancel,
    handleChange,
    handleSubmit
  };
};
