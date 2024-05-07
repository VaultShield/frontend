import { create } from 'zustand';
import { type User } from '../types/apiTypes';

export interface userStore {
  user: User;
  isLogged: boolean;
  token: string;
  refreshToken: string;
  setUser: (user: User) => void;
  setIsLogged: (isLogged: boolean) => void;
  setToken: (token: string) => void;
  setRefreshToken: (refreshToken: string) => void;
}

export const useUserStore = create<userStore>((set) => ({
  user: {
    id: '',
    username: '',
    email: '',
    active: false,
    updateDate: '',
    softDeleteDate: ''
  },
  isLogged: false,
  token: '',
  refreshToken: '',
  setUser: (user: User) => set({ user }),
  setIsLogged: (isLogged: boolean) => set({ isLogged }),
  setToken: (token: string) => set({ token }),
  setRefreshToken: (refreshToken: string) => set({ refreshToken })
}));
