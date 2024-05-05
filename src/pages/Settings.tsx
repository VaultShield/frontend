import UserInfo from 'components/Settings/UserInfo';
import { HOME } from 'lib/routes';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store/userStore';

export default function Settings() {
  const navigate = useNavigate();
  const { isLogged } = useUserStore();
  if (!isLogged) navigate(HOME);
  return (
    <section className="flex flex-col items-center p-10 gap-10 w-full">
      <UserInfo />
    </section>
  );
}
