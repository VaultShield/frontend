import {
  IconViewPassword,
  IconHiddenPassword
} from 'components/svg/IconViewPassword';
import { useState } from 'react';

export function SectionPasswordCredential({ password }: { password: string }) {
  const [userPassword, setUserPassword] = useState(false);
  return (
    <section className="py-2 flex  items-center w-full text-start stroke-blueLigth-900">
      <div className="w-6 pr-2 flex items-center">
        <button onClick={() => setUserPassword(!userPassword)}>
          {!userPassword && <IconViewPassword />}
          {userPassword && <IconHiddenPassword />}
        </button>
      </div>
      <div className="w-full h-[56px]  pl-4  text-blueLigth-700 pt-4 ">
        {userPassword && (
          <div className="w-full h-full text-base sm:text-lg lg:text-xl">
            {password}
          </div>
        )}
        {!userPassword && (
          <div className="w-full h-full text-2xl ">********</div>
        )}
      </div>
    </section>
  );
}
