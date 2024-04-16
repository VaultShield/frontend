import { CardInfo } from 'components/CardsInfo';
import { Menu } from 'components/Menu';
import { GithubIcon } from 'components/svg/GithubIcon';

import { PadlockIcon, SecurityIcon } from 'components/svg/IconsCardsInfo';
export function Home() {

  return (
    <div className="text-white  w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <header className="bg-cinder-750 h-14 w-full flex justify-between py-4 md:p-4 rounded-none md:rounded-b-xl">
          <Menu />
        </header>
        <main className="h-[620px] lg:h-[700px] flex flex-col justify-center p-0 m-0 ">
          <section className="flex flex-col gap-4 ">
            <h1 className="text-cinder-100 text-7xl">VaultShield</h1>
            <p className="text-cinder-700 text-2xl">Password manager</p>
          </section>
        </main>
        <section className=" flex-col sm:flex-row flex items-center w-[300px] sm:w-full  py-10 h-32 px-6 md:px-6">
          <CardInfo title="Store your passwords">
            <PadlockIcon />
          </CardInfo>
          <CardInfo title="Export your passwords">
            <SecurityIcon />
          </CardInfo>
        </section>
        <footer className="flex justify-center pt-6 pb-2 border-b-2 border-cinder-750 w-full">
          <a href="https://github.com/VaultShield">
            <GithubIcon />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Home;
