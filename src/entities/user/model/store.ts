import { create } from 'zustand';

import { userApi } from '../api/user';

import type { User } from './types/User';

interface UserState {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  auth: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  login: async (username: string, password: string) => {
    const data = await userApi.login(username, password);
    set({ user: data ?? null });
  },
  logout: async () => {
    const data = await userApi.logout();

    if (data.status === 200) {
      set({ user: null });
    } else {
      throw new Error('Failed to logout');
    }
  },
  auth: async () => {
    const data = await userApi.getUser();
    set({ user: data ?? null });
  },
}));
