import UserInfo from 'components/Settings/UserInfo';
import { HOME } from 'lib/routes';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store/userStore';

export default function Settings() {
  const navigate = useNavigate();
  const { isLogged } = useUserStore();
  if (!isLogged) navigate(HOME);
  return (
    <section className="flex flex-col items-center gap-10 w-full bg-white rounded-2xl my-5 mx-5">
      <UserInfo />
    </section>
  );
}
