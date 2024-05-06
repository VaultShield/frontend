import { ButtonForm } from 'components/ButtonForm';
import { InputForm } from 'components/InputForm';
import TitleIcon from '@mui/icons-material/Title';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import ArticleIcon from '@mui/icons-material/Article';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useViewPassword } from 'hooks/useViewPassword';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

type FormCredentialProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function FormCreateCredential({ isOpen, onClose }: FormCredentialProps) {
  const { view, viewPassword } = useViewPassword();
  return (
    <>
      {isOpen ? (
        <div className="absolute h-screen w-screen top-0 left-0 z-30 flex items-center justify-center ">
          <div
            onClick={onClose}
            className="absolute bg-black opacity-80 h-screen w-screen -z-10"
          />
          <div className="bg-blueLigth-200 rounded-lg p-6 relative">
            <div className="w-full flex justify-center text-xl font-semibold pt-0 pb-6 ">
              <div className=" text-bground-dark">New Credential</div>
            </div>
            <div className="  text-white  w-full flex justify-end items-start  pr-0 pt-0 absolute top-0 right-0">
              <button
                onClick={onClose}
                className="md:h-12 md:w-12 w-10 h-10 rounded-lg border-2 border-primary  text-primary border-opacity-15 hover:bg-primary hover:text-white flex justify-center items-center cursor-pointer z-20"
              >
                <CloseRoundedIcon />
              </button>
            </div>
            <form className="w-[400px] flex gap-1 items-center justify-center  rounded-lg flex-col  space-y-3 ">
              <div className=" flex-col items-start flex w-full ">
                <InputForm
                  type="text"
                  placeholder="Title"
                  icon={<TitleIcon />}
                ></InputForm>
              </div>
              <div className=" flex-col items-start flex w-full ">
                <InputForm
                  type="text"
                  placeholder="Username"
                  icon={<PersonIcon />}
                />
              </div>
              <div className=" flex-col items-start flex w-full ">
                <InputForm
                  type={view ? 'text' : 'password'}
                  icon={<KeyIcon />}
                  iconOnlyForPassword={
                    <button onClick={viewPassword}>
                      {view ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </button>
                  }
                  placeholder="Password"
                  name="password"
                  id="password"
                />
              </div>
              <div className=" flex-col items-start flex w-full ">
                <InputForm
                  type="text"
                  placeholder="Note"
                  icon={<ArticleIcon />}
                />
              </div>
              <div className=" flex-col items-start flex w-full ">
                <ButtonForm name="Add Password" onClick={onClose} />
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
