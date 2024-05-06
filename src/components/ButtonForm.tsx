type ButtonFormProps = {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function ButtonForm({ name, onClick }: ButtonFormProps) {
  return (
    <button
      onClick={onClick}
      className=" text-white w-full h-12 rounded-3xl hover:bg-blueLigth-600 bg-[#45ADB0] "
    >
      {name}
    </button>
  );
}
