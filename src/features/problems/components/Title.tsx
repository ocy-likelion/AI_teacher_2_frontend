import type React from 'react';

import MarkdownViewer from '@/components/MarkdownViewer';

type TitleProps = {
  children: React.ReactNode;
  size: 'lg' | 'md';
  description?: string;
  isMarkdown?: boolean;
};

export default function Title({
  children,
  size,
  description,
  isMarkdown = false,
}: TitleProps) {
  return (
    <div className='flex flex-col gap-1 min-w-0'>
      <h3
        className={`${
          size === 'lg'
            ? 'title-sm md:title-md'
            : 'text-base font-semibold md:title-sm overflow-hidden line-clamp-1'
        }`}
      >
        {isMarkdown ? <MarkdownViewer>{children}</MarkdownViewer> : children}
      </h3>
      {description && (
        <p className='label md:body-sm text-gray6 dark:text-gray2'>
          {description}
        </p>
      )}
    </div>
  );
}
