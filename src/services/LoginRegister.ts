import {
  ErrorMessage,
  RegisterRequest,
  type LoginRequest
} from 'types/apiTypes';

const URL = import.meta.env.VITE_BASE_URL;

const REGISTER_URL = URL + import.meta.env.VITE_REGISTER_URL;

const LOGIN_URL = URL + import.meta.env.VITE_LOGIN_URL;

export const register = async (payload: RegisterRequest) => {
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
    if (!res.ok) {
      const errorMessage = await res.json();
      throw new Error(errorMessage.message);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error((err as ErrorMessage).message);
  }
};

export const login = async (credentials: LoginRequest) => {
  try {
    const res = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password
      })
    });

    if (!res.ok) {
      const errorMessage = await res.json();
      throw new Error(errorMessage.message);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error((err as ErrorMessage).message);
  }
};
