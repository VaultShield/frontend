import { ChangeEvent, FormEvent, useState } from 'react';
import { updateUserPassword } from 'services/updateUserData';
import { toast } from 'sonner';
import { useUserStore } from 'store/userStore';
import { ErrorsForm } from 'types/types';
import { validateForm } from 'utils/validations';

export const useChangePassword = () => {
  const { user, token } = useUserStore((state) => state);
  const [errors, setErrors] = useState<ErrorsForm>({});
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repNewPassword, setRepNewPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'oldPassword') setOldPassword(value);
    else if (name === 'newPassword') setNewPassword(value);
    else if (name === 'repeatNewPassword') setRepNewPassword(value);
  };

  const resetForm = () => {
    setOldPassword('');
    setNewPassword('');
    setRepNewPassword('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('oldPassword', oldPassword);
    formData.append('newPassword', newPassword);
    formData.append('id', user.id);
    const errorsForm: ErrorsForm = validateForm([
      {
        name: 'Old Password',
        value: oldPassword,
        required: true,
        minLength: 8
      },
      {
        name: 'New Password',
        value: newPassword,
        required: true,
        minLength: 8
      },
      {
        name: 'password',
        value: repNewPassword,
        required: true,
        minLength: 8
      }
    ]);
    setErrors(errorsForm);
    if (
      !errorsForm.password &&
      !errorsForm.newPassword &&
      !errorsForm.oldPassword
    ) {
      if (newPassword !== repNewPassword) {
        setErrors({
          ...errors,
          password: 'Passwords do not match',
          newPassword: 'Passwords do not match'
        });
        return;
      }
      try {
        await updateUserPassword(formData, token);
        resetForm();
        setIsOpen(false);
        toast.success('Password chanded successfully', {
          duration: 2000
        });
      } catch (error) {
        toast.error(
          (error as Error)?.message || 'Your old password is incorrect'
        );
      }
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
    resetForm();
  };

  return {
    isOpen,
    handleChange,
    handleSubmit,
    oldPassword,
    newPassword,
    repNewPassword,
    errors,
    handleOpen
  };
};
