import { Button } from '@/components/ui/button';
import { DialogFooter, DialogHeader } from '@/components/ui/dialog';
import type { BaseModalProps } from '@/types/modal.type';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

export interface ConceptModalProps extends BaseModalProps {
  title: string;
  description: string;
}

export default function ConceptModal({
  title,
  description,
  onClose,
}: ConceptModalProps) {
  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogContent className='flex flex-col items-center gap-6'>
        <DialogHeader>
          <DialogTitle className='title-sm'># {title}</DialogTitle>
        </DialogHeader>
        <p className='whitespace-pre-wrap body-sm'>{description}</p>
        <DialogFooter>
          <Button onClick={onClose} size='sm'>
            닫기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
