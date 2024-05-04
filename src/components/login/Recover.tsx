import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useState } from 'react';
interface RecoverProps {
  onClose: () => void;
}
export function Recover({ onClose }: RecoverProps) {
  const [userCorrect, setUserCorrect] = useState('');

  return (
    <div className="absolute flex justify-center items-center right-0 top-0 h-screen  w-screen  z-50 ">
      <div className="bg-white text-whitebg w-full h-full flex flex-col justify-center rounded-lg items-center p-6 space-y-5">
        <div className="w-full flex justify-start">
          <div
            onClick={() => {
              userCorrect ? setUserCorrect('') : onClose();
            }}
            className="h-12 w-12 rounded-lg border-2 border-primary  text-primary border-opacity-15 hover:bg-primary hover:text-white flex justify-center items-center cursor-pointer"
          >
            <KeyboardArrowLeftRoundedIcon />
          </div>
        </div>

        {userCorrect === 'seed' ? (
          <div className="w-full h-full  flex flex-col justify-center items-center space-y-5">
            <div className="font-bold text-2xl text-black">
              Enter All Words!
            </div>
            <div className="text-gray-400">
              Enter the words we gave you when you registered in the same order.
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-5 bg-primary bg-opacity-15 rounded-lg">
              {Array.from({ length: 15 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center text-center rounded-lg sm:w-40 space-x-2 text-black"
                >
                  <div className="text-black w-4">{index + 1}</div>
                  <input
                    type="text"
                    className="rounded-lg h-12 w-32 bg-white outline-none pl-2"
                  />
                </div>
              ))}
            </div>

            <div className="w-full max-w-[30rem] ">
              <button
                onClick={() => setUserCorrect('password')}
                className="bg-primary text-white h-12 w-full rounded-full font-semibold"
              >
                Recover
              </button>
            </div>
          </div>
        ) : userCorrect === 'password' ? (
          <div className="w-full h-full flex flex-col justify-center items-center space-y-5">
            <div className="font-bold text-black text-2xl">
              Enter your new password
            </div>
            <div className="w-full max-w-[30rem] flex items-center">
                <KeyRoundedIcon className="absolute ml-4 text-primary" />{' '}
                <input
                  type="text"
                  className="bg-primary bg-opacity-15 text-black rounded-full h-12 w-full pl-12 outline-none placeholder:text-gray "
                  placeholder="New Password"
                />
              </div>{' '}
              <div className="w-full max-w-[30rem] ">
                <button
                  onClick={() => setUserCorrect('')}
                  className="bg-primary text-white h-12 w-full rounded-full font-semibold"
                >
                  Continue
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-center space-y-5">
              <div className="font-bold text-2xl text-black">
                Enter your username
              </div>
              <div className="w-full max-w-[30rem] flex items-center">
                  {' '}
                  <PersonRoundedIcon className="absolute ml-4 text-primary" />
                  <input
                    type="text"
                    className="bg-primary bg-opacity-15 text-black rounded-full h-12 w-full pl-12 outline-none placeholder:text-gray "
                    placeholder="Username"
                  />
                </div>
                <div className="w-full max-w-[30rem]">
                  <button
                    onClick={() => setUserCorrect('seed')}
                    className="bg-primary text-white h-12 w-full rounded-full font-semibold"
                  >
                    Continue
                  </button>
                </div>
              </div>
        )}
      </div>
    </div>
  );
}
