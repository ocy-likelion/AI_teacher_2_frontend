import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
  className?: string;
};

export default function Header({ children, className }: HeaderProps) {
  return (
    <header
      className={cn(
        className,
        'z-20 bg-background-light dark:bg-gray7 sticky top-0 flex items-center px-4 pb-2 md:hidden',
      )}
      style={{
        paddingTop: 'calc(8px + var(--safe-top))',
        minHeight: 'calc(var(--h-header) + var(--safe-top))',
      }}
    >
      {children}
    </header>
  );
}
