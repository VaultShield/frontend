import { NavLink } from 'react-router-dom';

export function NavLinkDashboard({
  nameLink = ' My acounts',
  to = '/',
  children
}: {
  nameLink: string;
  to: string;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'bg-white bg-opacity-25 h-14 flex items-center p-1 rounded-full space-x-2 text-lg font-semibold cursor-pointer max-xl:flex  max-xl:justify-center'
          : ' hover:bg-white hover:bg-opacity-25 h-14  flex items-center p-1 rounded-full space-x-2 text-lg font-semibold cursor-pointer max-xl:flex  max-xl:justify-center'
      }
      to={to}
    >
      <div className="xl:bg-white xl:bg-opacity-25  aspect-square h-full flex items-center justify-center rounded-full ">
        {children}
      </div>
      <div className="max-xl:hidden">{nameLink}</div>
    </NavLink>
  );
}
