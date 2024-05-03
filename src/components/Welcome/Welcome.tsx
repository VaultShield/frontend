import { CardCredential } from 'components/CardCredential';
import { badgeMenuDashboard } from 'styles/tailwind.classes';
import { useState } from 'react';
import { FormCreateCredential } from 'components/CreateCredential/FormCreateCredential';
import { FormEditCredential } from 'components/EditCredentials/FormEditCredentials';
const Welcome = () => {
  const [newCredential, setNewCredential] = useState(false);

  return (
    <div className="w-full pt-4 md:pl-2 sm:pr-4 lg:pr-8">
      <header className="w-full text-start  pt-4 pb-8 text-xl flex justify-between relative">
        <div className="text-2xl text-shamrock-800 dark:text-shamrock-50 w-full text-center">
          My Credentials
        </div>
        <div className="absolute right-5">
          <button
            onClick={() => setNewCredential(true)}
            className="bg-white rounded-3xl text-cinder-900 px-4 cursor-pointer py-2 text-sm"
          >
            new credential
          </button>
        </div>
      </header>

      <main
        className={`${badgeMenuDashboard} flex flex-col items-start h-full mr-2 p-0`}
      >
       <FormCreateCredential isOpen={newCredential} onClose={()=>setNewCredential(false)} />
        {/* <Table /> */}
        <section className=" dark:border-shamrock-800 border-shamrock-500 border-opacity-45 border-t-2 w-full h-full max-w-[1150px] rounded-xl mx-1">
          <CardCredential
            account="Google"
            notes="Account of my mother"
            password="mypassword-extended"
            userName="example-extend@example.com"
           />
          <CardCredential
            account="Discord"
            notes="Account of my dad"
            password="mypassword"
            userName="example@......"
          />
          <CardCredential
            account="GitHub"
            notes="-"
            password="mypassword"
            userName="example-developer@......"
          />
          <CardCredential
            account="Netflix"
            notes="-"
            password="mypassword"
            userName="example-developer@......"
          />

          <CardCredential
            account="Netflix"
            notes="-"
            password="mypassword"
            userName="example-developer@......"
          />

          <CardCredential
            account="Netflix"
            notes="-"
            password="mypassword"
            userName="example-developer@......"
          />

          <CardCredential
            account="Netflix"
            notes="-"
            password="mypassword"
            userName="example-developer@......"
          />
        </section>
      </main>
    </div>
  );
};

export default Welcome;
