export function SectionAccountCredential({
  account,
  userName
}: {
  account: string;
  userName: string;
}) {
  return (
    <section className="w-full min-w-20 sm:min-w-60 md:min-w-72">
      <div className="max-w-20 w-full text-base text-start dark:text-shamrock-300 text-shamrock-500 ">
        {account}
      </div>
      <div className="w-full text-base lg:text-lg dark:text-shamrock-50 text-shamrock-700 text-start">
        {userName}
      </div>
    </section>
  );
}
