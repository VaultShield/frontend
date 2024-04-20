import { CardInfo } from 'components/CardsInfo';

import { PadlockIcon, SecurityIcon } from 'components/svg/IconsCardsInfo';
export function Home() {
  return (
    <div>
      <main className="h-auto flex flex-col justify-center p-0 m-0 ">
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
    </div>
  );
}

export default Home;
