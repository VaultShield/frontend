import CryptoJS from 'crypto-js';

import api from './api';
import ws from 'utils/warningSelf';

/**
 * Represents a user.
 */
export interface User {
  id?: number;
  username?: string;
  last_name?: string;
  name?: string;
  email?: string;
  password?: string;
  keyword?: string;
  organization?: string;
}

/**
 * The URL for the registration endpoint.
 * @type {string}
 */
const REGISTER_URL = import.meta.env.VITE_REGISTER_URL;
/**
 * The URL for the login endpoint.
 * @type {string}
 */
const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;

/**
 * Registers a user.
 * @param {User} payload - The user data to be registered.
 * @returns {Promise<any>} - The promise that resolves to the registration response.
 * @throws {Error} - If an error occurs during registration.
 */
const register = async (payload: User) => {
  try {
    const hashedPassword = CryptoJS.SHA256(payload.password).toString();
    const response = await api.post(REGISTER_URL, {
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

/**
 * Authenticates a user with the provided credentials.
 * @param {User} credentials - The user credentials for authentication.
 * @returns {Promise<any>} - The promise that resolves to the login response.
 * @throws {Error} - If an error occurs during authentication.
 */
const login = async (credentials: User) => {
  try {
    const hashedPassword = CryptoJS.SHA256(credentials.password).toString();
    const response = await api.post(LOGIN_URL, {
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
