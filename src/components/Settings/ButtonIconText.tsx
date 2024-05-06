import { ReactNode } from 'react';

interface ButtonIconTextProps {
  handleClick?: () => void;
  icon: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  text?: string;
}
const ButtonIconText = ({
  handleClick,
  icon,
  type = 'button',
  text
}: ButtonIconTextProps) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className="text-primary border border-primary border-opacity-15 rounded-full flex px-3 py-2 gap-2 items-center font-semibold text-lg"
    >
      {icon}
      {text}
    </button>
  );
};

export default ButtonIconText;
