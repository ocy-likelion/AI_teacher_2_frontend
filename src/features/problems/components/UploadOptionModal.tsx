import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Camera } from 'lucide-react';
import ImageCapture from './ImageCaptureInput';
import { useRef } from 'react';
import type { BaseModalProps } from '@/types/modal.type';

export default function UploadOptionModal({ onClose }: BaseModalProps) {
  const cameraRef = useRef<HTMLInputElement>(null);

  const CameraButtonEventHandler = () => {
    cameraRef.current?.click();
  };
  return (
    <>
      <Dialog defaultOpen onOpenChange={onClose}>
        <DialogContent className='flex flex-col items-center gap-6'>
          <DialogHeader>
            <DialogTitle className='title-md'>문제 등록하기</DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <div className='w-full flex justify-center items-center gap-6'>
            <Button
              onClick={CameraButtonEventHandler}
              className='w-28 flex flex-col h-fit py-5'
              variant='border'
              size='lg'
            >
              <Camera className='!w-12 !h-12' strokeWidth={1.5} />
              <span className='text-gray7 dark:text-background-light text-md'>
                직접 촬영
              </span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <ImageCapture cameraRef={cameraRef} onClose={onClose} />
    </>
  );
}
