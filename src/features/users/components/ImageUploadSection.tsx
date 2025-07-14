import { useNavigate } from 'react-router-dom';
import EditChildInfoForm from './EditChildInfo';
import { Camera, Upload } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ImageUpload from '@/features/problems/components/ImageUpload';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ImageCapture from '@/features/problems/components/ImageCapture';

export default function ImageUploadSection() {
  const [height, setHeight] = useState<number>();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  var divRef = useRef<HTMLDivElement>(null);
  var uploadRef = useRef<HTMLInputElement>(null);
  var cameraRef = useRef<HTMLInputElement>(null);

  const ClickEventHandler = () => {
    if (!dialogOpen) {
      setDialogOpen(true);
    }
  };
  const CameraButtonEventHandler = () => {
    setDialogOpen(false);
    cameraRef.current?.click();
  };
  const UploadButtonEventHandler = () => {
    setDialogOpen(false);
    uploadRef.current?.click();
  };

  useEffect(() => {
    const resizeObserver: ResizeObserver = new ResizeObserver(() => {
      if (divRef.current) {
        const divHeight: number = divRef.current.offsetHeight;
        setHeight(Math.floor(divHeight / 2.3));
      }
    });

    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return (
    <div className='w-full flex flex-col flex-grow'>
      <div className='flex flex-row h-[35px] font-korean-title font-bold text-2xl gap-[7px] mb-3'>
        <h2>안녕하세요</h2>
        <div className='flex flex-row cursor-pointer'>
          <div className='flex justify-center'>
            <EditChildInfoForm />
          </div>
        </div>
        <h2>부모님!</h2>
      </div>
      <div
        onClick={ClickEventHandler}
        className='text-gray5 flex flex-col flex-grow items-center max-h-[40vh] max-w-full rounded-[24px] dark:text-gray2 inset-shadow-primary cursor-pointer'
      >
        <div ref={divRef} className='flex justify-center flex-grow flex-col'>
          <Camera width={120} height={height} />
          <span className='font-medium text-md'>문제를 등록해보세요</span>
        </div>
      </div>
      <Dialog
        open={dialogOpen}
        onOpenChange={(isOpen) => {
          setDialogOpen(isOpen);
        }}
      >
        <DialogContent className='flex flex-row justify-center items-center py-20 gap-10'>
          <DialogHeader className='hidden'>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
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
    </div>
  );
}
