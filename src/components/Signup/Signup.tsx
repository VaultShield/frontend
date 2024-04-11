import { useContext, useState, MouseEventHandler } from 'react';
import bcrypt from 'bcryptjs';
import { card, insideCard, btnDefault } from 'styles/tailwind.classes';
import InputBase from 'components/InputBase';
import { UserContext } from 'contexts/userContext';

const Signup = () => {
  //context
  const { addUser } = useContext(UserContext);
  //user variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister: MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    try {
      event.preventDefault();
      const passwordHash = bcrypt.hashSync(password, 10);
      const newUser = {
        email,
        password: passwordHash
      };
      await addUser(newUser);
    } catch (e) {
      //erro handler
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
        <InputBase
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={btnDefault} onClick={handleRegister}>
          Create Account
        </button>
        <div>
          <span>Already have an account?</span>
          <span className="ml-2">sign in</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
