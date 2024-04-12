import { useContext, useState, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

import { card, insideCard, btnDefault } from 'styles/tailwind.classes';
import InputBase from 'components/InputBase';
import { UserContext } from 'contexts/userContext';
import { validateForm } from 'utils/validations';

interface ErrorsForm {
  email?: string;
  password?: string;
  error?: string;
}

const Signup = () => {
  //context
  const { addUser } = useContext(UserContext);
  //user variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //validation error;
  const [errors, setErrors] = useState<ErrorsForm>({});

  const handleRegister: MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    try {
      event.preventDefault();

      const errorsForm: ErrorsForm = validateForm([
        { name: 'email', value: email, required: true },
        { name: 'password', value: password, required: true, minLength: 8 }
      ]);

      setErrors(errorsForm);

      if (!errorsForm.email && !errorsForm.password) {
        const newUser = {
          email,
          password
        };
        await addUser(newUser);
      }
    } catch (err) {
      if (err instanceof Error) setErrors({ error: err.message });
    }
  };

  return (
    <div className={card}>
      <div className={insideCard}>
        <div>
          <h2 className="dark:text-gray-100 text-lg">
            Create a VaultShield account
          </h2>
          <p className="dark:text-gray-100"> one account for everything!</p>
        </div>
        <InputBase
          label="Email"
          type="email"
          placeholder="input your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}{' '}
        <InputBase
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}{' '}
        <button className={btnDefault} onClick={handleRegister}>
          Create Account
        </button>
        {errors.error && <p className="text-red-500">{errors.error}</p>}{' '}
        <div>
          <span>Already have an account?</span>
          <Link
            className="ml-2 hover:underline hover:text-cinder-500"
            to="/Login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
