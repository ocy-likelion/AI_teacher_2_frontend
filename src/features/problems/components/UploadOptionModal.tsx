import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Camera, Images } from 'lucide-react';
import ImageUpload from './ImageUploadInput';
import ImageCapture from './ImageCaptureInput';
import { useRef } from 'react';
import type { BaseModalProps } from '@/types/modal.type';

export default function UploadOptionModal({ onClose }: BaseModalProps) {
  const uploadRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);

  const CameraButtonEventHandler = () => {
    cameraRef.current?.click();
  };
  const UploadButtonEventHandler = () => {
    uploadRef.current?.click();
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
            <Button
              onClick={UploadButtonEventHandler}
              className='w-28 flex flex-col h-fit py-5'
              variant='border'
              size='lg'
            >
              <Images className='!w-12 !h-12' strokeWidth={1.5} />
              <span className='text-gray7 dark:text-background-light text-md'>
                앨범에서 선택
              </span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <ImageUpload uploadRef={uploadRef} onClose={onClose} />
      <ImageCapture cameraRef={cameraRef} onClose={onClose} />
    </>
  );
}
