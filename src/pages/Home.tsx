import Signup from 'components/Signup';
import { Login } from 'components/login';
import { useState } from 'react';
import LogoVaultShield from '../../public/Logo_ValutShield.png';

export function Home() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  w-screen h-screen degradado text-white ">
      <div className="max-lg:hidden flex items-center justify-center">
        <img src={LogoVaultShield} alt="Logo_ValutShield" />
      </div>
      <div className="">
        <div className="flex flex-col justify-center items-center h-full  font-semibold text-lg space-y-3 ">
          <div className="text-4xl font-semibold text-whitebg mb-6 ">
            Join Now!
          </div>
          <div className="flex items-center w-full  px-[15%] mb-4 ">
            <button
              onClick={() => setShowRegister(true)}
              className="flex items-center justify-center w-full h-12 shadow-lg bg-primary hover:bg-opacity-80 text-white  rounded-full group "
            >
              Register
            </button>
          </div>

          <div className="text-whitebg font-medium">
            Alredy have an account?
          </div>
          <div className="flex items-center w-full  px-[15%] mb-4 ">
            <button
              onClick={() => setShowLogin(true)}
              className="flex items-center justify-center w-full h-12 shadow-lg bg-white bg-opacity-25 hover:bg-opacity-30  text-whitebg  rounded-full group "
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {showRegister && (
        <Signup
          onClose={() => setShowRegister(false)}
          handleLogin={() => setShowLogin(true)}
        />
      )}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          handleLogin={() => setShowLogin(!showLogin)}
        />
      )}
    </div>
  );
}

export default Home;
