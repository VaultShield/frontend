type ButtonFormProps = {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function ButtonForm({ name, onClick }: ButtonFormProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blueLigth-700 text-white w-full h-12 rounded-lg hover:bg-blueLigth-600"
    >
      {name}
    </button>
  );
}
