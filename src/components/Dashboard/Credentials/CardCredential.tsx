import { Password as PasswordType } from 'types/apiTypes';
import Account from './Sections/Account';
import Actions from './Sections/Actions';
import Notes from './Sections/Notes';
import Password from './Sections/Password';
interface CardCredentialProps {
  credential: PasswordType;
  handleDelete: (id: string) => void;
  handleOpenEditForm: () => void;
}
const CardCredential = ({
  credential,
  handleDelete,
  handleOpenEditForm
}: CardCredentialProps) => {
  const { password, account, title, note, id } = credential;
  return (
    <div className="w-full bg-blueLigth-100 rounded-xl  border-opacity-45 pt-4 pb-4 px-4 flex flex-col gap-2 md:flex-row ">
      <div className="w-full flex items-center  ">
        <Account account={account} title={title} />
        <Password password={password} />
      </div>
      <div className="w-full xl:max-w-[430px] flex flex-col sm:flex-row justify-start sm:justify-between items-center">
        <Notes note={note} />
        <Actions
          handleDelete={handleDelete}
          handleEdit={handleOpenEditForm}
          id={id}
        />
      </div>
    </div>
  );
};

export default CardCredential;
