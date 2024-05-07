import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
interface PasswordProps {
  password: string;
}

const Password = ({ password }: PasswordProps) => {
  const [view, setView] = useState(false);
  return (
    <section className="py-2 flex  items-center w-full text-start align-middle">
      <div className="w-6 pr-2 flex items-center align-middle gap-2">
        <button
          className="mr-4 text-blueLigth-900 text-opacity-75 cursor-pointer"
          onClick={() => setView(!view)}
        >
          {view ? <Visibility /> : <VisibilityOff />}
        </button>
      </div>
      <div className="w-full flex flex-row h-[56px]  pl-2  text-blueLigth-700 ">
        <input
          type={view ? 'text' : 'password'}
          className="w-full h-full text-primary font-semibold bg-inherit text-base sm:text-lg lg:text-xl"
          value={password}
          readOnly
        />
      </div>
    </section>
  );
};

export default Password;
