import { Anchor } from './Anchor';
import { IconVaultShield } from './svg/IconVaultShield';
export function Menu() {
  return (
    <nav className="bg-indigo-950 h-full flex justify-between w-full items-center">
      <div className="w-[172px] flex">
        <IconVaultShield />
      </div>
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
    </nav>
  );
}
