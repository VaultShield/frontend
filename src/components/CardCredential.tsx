import { SectionAccountCredential } from './Credential/SectionAcountCredential';
import { SectionNotesCredential } from './Credential/SectionNotesCredential';
import { SectionOptionsCredential } from './Credential/SectionOptionsCredential';
import { SectionPasswordCredential } from './Credential/SectionPassword';
import { FormEditCredential } from './EditCredentials/FormEditCredentials';
import  {useState} from "react"
type CardCredentialProps = {
  account: string;
  userName: string;
  notes: string;
  password: string;
};

export function CardCredential({
  account,
  userName,
  notes,
  password, 
 
}: CardCredentialProps) {
  const [editCredential, setEditCredential] = useState(false);

  return (
    <div className="w-full  pt-4 pb-4 sm:pt-2 lg:h-[150px] xl:h-[98px] flex-col xl:flex-row  flex gap-1 md:gap-2 lg:gap-3 items-start md:items-center px-4 dark:bg-gradient-to-tr dark:to-bground-darkCard dark:from-shamrock-950 rounded-xl border-b-[2.5px] border-r-[2.5px] border-l-[2px] dark:to-25% dark:border-shamrock-800 border-shamrock-500 border-opacity-45 text-shamrock-00">
      <div className="w-full flex items-center max-[550px]:flex-col ">
        <SectionAccountCredential account={account} userName={userName} />
        <SectionPasswordCredential password={password} />
      </div>
      <div className="w-full xl:max-w-[430px] flex flex-col sm:flex-row justify-start sm:justify-between items-center">
        <SectionNotesCredential notes={notes} />
        <SectionOptionsCredential setEditCredential={setEditCredential}  />
      </div>
      <FormEditCredential isOpen={editCredential} onClose={()=>setEditCredential(false)} account={account} userName={userName} notes={notes} password={password} />

    </div>
  );
}
