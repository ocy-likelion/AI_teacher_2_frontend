import { Navigate } from 'react-router-dom';
import useUserStore, { type userStore } from '../../stores/userStore';

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = sessionStorage.getItem('token');
  const setUser = useUserStore((store: userStore) => store.setUser);

  if (!token) {
    if (window.location.pathname !== '/intro') {
      setUser(null);
      return <Navigate to='/intro' replace />;
    }
  }

  if (token) {
    if (window.location.pathname === '/intro')
      return <Navigate to='/' replace />;
  }

  return <>{children}</>;
}
