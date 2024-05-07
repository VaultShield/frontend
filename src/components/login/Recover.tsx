import { useRecover } from 'hooks/useRecover';
import { CARD } from 'types/types';
import BackButton from './BackButton';
import NewPasswordCard from './NewPasswordCard';
import SeedsCard from './SeedsCard';
import UsernameCard from './UsernameCard';

interface RecoverProps {
  onClose: () => void;
}
export function Recover({ onClose }: RecoverProps) {
  const {
    card,
    username,
    newPassword,
    repNewPassword,
    seeds,
    errors,
    handleChange,
    handleChangeSeeds,
    handleSubmit,
    handleSubmitNewPassword,
    handleChangeCard,
    handleGoBack
  } = useRecover({ onClose });
  return (
    <div className="absolute flex justify-center items-center right-0 top-0 h-screen  w-screen  z-50 overflow-y-hidden">
      <form
        className="bg-white text-whitebg w-full h-full flex flex-col justify-center rounded-lg items-center p-6 space-y-5"
        onSubmit={handleSubmit}
      >
        <BackButton onClick={handleGoBack} />
        {card === CARD.seed && (
          <SeedsCard
            handleChangeSeeds={handleChangeSeeds}
            seeds={seeds}
          ></SeedsCard>
        )}
        {card === CARD.password && (
          <NewPasswordCard
            handleChange={handleChange}
            password={newPassword}
            repPassword={repNewPassword}
            handleSubmitNewPassword={handleSubmitNewPassword}
            errors={errors}
          />
        )}
        {card === CARD.username && (
          <UsernameCard
            handleChange={handleChange}
            handleChangeCard={handleChangeCard}
            username={username}
          />
        )}
      </form>
    </div>
  );
}
