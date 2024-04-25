export function FormCreateCredential() {
  const send = () => console.log('send info');
  return (
    <form className="w-[400px] flex items-center justify-center">
      <div className="w-full flex flex-col px-4  gap-10">
        <div>
          Name of Account
          <input className="text-cinder-800 ml-4" type="text" />
        </div>
        <div>
          Name User
          <input className="text-cinder-800 ml-4" type="text" />
        </div>
        <div>
          Password
          <input className="text-cinder-800 ml-4" type="text" />
        </div>
        <div>
          <button
            onClick={() => send()}
            className="bg-white rounded-3xl text-cinder-900 px-4 cursor-pointer py-1 text-sm"
          >
            Okey!
          </button>
        </div>
      </div>
    </form>
  );
}
