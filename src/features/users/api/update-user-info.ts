import useUserStore from '@/stores/useUserStore';

export function SetUser(user: {
  id?: string;
  childName: string;
  childGrade?: string;
}) {
  useUserStore.getState().setUser(user);
}
