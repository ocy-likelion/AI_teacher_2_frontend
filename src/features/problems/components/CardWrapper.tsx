import type React from 'react';

type DescriptionCardProps = {
  children: React.ReactNode;
};

export default function CardWrapper({ children }: DescriptionCardProps) {
  return (
    <div className='w-full bg-white shadow-[var(--shadow)] dark:shadow-[var(--shadow-dark)] dark:bg-gray6 rounded-[12px] p-4.5 body-sm whitespace-pre-wrap'>
      {children}
    </div>
  );
}
