import { Navigate } from 'react-router-dom';
import useUserStore, { type userStore } from '../../stores/userStore';

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUserStore((store: userStore) => store.user);

  if (!user) {
    if (
      window.location.pathname !== '/intro' &&
      window.location.pathname !== '/login' &&
      window.location.pathname !== '/onboarding'
    )
      return <Navigate to='/intro' replace />;
  }

  if (user) {
    if (
      window.location.pathname === '/onboarding' ||
      window.location.pathname === '/login' ||
      window.location.pathname === '/intro'
    )
      return <Navigate to='/' replace />;
  }

  return <>{children}</>;
}
