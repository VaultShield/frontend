import { Anchor } from 'components/Anchor';
import { GithubIcon } from 'components/svg/GithubIcon';
export function Home() {
  return (
    <div className="text-white border-b-2 border-violet-800 w-full h-full">
      <div className="">
        <header className="bg-indigo-950 h-14 flex justify-between p-4">
          <div className="w-[172px] flex">VaultShield</div>
          <ul>
            <li>
              <a className="hover:underline text-cinder-100" href="/">
                Home
              </a>
            </li>
          </ul>
          <ul className="flex gap-4 w-[172px]">
            <li>
              <Anchor direction="/login" name="Login" />
            </li>

            <li>
              <Anchor direction="/signup" name="Signup" />
            </li>
          </ul>
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
}
