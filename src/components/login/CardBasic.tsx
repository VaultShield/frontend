import ButtonSettings from 'components/Settings/ButtonSettings';
import { ReactNode } from 'react';

interface CardBasicProps {
  handleChangeCard?: () => void;
  text: string;
  buttonText: string;
  children: ReactNode;
  buttonType?: 'button' | 'submit' | 'reset';
}

const CardBasic = ({
  handleChangeCard,
  buttonText,
  text,
  children,
  buttonType
}: CardBasicProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-5">
      <div className="font-bold text-2xl text-black">{text}</div>
      <div className="w-full max-w-[30rem] flex items-center">{children}</div>
      <div className="w-full max-w-[30rem]">
        <ButtonSettings
          handleClick={handleChangeCard}
          text={buttonText}
          type={buttonType}
        />
      </div>
    </div>
  );
};

export default CardBasic;
