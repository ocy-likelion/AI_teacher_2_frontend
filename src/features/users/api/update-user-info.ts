import useUserStore from '@/stores/userStore';

export function SetUser(user: {
  id?: string;
  childName?: string;
  childGrade?: string;
}) {
  useUserStore.getState().setUser(user);
}
