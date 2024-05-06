import { RecoverNewPasswordRequest, RecoverRequest } from 'types/apiTypes';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const RECOVER_URL = BASE_URL + import.meta.env.VITE_RECOVER_URL;

export async function getRecoverToken(username: string, seedphrase: string[]) {
  const recoverRequest: RecoverRequest = {
    username,
    seedphrase
  };
  try {
    const response = await fetch(RECOVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recoverRequest)
    });
    if (!response.ok) {
      const errorMessage = await response.json();
      if (errorMessage.token === null) {
        return { error: { message: 'Incorrect seeds words' } };
      }
      return { error: errorMessage };
    }
    const data = await response.json();
    console.log({ data });
    return data.token;
  } catch (error) {
    console.log((error as Error).message);
    throw new Error((error as Error).message || 'Error');
  }
}

export async function recoverPassword(token: string, password: string) {
  const requestNewPassword: RecoverNewPasswordRequest = {
    newPassword: password
  };
  try {
    const response = await fetch(RECOVER_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Recover: token
      },
      body: JSON.stringify(requestNewPassword)
    });
    console.log(response);
    if (!response.ok) {
      const errorMessage = await response.json();
      // if (errorMessage.token === null) {
      //   return { error: { message: 'Incorrect seeds words' } };
      // }
      return { error: errorMessage };
    }
    const data = await response.json();
    console.log({ data });
    return data;
  } catch (error) {
    throw new Error((error as Error).message || 'Error');
  }
}
