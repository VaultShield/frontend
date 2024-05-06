import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import KeyIcon from 'components/svg/KeyIcon';
import { useChangePassword } from 'hooks/useChangePassword';
import ButtonIcon from './ButtonIcon';
import ButtonIconText from './ButtonIconText';
import ButtonSettings from './ButtonSettings';
import InputSettings from './InputSettings';

const FormChangePassword = () => {
  const {
    isOpen,
    handleOpen,
    handleChange,
    handleSubmit,
    oldPassword,
    newPassword,
    repNewPassword,
    errors
  } = useChangePassword();

  return (
    <>
      {isOpen ? (
        <form
          className="w-full flex flex-col px-4 mb-4 gap-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4 w-full">
            <InputSettings
              value={oldPassword}
              isEditing
              handleChange={handleChange}
              error={errors.oldPassword ?? ''}
              icon={<KeyIcon />}
              name="oldPassword"
              type="password"
              placeholder="Enter old password"
            />
            <div className="flex md:flex-row gap-4 flex-col">
              <InputSettings
                value={newPassword}
                isEditing
                handleChange={handleChange}
                error={errors.newPassword ?? ''}
                icon={<KeyIcon />}
                name="newPassword"
                type="password"
                placeholder="Enter new password"
              />
              <InputSettings
                value={repNewPassword}
                isEditing
                handleChange={handleChange}
                error={errors.password ?? ''}
                icon={<KeyIcon />}
                name="repeatNewPassword"
                type="password"
                placeholder="Confirm new password"
              />
            </div>
          </div>

          <div className="w-full flex gap-4 h-12">
            <ButtonIcon handleClick={handleOpen} icon={<CloseRoundedIcon />} />
            <ButtonSettings text="Change Password" type="submit" />
          </div>
        </form>
      ) : (
        <div className="px-4">
          <ButtonIconText
            handleClick={handleOpen}
            text="Change Password"
            icon={<KeyRoundedIcon />}
          />
        </div>
      )}
    </>
  );
};

export default FormChangePassword;
