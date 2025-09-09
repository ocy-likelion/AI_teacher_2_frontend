import type { ReactNode } from 'react';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import type { PluggableList } from 'unified';
import 'katex/dist/katex.min.css';

const REMARK_PLUGINS: PluggableList = [remarkMath, remarkGfm];
const REHYPE_PLUGINS: PluggableList = [rehypeKatex];

type MarkdownViewerProps = {
  children: ReactNode;
};

export default function MarkdownViewer({ children }: MarkdownViewerProps) {
  return (
    <div className='body-md md:body-lg'>
      <Markdown remarkPlugins={REMARK_PLUGINS} rehypePlugins={REHYPE_PLUGINS}>
        {children as string}
      </Markdown>
    </div>
  );
}
