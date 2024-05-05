export function SectionNotesCredential({ notes }: { notes: string }) {
  return (
    <section className="w-full text-base lg:text-lg sm:max-w-60 text-blueLigth-700 text-start pb-2 sm:pb-4 md:pb-0">
      {notes}
    </section>
  );
}
