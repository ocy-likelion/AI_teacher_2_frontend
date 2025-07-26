import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type ErrorLayoutProps = {
  from: string;
  children: React.ReactNode;
};

export default function ErrorLayout({ from, children }: ErrorLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.from !== from) {
      navigate('/');
    }
  }, []);

  return <>{children}</>;
}
