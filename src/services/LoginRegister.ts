import { type LoginRequest, RegisterRequest } from 'types/apiTypes';

const URL = import.meta.env.VITE_BASE_URL;

const REGISTER_URL = URL + import.meta.env.VITE_REGISTER_URL;

const LOGIN_URL = URL + import.meta.env.VITE_LOGIN_URL;

const register = async (payload: RegisterRequest) => {
  try {
    const res = await fetch(REGISTER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: payload.username,
        password: payload.password,
        email: payload.email
      })
    });
    const data = await res.json();
    if (res.ok) return '200';
    return data;
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};

const login = async (credentials: LoginRequest) => {
  try {
    const res = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password
      })
    });

    if (!res.ok) return [new Error(`Error uploading file ${res.statusText}`)];
    const data = await res.json();
    return data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

export default { register, login };
