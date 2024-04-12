import bcrypt from 'bcryptjs';

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
    //encrypt password
    const passwordHash = bcrypt.hashSync(payload.password, 10);
    //create a new user with password hashed
    const newUser = {
      email: payload.email,
      password: passwordHash
    };
    const response = await api.post('/api/register', newUser);
    return response;
  } catch (err) {
    console.info(`%cError: ${ws.faceScreaming} %c${err}`, ws.style1, ws.style2);
    throw new Error('Registration failed');
  }
};

const login = async (credentials: User[]) => {
  try {
    const response = await api.post('/api/login', credentials);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.info(
        `%cError: ${ws.faceScreaming} %c${err}`,
        ws.style1,
        ws.style2
      );
      throw new Error(err.message);
    }
  }
};

export default { register, login };
