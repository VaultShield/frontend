import CryptoJS from 'crypto-js';

import api from './api';
import ws from 'utils/warningSelf';

export interface User {
  id?: number;
  username?: string;
  last_name?: string;
  name?: string;
  email: string;
  password: string;
  keyword?: string;
  organization?: string;
}

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

const register = async (payload: User) => {
  try {
    //const hashedPassword = await bcrypt.hash(payload.password, 10);
    const hashedPassword = CryptoJS.AES.encrypt(
      payload.password,
      SECRET_KEY
    ).toString();
    const response = await api.post('/api/auth/register', {
      ...payload,
      password: hashedPassword
    });
    return response;
  } catch (err) {
    console.info(
      `%cError: ${ws.faceScreaming} %c${err.response.data.error}`,
      ws.style1,
      ws.style2
    );
    throw new Error(err.response.data.error);
  }
};

const login = async (credentials: User) => {
  try {
    const hashedPassword = CryptoJS.AES.encrypt(
      credentials.password,
      SECRET_KEY
    ).toString();
    const response = await api.post('/api/auth/login', {
      ...credentials,
      password: hashedPassword
    });
    return response;
  } catch (err) {
    console.info(
      `%cError: ${ws.faceScreaming} %c${err.response.data.error}`,
      ws.style1,
      ws.style2
    );
    throw new Error(err.response.data.error);
  }
};

export default { register, login };
