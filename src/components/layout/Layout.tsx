import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="bg-black flex justify-center min-h-[100dvh]">
      <section className="bg-background-light dark:bg-gray7 safe-container w-full max-w-[var(--max-size-mobile)]">
        {children}
      </section>
    </section>
  );
}
