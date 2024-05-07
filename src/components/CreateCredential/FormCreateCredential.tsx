import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import TitleIcon from '@mui/icons-material/Title';
import KeyIcon from '@mui/icons-material/Key';
import ArticleIcon from '@mui/icons-material/Article';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useCredentials } from 'hooks/useCredentials';
import InputSettings from 'components/Settings/InputSettings';
import ButtonSettings from 'components/Settings/ButtonSettings';

type FormCredentialProps = {
  onClose: () => void;
};

export function FormCreateCredential({ onClose }: FormCredentialProps) {
  const {
    password,
    account,
    title,
    note,
    errors,
    handleChange,
    handleSubmitAddCredential
  } = useCredentials({ onClose });

  return (
    <div className="absolute h-screen w-screen top-0 left-0 z-30 flex items-center justify-center">
      <div
        onClick={onClose}
        className="absolute bg-[#000000] opacity-80 h-screen w-screen "
      ></div>

      <div className="flex flex-col justify-center items-center bg-white  w-full max-w-[57rem]  lg:h-[75%] h-full rounded-lg z-10 text-whitebg  font-semibold">
        <div className="  text-white  w-full flex justify-end items-start  pr-5 pt-5">
          <button
            onClick={onClose}
            className="md:h-12 md:w-12 w-10 h-10 rounded-lg border-2 border-primary  text-primary border-opacity-15 hover:bg-primary hover:text-white flex justify-center items-center cursor-pointer z-20"
          >
            <CloseRoundedIcon />
          </button>
        </div>
        <form
          className="w-full flex flex-col justify-center items-center space-y-4 px-5   h-full mt-[-2.84rem] text-black"
          onSubmit={handleSubmitAddCredential}
        >
          <div className="text-4xl  mb-5">New credential</div>
          <div className="w-full max-w-[30rem]  flex items-center">
            <InputSettings
              value={title}
              isEditing
              placeholder="Title"
              handleChange={handleChange}
              error={errors.title ?? ''}
              icon={<TitleIcon />}
              name="title"
            />
          </div>
          <div className="w-full max-w-[30rem]  flex items-center">
            <InputSettings
              value={account}
              isEditing
              placeholder="account"
              handleChange={handleChange}
              error={errors.account ?? ''}
              icon={<PersonRoundedIcon />}
              name="account"
            />
          </div>
          <div className="w-full max-w-[30rem]  flex items-center">
            <InputSettings
              value={password}
              isEditing
              placeholder="password"
              handleChange={handleChange}
              error={errors.password ?? ''}
              icon={<KeyIcon />}
              type="password"
              name="password"
            />
          </div>
          <div className="w-full max-w-[30rem]  flex items-center">
            <InputSettings
              value={note}
              isEditing
              placeholder="note"
              handleChange={handleChange}
              error={errors.note ?? ''}
              icon={<ArticleIcon />}
              name="note"
            />
          </div>
          <div className=" w-full max-w-[30rem]  flex items-center">
            <ButtonSettings text="Add Credentials" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
