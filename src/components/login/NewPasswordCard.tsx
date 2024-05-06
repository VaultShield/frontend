import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import InputSettings from 'components/Settings/InputSettings';
import { ChangeEvent } from 'react';
import { ErrorsForm } from 'types/types';
import CardBasic from './CardBasic';

interface NewPasswordCardProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  repPassword: string;
  handleSubmitNewPassword: () => void;
  errors: ErrorsForm;
}
const NewPasswordCard = ({
  handleChange,
  password,
  repPassword,
  handleSubmitNewPassword,
  errors
}: NewPasswordCardProps) => {
  return (
    <CardBasic
      buttonText="Continue"
      handleChangeCard={handleSubmitNewPassword}
      text="Enter your new password"
    >
      <div className="flex flex-col gap-4 w-full max-w-[30rem]">
        <InputSettings
          type="password"
          value={password}
          placeholder="New Password"
          name="password"
          error={errors.newPassword ?? ''}
          icon={<KeyRoundedIcon />}
          handleChange={handleChange}
          isEditing
        />
        <InputSettings
          value={repPassword}
          isEditing
          handleChange={handleChange}
          error={errors.password ?? ''}
          icon={<KeyRoundedIcon />}
          name="repeatPassword"
          type="password"
          placeholder="Confirm new password"
        />
      </div>
    </CardBasic>
  );
};

export default NewPasswordCard;
