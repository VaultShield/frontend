import { Menu } from 'components/Menu';
import { GithubIcon } from 'components/svg/GithubIcon';
const Home = () => {
  return (
    <div className="text-white border-b-2 border-violet-800 w-full h-full">
      <div className="">
        <header className="bg-indigo-950 h-14 flex justify-between p-4">
          <Menu />
        </header>
        <main className="h-[600px] flex justify-center items-center">
          <section className="flex flex-col gap-4">
            <h1 className="text-cinder-100 text-7xl">VaultShield</h1>
            <p className="text-cinder-400 text-2xl">Password manager</p>
          </section>
        </main>
        <footer className="flex justify-center py-4">
          <a href="https://github.com/VaultShield">
            <GithubIcon />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Home;
