import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type user = {
  accessToken: string;
};

export type userStore = {
  user: user | null;
  setUser: (user: user | null) => void;
};

const useUserStore = create<userStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useUserStore;
