// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CardPassword } from 'components/CardPassword';
import Table from 'components/Table';
import { badgeMenuDashboard } from 'styles/tailwind.classes';

const Welcome = () => {
  return (
    <>
      <header className="w-full text-start bg-opacity-55 py-2 text-xl">
        <div className="pl-20">My acounts</div>
      </header>

      <div
        className={`${badgeMenuDashboard} flex flex-col items-start h-full mr-2 p-0`}
      >
        <Table />
        {/* 
            <CardPassword /> */}
      </div>
    </>
  );
};

export default Welcome;
