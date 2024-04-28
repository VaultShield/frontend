export interface User {
  id: string;
  username: string;
  email: string;
  active: boolean;
  updateDate: string;
  softDeleteDate: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  expiration: string;
  user: User;
}

export interface RegisterRequest extends LoginRequest {
  email: string;
}

export interface RegisterResponse {
  id: string;
  seedPhrase: string[];
}
export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse extends RefreshTokenRequest {
  token: string;
  tokenType: string;
  expiration: string;
}

export interface RecoverRequest {
  username: string;
  seedphrase: string[];
}

export interface RecoverResponse {
  token: string;
}

export interface CredentialRequest {
  userId: string;
  credentialType: string;
  favorite: boolean;
  groupId: string;
  password: string;
  account: string;
  note: string;
  title: string;
}

export interface Password {
  id: string;
  title: string;
  account: string;
  password: string;
  note: string;
}

export interface CredentialResponse {
  id: string;
  credentialType: string;
  createDate: string;
  updateDate: string;
  deletedDate: string;
  state: string;
  favourite: boolean;
  gtoupId: string;
  userId: string;
  password: Password;
}

export interface UserDataUpdateRequest {
  username: string;
  email: string;
}
