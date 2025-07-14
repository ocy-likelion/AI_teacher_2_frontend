import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Camera, Upload } from 'lucide-react';
import ImageUpload from './ImageUploadInput';
import ImageCapture from './ImageCaptureInput';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ImageInputModal({
  dialogOpen,
  setDialogOpen,
}: {
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();

  var uploadRef = useRef<HTMLInputElement>(null);
  var cameraRef = useRef<HTMLInputElement>(null);

  const CameraButtonEventHandler = () => {
    setDialogOpen(false);
    cameraRef.current?.click();
  };
  const UploadButtonEventHandler = () => {
    setDialogOpen(false);
    uploadRef.current?.click();
  };
  return (
    <>
      <Dialog
        open={dialogOpen}
        onOpenChange={(isOpen) => {
          setDialogOpen(isOpen);
        }}
      >
        <DialogContent className='flex flex-row justify-center items-center py-20 gap-10'>
          <DialogHeader className='hidden'>
            <DialogTitle />
            <DialogDescription />
          </DialogHeader>
          <Button
            onClick={CameraButtonEventHandler}
            className='flex flex-col h-fit py-5'
            size='lg'
          >
            <Camera className='!w-16 !h-16' />
            <span className='text-xl'>카메라 촬영</span>
          </Button>
          <Button
            onClick={UploadButtonEventHandler}
            className='flex flex-col h-fit py-5'
            size='lg'
          >
            <Upload className='!w-16 !h-16' />
            <span className='text-xl'>파일 업로드</span>
          </Button>
        </DialogContent>
      </Dialog>
      {ImageUpload(uploadRef, navigate)}
      {ImageCapture(cameraRef, navigate)}
    </>
  );
}
