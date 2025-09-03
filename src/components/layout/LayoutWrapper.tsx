import type React from 'react';
import { Toaster } from '../ui/sonner';

type LayoutWrapperProps = {
  children: React.ReactNode;
};
export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <section className='bg-gray1 dark:bg-background-dark-secondary flex justify-center min-h-[100dvh]'>
      <section className='bg-background-light dark:bg-gray7 safe-container w-full'>
        {children}
        <Toaster richColors position='top-center' />
      </section>
    </section>
  );
}
