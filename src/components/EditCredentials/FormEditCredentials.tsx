
interface EditCredentialsProps{
  account: string;
  userName: string;
  notes: string;
  password: string;
  onClose:() =>void;
  isOpen:boolean;
}

export function FormEditCredential({isOpen, onClose, account, userName, notes, password}:EditCredentialsProps) {
  return (
    <>
    {
      isOpen?(
        <div className="absolute h-screen w-screen top-0 left-0 z-30 flex items-center justify-center">
      <div onClick={onClose} className="absolute bg-black opacity-80 h-screen w-screen -z-10" />
      <div className="bg-bground-darkCard rounded-lg p-6 space-y-5 ">
        <div className="w-full flex justify-start text-xl font-semibold">
        <div className="ml-6">New Password</div>
        </div>
       
        <form className="w-[400px] flex items-center justify-center  rounded-lg flex-col  space-y-3 ">
          <div className=" flex-col items-start flex w-full ">

            <input type="text" className="bg-black w-full rounded-lg outline-none pl-3 h-12 placeholder:text-gray-600 " placeholder="Title" value={account}/>
          </div>
          <div className=" flex-col items-start flex w-full ">

            <input type="text" className="bg-black w-full rounded-lg outline-none pl-3 h-12 placeholder:text-gray-600 " placeholder="Username" value={userName} />
          </div>
          <div className=" flex-col items-start flex w-full ">

            <input type="password" className="bg-black w-full rounded-lg outline-none pl-3 h-12 placeholder:text-gray-600 " placeholder="Password" value={password} />
          </div>
          <div className=" flex-col items-start flex w-full ">

            <input type="text" className="bg-black w-full rounded-lg outline-none pl-3 h-12 placeholder:text-gray-600 " placeholder="Note" value={notes} />
          </div>
          <div className=" flex-col items-start flex w-full ">

            <button onClick={onClose} className="bg-shamrock-400 text-black w-full h-12 rounded-lg hover:bg-shamrock-600">
              Add Password
            </button>
          </div>
        </form>
      </div>

    </div>
      ):null
    }
    </>

    

  );
}
