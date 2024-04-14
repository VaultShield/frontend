import { card, insideCard, btnDefault } from 'styles/tailwind.classes';
import InputBase from '../InputBase';
import { useState, useContext } from 'react';
import { UserContext } from 'contexts/userContext';
import { validateForm } from 'utils/validations';
import { Link } from 'react-router-dom';
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
  const [infoUser, setInfoUser] = useState({
    email: '',
    password: ''
  });
  const { loginUser } = useContext(UserContext);
  const [errors, setErrors] = useState<ErrorsForm>({});
  /*
  const sendData = (infoUser: InfoUser) => {
    console.log(infoUser);
    fetch('url', {
      method: 'POST',
      body: JSON.stringify(infoUser)
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(response.status.toString());
      })
      .then((data) => {
        const value = JSON.parse(data);
        console.log(value);
      });
  };*/
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
      }
    } catch (err) {
      if (err instanceof Error) setErrors({ error: err.message });
    }
  };

  return (
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
          onChange={(e) => setInfoUser({ ...infoUser, email: e.target.value })}
        />
        <InputBase
          label="Password"
          type="password"
          value={infoUser.password}
          onChange={(e) =>
            setInfoUser({ ...infoUser, password: e.target.value })
          }
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            sendData(infoUser);
          }}
          className={btnDefault}
        >
          Login
        </button>
        <div>
          <span>You don't have an account??</span>

          <Link
            className="ml-2 hover:underline hover:text-cinder-600 text-cinder-400"
            to="/signup"
          >
            signup
          </Link>
        </div>
      </form>
    </div>
  );
}
