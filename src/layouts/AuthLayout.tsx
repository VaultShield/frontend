import { Outlet } from 'react-router-dom';
import 'layouts/authLayout.css';

const AuthLayout = () => {
  return (
    <div className="authLayout">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
