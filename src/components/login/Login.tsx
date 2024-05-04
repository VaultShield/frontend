import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useLogin } from 'hooks/useLogin';
import { useState } from 'react';
import { Recover } from './Recover';

interface LoginProps {
  onClose: () => void;
  handleLogin: () => void;
}

export function Login({ onClose, handleLogin }: LoginProps) {
  const [showRecover, setShowRecover] = useState(false);

  const { infoUser, errors, sendData, setInfoUser } = useLogin({ handleLogin });

  return (
    <div className="absolute flex justify-center items-center right-0 top-0 h-screen w-screen text-white ">
      <div
        onClick={onClose}
        className="absolute bg-[#000000] opacity-80 h-screen w-screen "
      ></div>

      <div className="flex flex-col justify-center bg-white w-[57rem] h-[75%] rounded-lg z-10 text-whitebg  font-semibold">
        <div className="  text-whitebg w-full flex justify-end items-start  pr-5 pt-5">
          <div className="cursor-pointer z-20">x</div>
        </div>
        <form className="w-full flex flex-col justify-center items-center space-y-4 px-56 h-full mt-[-2.84rem] text-black">
          <div className="text-4xl  mb-5">Welcome Back!</div>
          <div className="w-full flex items-center">
            <PersonRoundedIcon className="absolute ml-4 text-primary" />
            <input
              type="username"
              className="bg-primary bg-opacity-15  rounded-full h-12 w-full pl-12 outline-none placeholder:text-gray "
              placeholder="Username"
              value={infoUser.username}
              onChange={(e) =>
                setInfoUser({ ...infoUser, username: e.target.value })
              }
            />
            {errors.username && (
              <p className="text-red-500">{errors.username}</p>
            )}{' '}
          </div>
          <div className="w-full flex items-center">
            <KeyRoundedIcon className="absolute ml-4 text-primary" />
            <input
              type="password"
              className="bg-primary bg-opacity-15  rounded-full h-12 w-full pl-12 outline-none placeholder:text-gray "
              placeholder="Password"
              value={infoUser.password}
              onChange={(e) =>
                setInfoUser({ ...infoUser, password: e.target.value })
              }
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}{' '}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              sendData(infoUser);
            }}
            className="bg-primary w-full h-12 rounded-full text-white"
          >
            Login
          </button>
          {errors.error && <p className="text-red-500">{errors.error}</p>}{' '}
          <div>
            <div className="w-full flex justify-center text-black  font-medium ">
              Forget the password?&nbsp;{' '}
              <span
                onClick={() => setShowRecover(true)}
                className="text-primary font-semibold cursor-pointer"
              >
                Recover
              </span>
            </div>
          </div>
        </form>
      </div>
      <Recover isOpen={showRecover} onClose={() => setShowRecover(false)} />
    </div>
  );
}
