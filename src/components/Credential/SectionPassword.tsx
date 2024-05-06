import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { useViewPassword } from 'hooks/useViewPassword';

export function SectionPasswordCredential({ password }: { password: string }) {
  const { view, viewPassword } = useViewPassword();
  return (
    <section className="py-2 flex  items-center w-full text-start ">
      <div className="w-6 pr-2 flex items-center">
        <button onClick={viewPassword}>
          {!view && <VisibilityIcon htmlColor="#119FA4" />}
          {view && <VisibilityOffIcon htmlColor="#119FA4" />}
        </button>
      </div>
      <div className="w-full h-[56px]  pl-2  text-blueLigth-700 ">
        <input
          type={view ? 'text' : 'password'}
          className="w-full h-full  !outline-none bg-inherit text-base sm:text-lg lg:text-xl"
          readOnly
          value={password}
        />
      </div>
    </section>
  );
}
