import { IconEdit } from 'components/svg/IconEdit';
import { IconTrash } from 'components/svg/IconTrash';

export function SectionOptionsCredential() {
  return (
    <section className="w-full md:max-w-32 h-full flex justify-end items-center">
      <div
        className="flex w-32 gap-3 h-full items-end sm:items-center justify-end stroke-shamrock-50 dark:stroke-shamrock-100
    [&>button]:bg-shamrock-500 [&>button]:dark:bg-shamrock-600
    "
      >
        <button className=" w-9 p-2 rounded-xl hover:bg-shamrock-400 dark:hover:bg-shamrock-500 transition duration-300 ">
          <IconEdit />
        </button>
        <button className="  w-9 p-1 rounded-xl hover:bg-red-500 dark:hover:bg-red-500 transition duration-300 ">
          <IconTrash />
        </button>
      </div>
    </section>
  );
}
