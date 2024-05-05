import { ButtonForm } from 'components/ButtonForm';
import { InputForm } from 'components/InputForm';

import TitleIcon from '@mui/icons-material/Title';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import ArticleIcon from '@mui/icons-material/Article';
import { useState } from 'react';
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
  const [editedCredential, setCredential] = useState({
    account,
    userName,
    password,
    notes
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { target } = e;
    const { name, value } = target;
    const newValues = {
      ...editedCredential,
      [name]: value
    };
    setCredential(newValues);
  };

  return (
    <>
      {isOpen ? (
        <div className="absolute h-screen w-screen top-0 left-0 z-30 flex items-center justify-center">
          <div
            onClick={onClose}
            className="absolute bg-black opacity-80 h-screen w-screen -z-10"
          />
          <div className="bg-blueLigth-200 rounded-lg p-6 space-y-5 ">
            <div className="w-full flex justify-center text-xl font-semibold">
              <div className=" text-bground-dark text-center">
                Edit Credential
              </div>
            </div>

            <form className="w-[400px] flex gap-1 items-center justify-center  rounded-lg flex-col  space-y-3 ">
              <div className=" flex-col items-start flex w-full ">
                <InputForm
                  type="text"
                  icon={<TitleIcon />}
                  placeholder="Title"
                  value={editedCredential.account}
                  name="account"
                  id="account"
                  onChange={handleChange}
                />
              </div>
              <div className=" flex-col items-start flex w-full ">
                <InputForm
                  type="text"
                  icon={<PersonIcon />}
                  placeholder="Username"
                  value={editedCredential.userName}
                  name="userName"
                  id="userName"
                  onChange={handleChange}
                />
              </div>
              <div className=" flex-col items-start flex w-full ">
                <InputForm
                  type="password"
                  icon={<KeyIcon />}
                  placeholder="Password"
                  value={editedCredential.password}
                  name="password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <div className=" flex-col items-start flex w-full ">
                <InputForm
                  type="text"
                  icon={<ArticleIcon />}
                  placeholder="Note"
                  value={editedCredential.notes}
                  name="notes"
                  id="notes"
                  onChange={handleChange}
                />
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
