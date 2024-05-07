import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import InputSettings from 'components/Settings/InputSettings';
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

      <div className="flex flex-col justify-center items-center bg-white w-full max-w-[57rem]  md:h-[85%] lg:h-[75%] h-full rounded-lg z-10 text-whitebg  font-semibold">
        <div className="  text-white  w-full flex justify-end items-start  pr-5 pt-5">
          <button
            onClick={onClose}
            className="md:h-12 md:w-12 w-10 h-10 rounded-lg border-2 border-primary  text-primary border-opacity-15 hover:bg-primary hover:text-white flex justify-center items-center cursor-pointer z-20"
          >
            <CloseRoundedIcon />
          </button>
        </div>
        <form className="w-full flex flex-col justify-center items-center space-y-4 px-5   h-full mt-[-2.84rem] text-black">
          <div className="text-4xl  mb-5">Welcome Back!</div>
          <div className="w-full max-w-[30rem]  flex items-center">
            <InputSettings
              value={infoUser.username}
              type="username"
              handleChange={(e) =>
                setInfoUser({ ...infoUser, username: e.target.value })
              }
              placeholder="Username"
              isEditing
              error={errors.password ?? ''}
              icon={<PersonRoundedIcon />}
              name="username"
            />
          </div>
          <div className="w-full max-w-[30rem]  flex items-center">
            <InputSettings
              value={infoUser.password}
              type="password"
              handleChange={(e) =>
                setInfoUser({ ...infoUser, password: e.target.value })
              }
              placeholder="Password"
              isEditing
              error={errors.password ?? ''}
              icon={<KeyRoundedIcon />}
              name="password"
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              sendData(infoUser);
            }}
            className="bg-primary w-full max-w-[30rem]  h-12 rounded-full text-white"
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
      {showRecover && <Recover onClose={() => setShowRecover(false)} />}
    </div>
  );
}
