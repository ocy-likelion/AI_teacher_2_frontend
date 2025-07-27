import { Button } from '@/components/ui/button';
import { DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import type { BaseModalProps } from '@/types/modal.type';
import { useConcept } from '../api/get-concept';
import ListLoading from '@/components/ui/ListLoading';
import { handleApiError } from '@/utils/handle-api-error';

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
          <ListLoading description='개념을 요약하고 있어요...' />
        ) : (
          <>
            <p className='whitespace-pre-wrap body-sm'>
              {data?.description ||
                '🤔 곧 이 개념에 대한 설명이 추가될 예정이에요.'}
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
