import { ButtonForm } from 'components/ButtonForm';
import { InputForm } from 'components/InputForm';

interface EditCredentialsProps {
  account: string;
  userName: string;
  notes: string;
  password: string;
  onClose: () => void;
  isOpen: boolean;
}

export function FormEditCredential({
  isOpen,
  onClose,
  account,
  userName,
  notes,
  password
}: EditCredentialsProps) {
  return (
    <>
      {isOpen ? (
        <div className="absolute h-screen w-screen top-0 left-0 z-30 flex items-center justify-center">
          <div
            onClick={onClose}
            className="absolute bg-black opacity-80 h-screen w-screen -z-10"
          />
          <div className="bg-blueLigth-200 rounded-lg p-6 space-y-5 ">
            <div className="w-full flex justify-start text-xl font-semibold">
              <div className=" text-bground-dark">Edit Password</div>
            </div>

            <form className="w-[400px] flex items-center justify-center  rounded-lg flex-col  space-y-3 ">
              <div className=" flex-col items-start flex w-full ">
                <InputForm type="text" placeholder="Title" value={account} />
              </div>
              <div className=" flex-col items-start flex w-full ">
                <InputForm
                  type="text"
                  placeholder="Username"
                  value={userName}
                />
              </div>
              <div className=" flex-col items-start flex w-full ">
                <InputForm
                  type="password"
                  placeholder="Password"
                  value={password}
                />
              </div>
              <div className=" flex-col items-start flex w-full ">
                <InputForm type="text" placeholder="Note" value={notes} />
              </div>
              <div className=" flex-col items-start flex w-full ">
                <ButtonForm name="Save" onClick={onClose} />
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
