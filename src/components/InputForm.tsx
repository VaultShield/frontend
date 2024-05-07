import { InputFormProps } from 'types/Forms';
export function InputForm({
  type,
  placeholder,
  value,
  onChange,
  icon,
  iconOnlyForPassword,
  name,
  id
}: InputFormProps) {
  return (
    <label className="bg-primary bg-opacity-15 text-[#45ADB0] rounded-full h-12  flex px-4 py-3 gap-3 w-full  outline-none placeholder:text-grayr ">
      {icon}
      <input
        type={type}
        className="self-center flex flex-col items-start w-full bg-transparent focus:outline-none "
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
      />
      {iconOnlyForPassword}
    </label>
  );
}
