import { CredentialRequest, ErrorMessage } from 'types/apiTypes';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const FINDALL_CREDENTIAL_URL =
  BASE_URL + import.meta.env.VITE_FINDALL_CREDENTIAL_URL;
const ADD_CREDENTIAL_URL = BASE_URL + import.meta.env.VITE_ADD_CREDENTIAL_URL;
const CREDENTIAL_URL = BASE_URL + import.meta.env.VITE_CREDENTIAL_URL;

export async function getAllCredentials(userId: string, token: string) {
  if (!userId || !token) throw new Error('error in show getAllCredentials');
  try {
    const response = await fetch(`${FINDALL_CREDENTIAL_URL}${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) return 'no credentials';
    const credentials = response.json();
    return credentials;
  } catch (err) {
    throw new Error((err as ErrorMessage).message);
  }
}

export async function newCredential(
  token: string,
  credential: CredentialRequest
) {
  if (!credential || !token) throw new Error('error in submit credential');
  try {
    const response = await fetch(`${ADD_CREDENTIAL_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(credential)
    });
    console.log(response);
    if (!response.ok) return new Error('error in submit credential');
    return 'submit credential';
  } catch (err) {
    throw new Error((err as ErrorMessage).message);
  }
}

export async function deleteCredential(token: string, credentialId: string) {
  try {
    const response = await fetch(`${CREDENTIAL_URL}${credentialId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) return new Error('error in detele credential');
    return 'detele credential';
  } catch (error) {
    throw new Error((error as ErrorMessage).message);
  }
}

export async function updateCredential(
  token: string,
  credential: CredentialRequest,
  credentialId: string
) {
  if (!credential || !token) throw new Error('error in submit credential');
  try {
    const response = await fetch(`${CREDENTIAL_URL}${credentialId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(credential)
    });
    console.log(response);
    if (!response.ok) return new Error('error in update credential');
    return 'updated credential';
  } catch (err) {
    throw new Error((err as ErrorMessage).message);
  }
}
