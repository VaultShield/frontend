import {
  wrapperInputBorderBottom,
  inputTransparent
} from 'styles/tailwind.classes';

interface InputBaseProps {
  type: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputBase = ({
  type,
  label,
  placeholder,
  value,
  onChange
}: InputBaseProps) => {
  return (
    <div className={wrapperInputBorderBottom}>
      <label className="block dark:text-gray-100 text-sm mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={inputTransparent}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBase;
