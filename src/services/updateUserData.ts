import {
  RefreshTokenRequest,
  UpdatePasswordRequest,
  UserDataUpdateRequest
} from 'types/apiTypes';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const UPDATE_URL = BASE_URL + import.meta.env.VITE_USER_URL;
const REFRESH_TOKEN_URL = BASE_URL + import.meta.env.VITE_REFRESH_TOKEN_URL;
const UPDATE_PASSWORD_URL = BASE_URL + import.meta.env.VITE_UPDATE_PASSWORD_URL;

export async function updateUserData(formData: FormData, token: string) {
  const username = formData.get('username')?.toString();
  const email = formData.get('email')?.toString();
  const id = formData.get('id')?.toString();
  if (!username || !email || !id) throw new Error('Missing data');
  const user: UserDataUpdateRequest = {
    username,
    email
  };
  try {
    const response = await fetch(`${UPDATE_URL}${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      const errorMessage = await response.json();
      return { error: errorMessage };
    }
    const data = await response.json();
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
    return data;
  } catch (error) {
    console.error('Error refreshing token:', error);
  }
}

export async function updateUserPassword(formData: FormData, token: string) {
  const oldPassword = formData.get('oldPassword')?.toString();
  const newPassword = formData.get('newPassword')?.toString();
  const id = formData.get('id')?.toString();
  if (!oldPassword || !newPassword || !id) throw new Error('Missing data');
  const passwordRequest: UpdatePasswordRequest = {
    oldPassword,
    newPassword
  };
  try {
    const response = await fetch(`${UPDATE_PASSWORD_URL}${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(passwordRequest)
    });
    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.message);
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    throw new Error((error as Error).message || 'Error');
  }
}
