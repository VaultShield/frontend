import { btnDefault } from 'styles/tailwind.classes';
import InputBase from '../InputBase';
import { useLogin } from 'hooks/useLogin';

interface LoginProps {
  handleLogin: () => void;
}

export function Login({ handleLogin }: LoginProps) {
  const { infoUser, errors, sendData, handleSignupClick, setInfoUser } =
    useLogin({ handleLogin });

  return (
    <div className="flex flex-col justify-center items-center p-0 m-0 ">
      <div className="border rounded-md shadow-xl h-max w-[360px] md:w-6/12 m-0 px-4 pb-2 dark:bg-zinc-900 dark:border-zinc-800 dark:text-white flex flex-col">
        <form className="flex justify-evenly flex-col rounded-md dark:bg-zinc-700 h-[420px] mt-9 w-full px-2">
          <div>
            <h2 className="dark:text-gray-100 text-lg">Acount Login</h2>
            <p className="dark:text-gray-100"></p>
          </div>
          <InputBase
            label="Username"
            type="username"
            placeholder="username ..."
            value={infoUser.username}
            onChange={(e) =>
              setInfoUser({ ...infoUser, username: e.target.value })
            }
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}{' '}
          <InputBase
            label="Password"
            type="password"
            value={infoUser.password}
            onChange={(e) =>
              setInfoUser({ ...infoUser, password: e.target.value })
            }
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}{' '}
          <button
            onClick={(e) => {
              e.preventDefault();
              sendData(infoUser);
            }}
            className={btnDefault}
          >
            Login
          </button>
          {errors.error && <p className="text-red-500">{errors.error}</p>}{' '}
          <div>
            <span>You don't have an account?</span>

            <span
              className="ml-2 hover:underline hover:text-cinder-600 text-cinder-400 cursor-pointer"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleSignupClick(e)
              }
            >
              signup
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
