import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type user = {
  id: string;
  childName: string;
  accessToken?: string;
  refreshToken?: string;
};

export type userStore = {
  user: user | null;
  setUser: (user: user) => void;
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
    }
  )
);

export default useUserStore;
