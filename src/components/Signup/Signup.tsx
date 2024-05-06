import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useSeedWords } from 'hooks/useSeedWords';

import CopyToClipboard from './CopyToClipboard';
import RegisterForm from './RegisterForm';
interface RegisterProps {
  onClose: () => void;
  handleLogin: () => void;
}
const Signup = ({ onClose, handleLogin }: RegisterProps) => {
  const { seedWords, showWords, handleAddWords, handleSeedWords } =
    useSeedWords();
  return (
    <div className="absolute flex justify-center items-center right-0 top-0 h-screen w-screen text-white ">
      <div
        onClick={onClose}
        className="absolute bg-[#000000] opacity-80 h-screen w-screen "
      ></div>
      <div className="relative flex flex-col justify-center items-center bg-white w-full max-w-[57rem]  sm:h-[75%] h-full rounded-lg z-10 text-whitebg  font-semibold">
        <div className="absolute  text-white  w-full flex justify-end items-start top-0 pr-5 pt-5">
          <button
            onClick={showWords ? handleSeedWords : onClose}
            className="md:h-12 md:w-12 w-10 h-10 rounded-lg border-2 border-primary  text-primary border-opacity-15 hover:bg-primary hover:text-white flex justify-center items-center cursor-pointer z-20"
          >
            <CloseRoundedIcon />
          </button>
        </div>

        {showWords ? (
          <div className=" w-full h-[90%] flex flex-col justify-center items-center gap-5">
            <div className="font-bold text-2xl text-black">Seed words !</div>
            <div className="text-gray-400 mx-10">
              Please ensure to securely store the following words. You will need
              them in the exact order to recover your password in case of loss.
            </div>
            <ul className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-5 bg-primary bg-opacity-15 rounded-lg max-h-[70%] overflow-y-auto mx-10">
              {seedWords.map((word, i) => (
                <li
                  key={i}
                  className="flex items-center text-center rounded-lg sm:w-40 space-x-2 text-black"
                >
                  <span className="text-primary w-4">{i + 1}:</span>
                  <span className="text-black">{word}</span>
                </li>
              ))}
            </ul>
            <CopyToClipboard words={seedWords} />
          </div>
        ) : (
          <RegisterForm
            onClose={onClose}
            handleLogin={handleLogin}
            handleAddWords={handleAddWords}
            handleSeedWords={handleSeedWords}
            seedWords={seedWords}
            showWords={showWords}
          />
        )}
      </div>
    </div>
  );
};

export default Signup;
