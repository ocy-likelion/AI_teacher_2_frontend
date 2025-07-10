import { Outlet } from 'react-router-dom';
import LayoutWrapper from './LayoutWrapper';

export default function Layout() {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
}
