import {
  IconViewPassword,
  IconHiddenPassword
} from 'components/svg/IconViewPassword';
import { useState } from 'react';

export function SectionPasswordCredential({ password }: { password: string }) {
  const [userPassword, setUserPassword] = useState(false);
  return (
    <section className="py-2 flex  items-center w-full text-start dark:stroke-shamrock-50 stroke-shamrock-800">
      <div className="w-6 pr-2 flex items-center">
        <button onClick={() => setUserPassword(!userPassword)}>
          {!userPassword && <IconViewPassword />}
          {userPassword && <IconHiddenPassword />}
        </button>
      </div>
      <div className="w-full h-[56px]  pl-4 dark:text-shamrock-50 text-shamrock-800 pt-4 ">
        {userPassword && (
          <div className="w-full h-full text-base lg:text-lg">{password}</div>
        )}
        {!userPassword && (
          <div className="w-full h-full text-2xl ">********</div>
        )}
      </div>
    </section>
  );
}
