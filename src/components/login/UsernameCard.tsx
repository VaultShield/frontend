import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import InputSettings from 'components/Settings/InputSettings';
import { ChangeEvent } from 'react';
import CardBasic from './CardBasic';

interface UsernameCardProps {
  handleChangeCard: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  username: string;
}

const UsernameCard = ({
  handleChangeCard,
  handleChange,
  username
}: UsernameCardProps) => {
  return (
    <CardBasic
      buttonText="Continue"
      handleChangeCard={handleChangeCard}
      text="Enter your username"
    >
      <InputSettings
        type="text"
        value={username}
        placeholder="Username"
        name="username"
        error=""
        icon={<PersonRoundedIcon />}
        handleChange={handleChange}
        isEditing
      />
    </CardBasic>
  );
};

export default UsernameCard;
