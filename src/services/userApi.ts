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

const register = async (payload: User) => {
  try {
    //const hashedPassword = await bcrypt.hash(payload.password, 10);
    const hashedPassword = CryptoJS.SHA256(payload.password).toString();
    const response = await api.post('/api/auth/register', {
      ...payload,
      password: hashedPassword
    });
    return response;
  } catch (err) {
    console.info(`%cError: ${ws.faceScreaming} %c${err}`, ws.style1, ws.style2);
    throw new Error('Registration failed');
  }
};

const login = async (credentials: User) => {
  try {
    const hashedPassword = CryptoJS.SHA256(credentials.password).toString();
    const response = await api.post('/api/auth/login', {
      ...credentials,
      password: hashedPassword
    });
    return response;
  } catch (err) {
    console.info(`%cError: ${ws.faceScreaming} %c${err}`, ws.style1, ws.style2);
    throw new Error('login failed');
  }
};

export default { register, login };
