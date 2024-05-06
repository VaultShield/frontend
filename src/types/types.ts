export interface ErrorsForm {
  email?: string;
  password?: string;
  username?: string;
  error?: string;
  oldPassword?: string;
  newPassword?: string;
}

export enum CARD {
  seed = 'seed',
  password = 'password',
  username = 'username'
}
