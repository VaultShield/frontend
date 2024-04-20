import { card, insideCard, btnDefault } from 'styles/tailwind.classes';
import InputBase from '../InputBase';
import { useState, useContext } from 'react';
import { UserContext } from 'contexts/userContext';
import { validateForm } from 'utils/validations';
import { Link, useNavigate } from 'react-router-dom';
import { NotificationContext } from 'contexts/notificationContext';

interface ErrorsForm {
  email?: string;
  password?: string;
  error?: string;
}

export function Login() {
  type InfoUser = {
    email: string;
    password: string;
  };
  const navigate = useNavigate();
  const [infoUser, setInfoUser] = useState({
    email: '',
    password: ''
  });
  //contexts
  const { loginUser } = useContext(UserContext);
  const { showNotification } = useContext(NotificationContext);

  const [errors, setErrors] = useState<ErrorsForm>({});

  const sendData = async (infoUser: InfoUser) => {
    try {
      const errorsForm: ErrorsForm = validateForm([
        { name: 'email', value: infoUser.email, required: true },
        {
          name: 'password',
          value: infoUser.password,
          required: true,
          minLength: 8
        }
      ]);

      setErrors(errorsForm);
      if (!errorsForm.email && !errorsForm.password) {
        await loginUser(infoUser);
        showNotification({
          message: 'Registration successfuly!',
          variant: 'success'
        });
        navigate('/');
      }
    } catch (err) {
      if (err instanceof Error) setErrors({ error: err.message });
      showNotification({
        message: 'Error in registration!',
        variant: 'danger'
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className={card}>
        <form className={insideCard}>
          <div>
            <h2 className="dark:text-gray-100 text-lg">Acount Login</h2>
            <p className="dark:text-gray-100"></p>
          </div>
          <InputBase
            label="Email"
            type="email"
            placeholder="example@..."
            value={infoUser.email}
            onChange={(e) =>
              setInfoUser({ ...infoUser, email: e.target.value })
            }
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}{' '}
          <InputBase
            label="Password"
            type="password"
            value={infoUser.password}
            onChange={(e) =>
              setInfoUser({ ...infoUser, password: e.target.value })
            }
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}{' '}
          <button
            onClick={(e) => {
              e.preventDefault();
              sendData(infoUser);
            }}
            className={btnDefault}
          >
            Login
          </button>
          {errors.error && <p className="text-red-500">{errors.error}</p>}{' '}
          <div>
            <span>You don't have an account?</span>

            <Link
              className="ml-2 hover:underline hover:text-cinder-600 text-cinder-400"
              to="/signup"
            >
              signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
