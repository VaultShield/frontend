import api from './api';
import ws from 'utils/warningSelf';

interface User {
  id?: number;
  username: string;
  name?: string;
  last_name?: string;
  email: string;
  active?: boolean;
  master_pass_id?: string;
}

const register = async (credentials: User[]) => {
  try {
    const response = await api.post('/api/register', credentials);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(
        `%cError: ${ws.faceScreaming} %c${err}`,
        ws.style1,
        ws.style2
      );
      throw new Error(err.message);
    }
  }
};

const login = async (credentials: User[]) => {
  try {
    const response = await api.post('/api/login', credentials);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(
        `%cError: ${ws.faceScreaming} %c${err}`,
        ws.style1,
        ws.style2
      );
      throw new Error(err.message);
    }
  }
};

export default { register, login };
