interface ButtonSettingsProps {
  handleClick?: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonSettings = ({
  handleClick,
  text,
  type = 'button'
}: ButtonSettingsProps) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className="bg-primary w-full h-12 rounded-full text-white  font-semibold"
    >
      {text}
    </button>
  );
};

export default ButtonSettings;
