import type { ReactNode } from 'react';
import Header from '../ui/header';
import Footer from '../ui/footer';
import Sidebar from './Sidebar';

type AppShellProps = {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
};

export default function AppShell({ header, footer, children }: AppShellProps) {
  return (
    <div className='w-full h-full flex flex-col md:flex-row md:gap-4 md:p-4 bg-gray1 dark:bg-background-dark-secondary'>
      {header && <Header>{header}</Header>}
      <Sidebar />
      <main className='flex-1 flex justify-center md:rounded-[12px] bg-background-light dark:bg-background-dark md:overflow-hidden'>
        <section className='w-full h-full max-w-max-width'>{children}</section>
      </main>
      {footer && <Footer>{footer}</Footer>}
    </div>
  );
}
