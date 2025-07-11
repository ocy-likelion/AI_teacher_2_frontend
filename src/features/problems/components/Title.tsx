import type React from 'react';

type TitleProps = {
  children: React.ReactNode;
  size: 'lg' | 'md';
  description?: string;
};

export default function Title({ children, size, description }: TitleProps) {
  return (
    <div className='flex flex-col gap-1'>
      <h3
        className={`${size === 'lg' ? 'title-sm' : 'text-[16px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap'}`}
      >
        {children}
      </h3>
      {description && (
        <p className='label text-gray6 dark:text-gray2'>{description}</p>
      )}
    </div>
  );
}
