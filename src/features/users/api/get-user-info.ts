import useUserStore, { type userStore } from '@/stores/userStore';

export function GetUser() {
  return useUserStore((store: userStore) => store.user);
}
