import { Navigate } from 'react-router-dom';
import useUserStore, { type userStore } from '../stores/useUserStore';

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUserStore((store: userStore) => store.user);

  if (!user) {
    if (window.location.pathname === '/')
      return <Navigate to='/onboarding' replace />;
  }

  if (user) {
    if (window.location.pathname === '/onboarding')
      return <Navigate to='/' replace />;
  }

  return <>{children}</>;
}
