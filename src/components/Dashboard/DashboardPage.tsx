import { useCredentials } from 'hooks/useCredentials';
import CardCredential from './Credentials/CardCredential';
import FormCredential from './Credentials/FormCredential';

const DashboardPage = () => {
  const {
    errors,
    handleSubmitAddCredential,
    handleSubmitEditCredential,
    listOfCredentials,
    handleChange,
    handleDeleteCredential,
    handleOpenForm,
    openForm,
    handleOpenEditForm,
    openEditForm,
    credential
  } = useCredentials();
  return (
    <main className="rounded-2xl w-full my-5 mx-5 flex flex-col items-center  max-w-[2100px]  pb-0 p-0 bg-blueLigth-200 overflow-x-hidden ">
      <div className="w-full pb-0">
        {openForm && (
          <FormCredential
            formTitle="New credential"
            credential={credential}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmitAddCredential}
            handleClose={handleOpenForm}
            buttonText="Add credential"
          />
        )}
        {openEditForm && (
          <FormCredential
            formTitle="Edit Credential"
            credential={credential}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmitEditCredential}
            handleClose={() => handleOpenEditForm(credential.id)}
            buttonText="Edit credential"
          />
        )}
        <section className="w-full text-start text-xl h-[70px] flex flex-colum gap-6 sm:items-center justify-center sm:justify-between  pt-6 ">
          <div className="text-2xl sm:text-4xl text-bground-dark w-full text-start pl-5 font-bold">
            My Credentials
          </div>
          <div className="pr-3">
            <button
              onClick={handleOpenForm}
              className="bg-blueLigth-700 sm:w-[170px] md:w-[200px] rounded-xl sm:rounded-3xl text-white px-3 sm:px-6 cursor-pointer py-1 sm:py-2 text-xl sm:text-sm md:text-lg font-medium flex justify-center gap-2"
            >
              + <article className="hidden sm:flex">New Credential</article>
            </button>
          </div>
        </section>
        <section className=" w-full rounded-xl mx-1 flex flex-col gap-4 pt-2 sm:pt-6 pb-4  px-4 ">
          {listOfCredentials.map((c) => (
            <CardCredential
              key={c.id}
              credential={c}
              handleDelete={() => handleDeleteCredential(c.credentialId)}
              handleOpenEditForm={() => handleOpenEditForm(c.id)}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default DashboardPage;
