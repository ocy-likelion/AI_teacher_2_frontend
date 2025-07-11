import { Outlet } from 'react-router-dom';
import LayoutWrapper from './LayoutWrapper';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <LayoutWrapper>
      <ScrollToTop />
      <Outlet />
    </LayoutWrapper>
  );
}
