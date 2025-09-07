import { Button } from '@/components/ui/button';
import { DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import type { BaseModalProps } from '@/types/modal.type';
import { useConcept } from '../api/get-concept';
import DataLoading from '@/components/DataLoading';
import { handleApiError } from '@/utils/handle-api-error';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';

export interface ConceptModalProps extends BaseModalProps {
  id: number;
  title: string;
}

export default function ConceptModal({
  id,
  title,
  onClose,
}: ConceptModalProps) {
  const { data, isPending, isError, error } = useConcept(id);

  if (isError) {
    onClose();
    handleApiError(error);
  }

  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogContent className='flex flex-col items-center gap-6'>
        <DialogHeader>
          <DialogTitle className='title-sm'># {title}</DialogTitle>
        </DialogHeader>
        {isPending ? (
          <DataLoading description='개념을 불러오는 중이에요...' />
        ) : (
          <>
            <p className='whitespace-pre-wrap body-sm'>
              {data?.description ? (
                <Markdown
                  remarkPlugins={[remarkMath, remarkGfm]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {data?.description}
                </Markdown>
              ) : (
                '🤔 이 개념에 대한 설명이 곧 추가될 예정이에요.'
              )}
            </p>
          </>
        )}
        <DialogFooter>
          <Button onClick={onClose} size='sm'>
            닫기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
