import useUserStore from '@/stores/userStore';

export function SetUser(user: {
  id?: string;
  childName?: string;
  childGrade?: number;
}) {
  useUserStore.getState().setUser(user);
}
