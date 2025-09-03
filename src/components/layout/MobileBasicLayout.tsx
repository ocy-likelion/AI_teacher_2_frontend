import Header from './Header';
import NavFooter from './NavFooter';
import type React from 'react';

type MobileBasicLayoutProps = {
  children: React.ReactNode;
};

export default function MobileBasicLayout({
  children,
}: MobileBasicLayoutProps) {
  return (
    <section className='w-full h-full flex flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
      <NavFooter />
    </section>
  );
}
