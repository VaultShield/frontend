import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useUpdateUser } from 'hooks/useUpdateUser';
import ButtonIcon from './ButtonIcon';
import ButtonIconText from './ButtonIconText';
import ButtonSettings from './ButtonSettings';
import InputSettings from './InputSettings';

const FormUpdateUser = () => {
  const {
    isEditing,
    errors,
    newUsername,
    newEmail,
    handleEdit,
    handleCancel,
    handleChange,
    handleSubmit
  } = useUpdateUser();

  return (
    <form className="w-full flex flex-col px-4 gap-5" onSubmit={handleSubmit}>
      <InputSettings
        value={newUsername}
        isEditing={isEditing}
        handleChange={handleChange}
        error={errors.username ?? ''}
        icon={<PersonRoundedIcon />}
        name="username"
      />
      <InputSettings
        value={newEmail}
        isEditing={isEditing}
        handleChange={handleChange}
        error={errors.email ?? ''}
        icon={<EmailRoundedIcon />}
        name="email"
      />
      <div className="w-full flex gap-4 h-12">
        {isEditing ? (
          <>
            <ButtonIcon
              handleClick={handleCancel}
              icon={<CloseRoundedIcon />}
            />
            <ButtonSettings text="Save" type="submit" />
          </>
        ) : (
          <ButtonIconText
            handleClick={handleEdit}
            text="Edit"
            icon={<EditRoundedIcon />}
          />
        )}
      </div>
    </form>
  );
};

export default FormUpdateUser;
