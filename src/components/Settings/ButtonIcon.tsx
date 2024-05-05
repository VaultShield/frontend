import { ReactNode } from 'react';

interface ButtonIconProps {
  handleClick?: () => void;
  icon: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  text?: string;
}
const ButtonIcon = ({
  handleClick,
  icon,
  type = 'button',
  text
}: ButtonIconProps) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className="md:h-12 md:w-12 w-10 h-10 rounded-lg border-2 border-primary  text-primary border-opacity-15 hover:bg-primary hover:text-white flex justify-center items-center cursor-pointer z-20"
    >
      {icon}
      {text}
    </button>
  );
};

export default ButtonIcon;
