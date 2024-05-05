import { ButtonForm } from 'components/ButtonForm';
import { InputForm } from 'components/InputForm';
import TitleIcon from '@mui/icons-material/Title';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import ArticleIcon from '@mui/icons-material/Article';

type FormCredentialProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function FormCreateCredential({ isOpen, onClose }: FormCredentialProps) {
  return (
    <>
      {isOpen ? (
        <div className="absolute h-screen w-screen top-0 left-0 z-30 flex items-center justify-center ">
          <div
            onClick={onClose}
            className="absolute bg-black opacity-80 h-screen w-screen -z-10"
          />
          <div className="bg-blueLigth-200 rounded-lg p-6 space-y-5 ">
            <div className="w-full flex justify-center text-xl font-semibold">
              <div className=" text-bground-dark">New Credential</div>
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
                  type="password"
                  placeholder="Password"
                  icon={<KeyIcon />}
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
