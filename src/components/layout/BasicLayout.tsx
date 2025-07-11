import Header from './Header';
import Footer from './Footer';
import type React from 'react';

type BasicLayoutProps = {
  children: React.ReactNode;
};

export default function BasicLayout({ children }: BasicLayoutProps) {
  return (
    <section className='w-full h-full flex flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </section>
  );
}
