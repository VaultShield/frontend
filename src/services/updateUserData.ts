import {
  RefreshTokenRequest,
  User,
  UserDataUpdateRequest
} from 'types/apiTypes';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const UPDATE_URL = BASE_URL + import.meta.env.VITE_USER_URL;
const REFRESH_TOKEN_URL = BASE_URL + import.meta.env.VITE_REFRESH_TOKEN_URL;

export async function updateUserData(formData: FormData, token: string) {
  const username = formData.get('username')?.toString();
  const email = formData.get('email')?.toString();
  const id = formData.get('id')?.toString();
  if (!username || !email || !id) throw new Error('Missing data');
  const user: UserDataUpdateRequest = {
    username,
    email
  };
  console.log({ user, token, id });
  try {
    const response = await fetch(`${UPDATE_URL}${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    console.log(data as User);
    return data;
  } catch (error) {
    return error;
  }
}

export async function updateToken(refreshToken: string) {
  const request: RefreshTokenRequest = {
    refreshToken
  };
  try {
    const response = await fetch(REFRESH_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error refreshing token:', error);
  }
}
