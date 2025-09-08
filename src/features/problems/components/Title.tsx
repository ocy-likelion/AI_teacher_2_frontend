import type React from 'react';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';

const REMARK_PLUGINS = [remarkMath, remarkGfm] as const;
const REHYPE_PLUGINS = [rehypeKatex] as const;

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
            ? 'title-sm'
            : 'text-[16px] font-semibold overflow-hidden line-clamp-1'
        }`}
      >
        {isMarkdown ? (
          <Markdown
            remarkPlugins={REMARK_PLUGINS as any}
            rehypePlugins={REHYPE_PLUGINS as any}
          >
            {children as string}
          </Markdown>
        ) : (
          children
        )}
      </h3>

      {description && (
        <p className='label text-gray6 dark:text-gray2'>{description}</p>
      )}
    </div>
  );
}
