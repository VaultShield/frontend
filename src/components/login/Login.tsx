import { card, insideCard, btnDefault } from 'styles/tailwind.classes';
import InputBase from '../InputBase';
import { useState } from 'react';

export function Login() {
  type InfoUser = {
    email: string;
    password: string;
  };
  const [infoUser, setInfoUser] = useState({
    email: '',
    password: ''
  });

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
          <a className="ml-2 cursor-pointer hover:underline">Sign up</a>
        </div>
      </form>
    </div>
  );
}
