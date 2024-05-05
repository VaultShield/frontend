import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

interface OptionProps {
  setEditCredential: (show: boolean) => void;
}

export function SectionOptionsCredential({ setEditCredential }: OptionProps) {
  return (
    <section className="w-full md:max-w-32 h-full flex justify-end items-center">
      <div
        className="flex w-32 gap-3 h-full items-end sm:items-center justify-end stroke-shamrock-50 
    [&>button]:bg-blueLigth-700
    "
      >
        <button
          onClick={() => setEditCredential(true)}
          className=" w-10 h-10 p-1 rounded-xl hover:bg-blueLigth-600  transition duration-300 "
        >
          <ModeEditOutlineIcon />
        </button>
        <button className="  w-10 h-10 p-1 rounded-xl hover:bg-red-500 transition duration-300 ">
          <DeleteForeverIcon />
        </button>
      </div>
    </section>
  );
}
