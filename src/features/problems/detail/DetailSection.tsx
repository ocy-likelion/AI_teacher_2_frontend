import type React from 'react';

type DetailSectionProps = {
  children: React.ReactNode;
};

export default function DetailSection({ children }: DetailSectionProps) {
  return <section className='flex flex-col gap-2 mt-4'>{children}</section>;
}
