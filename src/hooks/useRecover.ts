import { ChangeEvent, FormEvent, useState } from 'react';
import { getRecoverToken, recoverPassword } from 'services/recover';
import { toast } from 'sonner';
import { CARD, ErrorsForm } from 'types/types';
import { validateForm } from 'utils/validations';

interface UseRecoverProps {
  onClose: () => void;
}

export const useRecover = ({ onClose }: UseRecoverProps) => {
  const [card, setCard] = useState<CARD>(CARD.username);
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repNewPassword, setRepNewPassword] = useState('');
  const [seeds, setSeeds] = useState<string[]>([]);
  const [recoverToken, setRecoverToken] = useState('');
  const [errors, setErrors] = useState<ErrorsForm>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    }
    if (name === 'password') {
      setNewPassword(value);
    }
    if (name === 'repeatPassword') {
      setRepNewPassword(value);
    }
  };

  const handleChangeSeeds = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const newSeeds = [...seeds];
    newSeeds[index] = value;
    setSeeds(newSeeds);
  };

  const handleChangeCard = () => {
    if (card === CARD.username) {
      setCard(CARD.seed);
    } else if (card === CARD.seed) {
      setCard(CARD.password);
    } else {
      onClose();
    }
  };

  const handleGoBack = () => {
    if (card === CARD.seed) {
      setCard(CARD.username);
    } else if (card === CARD.password) {
      setCard(CARD.seed);
    } else {
      onClose();
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const words = [
    //   'rutabaga',
    //   'blueberry',
    //   'banana',
    //   'horseradish',
    //   'papaya',
    //   'xigua',
    //   'okra',
    //   'zucchini',
    //   'lime',
    //   'ilama',
    //   'oat',
    //   'vanilla',
    //   'quinoa',
    //   'thimbleberry',
    //   'carrot'
    // ];
    const res = await getRecoverToken(username, seeds);
    if (res.error) {
      toast.error(res.error.message, { duration: 2000 });
      return;
    }
    setRecoverToken(res);
    handleChangeCard();
    toast.success('Correct seeds words! Now enter your new password', {
      duration: 2000
    });
  };

  const handleSubmitNewPassword = async () => {
    const errorsForm: ErrorsForm = validateForm([
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
    if (!errorsForm.password && !errorsForm.newPassword) {
      if (newPassword !== repNewPassword) {
        setErrors({
          ...errors,
          password: 'Passwords do not match',
          newPassword: 'Passwords do not match'
        });
        return;
      }
      try {
        await recoverPassword(recoverToken, newPassword);

        toast.success('Password recovered successfully', {
          duration: 2000
        });
        handleChangeCard();
      } catch (error) {
        toast.error((error as Error)?.message);
      }
    }
  };
  return {
    card,
    username,
    newPassword,
    repNewPassword,
    seeds,
    recoverToken,
    errors,
    handleChange,
    handleChangeSeeds,
    handleSubmit,
    handleSubmitNewPassword,
    handleChangeCard,
    handleGoBack
  };
};
