import type { ReactNode } from 'react';

type PageTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function PageTitle({
  children,
  className = '',
}: PageTitleProps) {
  return (
    <h2 className={`w-full text-center title-lg px-6 pt-10 pb-2 ${className}`}>
      {children}
    </h2>
  );
}
