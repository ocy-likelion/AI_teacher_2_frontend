import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DialogDescription } from '@radix-ui/react-dialog';
import type { BaseModalProps } from '@/types/modal.type';

export interface ConfirmModalProps extends BaseModalProps {
  onConfirm?: () => void;
}
export default function DeleteConfirmModal({
  onConfirm,
  onClose,
}: ConfirmModalProps) {
  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    onClose();
  };
  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogContent className='flex flex-col items-center gap-6'>
        <DialogHeader>
          <DialogTitle className='title-sm text-center'>
            정말 삭제하시겠습니까?
          </DialogTitle>
          <DialogDescription className='body-sm md:body-md text-gray5 dark:text-gray2 text-center'>
            삭제하면 복구할 수 없어요.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className='flex flex-row justify-center items-center gap-3'>
          <Button onClick={onClose} variant='border' size='lg'>
            취소하기
          </Button>
          <Button onClick={handleConfirm} variant='default' size='lg'>
            삭제하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
