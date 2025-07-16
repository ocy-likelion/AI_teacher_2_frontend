import useUserStore, { type userStore } from '@/stores/useUserStore';

export function GetUser() {
  return useUserStore((store: userStore) => store.user);
}
