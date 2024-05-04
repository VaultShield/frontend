import CryptoJS from 'crypto-js';
const key = import.meta.env.VITE_SECRET_KEY;

export const dataEncrypt = (password: string) => {
  const crypted = CryptoJS.AES.encrypt(password, key).toString();
  return crypted;
};

export const dataDesEncrypt = (cryptedPassword: string) => {
  const desEncriptedPassword = CryptoJS.AES.decrypt(
    cryptedPassword,
    key
  ).toString(CryptoJS.enc.Utf8);
  return desEncriptedPassword;
};
