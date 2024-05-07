interface AccountProps {
  account: string;
  title: string;
}

const Account = ({ account, title }: AccountProps) => {
  return (
    <section className="w-full flex flex-col justify-start ">
      <span className="w-full text-xl text-blueLigth-700 text-start font-bold">
        {account}
      </span>
      <span className="w-full text-base lg:text-lg text-blueLigth-900 text-start font-semibold">
        {title}
      </span>
    </section>
  );
};

export default Account;
