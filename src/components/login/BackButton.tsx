import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

interface BackButtonProps {
  onClick: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <div className="w-full flex justify-start">
      <div
        onClick={onClick}
        className="h-12 w-12 rounded-lg border-2 border-primary  text-primary border-opacity-15 hover:bg-primary hover:text-white flex justify-center items-center cursor-pointer"
      >
        <KeyboardArrowLeftRoundedIcon />
      </div>
    </div>
  );
};

export default BackButton;
