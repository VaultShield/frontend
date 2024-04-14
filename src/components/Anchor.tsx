export function Anchor({
  direction = '',
  name
}: {
  direction: string;
  name: string;
}) {
  return (
    <a
      className=" cursor-pointer self-center rounded-lg text-center bg-cinder-500 w-full hover:bg-cinder-600 my-4 py-2 px-4 text-gray-100 "
      href={direction}
    >
      {name}
    </a>
  );
}
