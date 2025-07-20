import { Navigate } from 'react-router-dom';
import useUserStore, { type userStore } from '../stores/userStore';

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUserStore((store: userStore) => store.user);

  if (!user) {
    if (window.location.pathname === '/')
      return <Navigate to='/login' replace />;
  }

  if (user) {
    if (
      window.location.pathname === '/onboarding' ||
      window.location.pathname === '/login'
    )
      return <Navigate to='/' replace />;
  }

  return <>{children}</>;
}
