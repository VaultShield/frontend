import { CardInfo } from 'components/CardsInfo';
import { Login } from 'components/login';
import Signup from 'components/Signup';
import { PadlockIcon, SecurityIcon } from 'components/svg/IconsCardsInfo';
import { useState } from 'react';

export function Home() {
  const [islogin, setIsLogin] = useState(true);
  const handleLogin = () => {
    setIsLogin(!islogin);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full p-0 mt-10 md:m-0">
      <div className="w-6/12 m-0 p-0 ">
        <main className="h-auto   flex flex-col justify-center items-center p-0 m-0 ">
          <section className="flex flex-col gap-4 ">
            <h1 className="text-cinder-100 text-7xl">VaultShield</h1>
            <p className="text-cinder-700 text-2xl">Password manager</p>
          </section>
        </main>
        <section className="flex flex-col justify-center  items-center md:flex-row mb-6  p-0 py-10 h-32 md:px-6">
          <CardInfo title="Store your passwords">
            <PadlockIcon />
          </CardInfo>
          <CardInfo title="Export your passwords">
            <SecurityIcon />
          </CardInfo>
        </section>
      </div>
      <div className="w-6/12 m-0 p-0">
        {islogin ? (
          <Login handleLogin={handleLogin} />
        ) : (
          <Signup handleSignup={handleLogin} />
        )}
      </div>
    </div>
  );
}

export default Home;
