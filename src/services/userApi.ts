import api from './api';

/**
 * Represents a user.
 */
export interface User {
  id?: number;
  username: string;
  last_name?: string;
  name?: string;
  email?: string;
  password: string;
  keyword?: string;
  organization?: string;
}

const URL = import.meta.env.VITE_URL;

const REGISTER_URL = URL + import.meta.env.VITE_REGISTER_URL;

const LOGIN_URL = URL + import.meta.env.VITE_LOGIN_URL;

const register = async (payload: User) => {
  try {
    // const res = await fetch(REGISTER_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     username: payload.username,
    //     password: payload.password,
    //     email: payload.email
    //   })
    // });

    // if (!res.ok) return [new Error(`Error uploading file ${res.statusText}`)];
    // const data = await res.json();
    // console.log({ data });
    //return data;
    const response = await api.post(REGISTER_URL, {
      ...payload
    });

    return response;
  } catch (err: any) {
    console.log({ err });
    throw new Error(err.response.data.message);
  }
};

const login = async (credentials: User) => {
  try {
    const response = await api.post(LOGIN_URL, {
      ...credentials
    });
    return response;
  } catch (err) {
    throw new Error('ERROR');
  }
};

export default { register, login };
