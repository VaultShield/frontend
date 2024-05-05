import { InputFormProps } from 'types/Forms';
export function InputForm({
  type,
  placeholder,
  value,
  onChange
}: InputFormProps) {
  return (
    <input
      type={type}
      className="bg-blueLigth-100  placeholder:text-blueLigth-700 w-full rounded-lg outline-none pl-3 h-12 text-blueLigth-700  "
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
