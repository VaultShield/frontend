import EmailIcon from 'components/svg/EmailIcon';
import KeyIcon from 'components/svg/KeyIcon';
import UsernameIcon from 'components/svg/UsernameIcon';
import { useUpdateUser } from 'hooks/useUpdateUser';
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
    <form
      className=" flex items-center justify-center max-w-full"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col px-4  h-64 gap-5">
        <InputSettings
          value={newUsername}
          isEditing
          handleChange={handleChange}
          errors={errors}
          icon={<UsernameIcon />}
        />
        <InputSettings
          value={newEmail}
          isEditing
          handleChange={handleChange}
          errors={errors}
          icon={<EmailIcon />}
        />
        <InputSettings
          value="" // TODO: editar contraseña
          isEditing
          handleChange={handleChange}
          errors={errors}
          icon={<KeyIcon />}
        />
        <div className="w-full flex justify-end gap-4">
          {isEditing ? (
            <>
              <button
                onClick={handleCancel}
                className="bg-[#45ADB0] bg-opacity-[18%] rounded-md text-[#45ADB0] px-4 cursor-pointer py-1 text-sm font-semibold "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#45ADB0]  rounded-md text-[#ECFEFF] px-4 cursor-pointer py-1 text-sm font-semibold  w-16"
              >
                Save
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={handleEdit}
              className="bg-[#45ADB0]  rounded-md text-[#ECFEFF] px-4 cursor-pointer py-1 text-sm font-semibold  w-16"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default FormUpdateUser;
