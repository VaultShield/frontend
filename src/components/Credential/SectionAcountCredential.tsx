export function SectionAccountCredential({
  account,
  userName
}: {
  account: string;
  userName: string;
}) {
  return (
    <section className="w-full min-w-20 sm:min-w-60 md:min-w-72">
      <div className="max-w-28 w-full text-xl text-start  text-blueLigth-700">
        {account}
      </div>
      <div className="w-full text-base lg:text-lg text-blueLigth-900 text-start">
        {userName}
      </div>
    </section>
  );
}
