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
          ? 'w-full dark:bg-shamrock-800  bg-shamrock-200 py-2 border-r-shamrock-500 dark:border-r-shamrock-400 border-r-4 text-start pl-10'
          : ' py-2 w-full transition-colors duration-200 hover:bg-shamrock-100 dark:hover:bg-shamrock-950  text-start pl-10'
      }
      to={to}
    >
      <div className="w-full flex items-center gap-4 text-lg h-11">
        <div className="w-6 fill-shamrock-50">{children}</div> {nameLink}
      </div>
    </NavLink>
  );
}
