import { Navigate } from 'react-router-dom';
import useUserStore, { type userStore } from './stores/useUserStore';

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUserStore((store: userStore) => store.user);

  if (!user) {
    return <Navigate to='/onboarding' replace />;
  }

  return <>{children}</>;
}
