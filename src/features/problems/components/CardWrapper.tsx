import type React from 'react';

type CardWrapperProps = {
  children: React.ReactNode;
  padding?: boolean;
};

export default function CardWrapper({
  children,
  padding = true,
}: CardWrapperProps) {
  return (
    <div
      className={`w-full h-full shadow-[var(--shadow)] dark:shadow-[var(--shadow-dark)] dark:bg-gray6 rounded-[12px] ${padding ? 'p-4.5' : 'p-0'} body-sm whitespace-pre-wrap overflow-hidden`}
    >
      {children}
    </div>
  );
}
