interface NotesProps {
  note: string;
}
const Notes = ({ note }: NotesProps) => {
  return (
    <section className="w-full text-base lg:text-lg sm:max-w-60 text-blueLigth-700 text-start m-2 pb-2 sm:pb-4 md:pb-0 ">
      {note}
    </section>
  );
};

export default Notes;
