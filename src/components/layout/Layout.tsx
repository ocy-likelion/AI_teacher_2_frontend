import { Outlet } from 'react-router-dom';
import LayoutWrapper from './LayoutWrapper';
import ScrollToTop from './ScrollToTop';
import Modal from './Modal';

export default function Layout() {
  return (
    <LayoutWrapper>
      <ScrollToTop />
      <Outlet />
      <Modal />
    </LayoutWrapper>
  );
}
