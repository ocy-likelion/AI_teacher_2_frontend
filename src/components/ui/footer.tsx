import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type FooterProps = {
  children: ReactNode;
  className?: string;
};

export default function Footer({ children, className }: FooterProps) {
  return (
    <footer
      className={cn(
        className,
        'w-full max-w-[var(--max-size-mobile)] pt-1 bg-background-light dark:bg-gray7 sticky bottom-0 flex justify-center items-center border-t border-gray2 dark:border-gray6 md:hidden',
      )}
      style={{
        paddingBottom: 'calc(4px + var(--safe-bottom))',
        minHeight: 'calc(var(--h-header) + var(--safe-bottom))',
      }}
    >
      {children}
    </footer>
  );
}
