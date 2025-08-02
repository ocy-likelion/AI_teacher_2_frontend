import SubHeader from '@/components/layout/SubHeader';
import { Button } from '@/components/ui/button';
import ImageCropper from '@/features/problems/components/ImageCropper';
import ImageUpload from '@/features/problems/components/ImageUploadInput';
import useImageStore from '@/stores/imageStore';
import { Info } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { ReactCropperElement } from 'react-cropper';
import { useBlocker, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import ProblemUploadLoading from '../features/problems/components/ProblemUploadLoading';
import getCroppedData from '@/features/problems/api/get-cropped-data';
import { useUploadImage } from '@/features/problems/api/use-upload-image';

const NAVIGATION_DELAY = 0;

export default function ProblemUploadPage() {
  const navigate = useNavigate();

  const { imageUrl, setImageFile } = useImageStore();

  const [image, setImage] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const cropperRef = useRef<ReactCropperElement>(null);
  const uploadRef = useRef<HTMLInputElement>(null);
  const controllerRef = useRef<AbortController | null>(null);

  const cropper = cropperRef.current?.cropper;

  const confirmLeave = () => {
    if (
      confirm(
        '뒤로 가면 해설이 생성되지 않을 수 있어요.\n정말 뒤로 가시겠어요?',
      )
    ) {
      controllerRef.current?.abort();
      setImageFile(undefined);
      return true;
    }
    return false;
  };

  const blocker = useBlocker(
    ({ currentLocation, nextLocation, historyAction }) => {
      return (
        isLoading &&
        historyAction === 'POP' &&
        currentLocation.pathname !== nextLocation.pathname
      );
    },
  );

  const { mutate } = useUploadImage({
    setIsLoading,
    controllerRef,
    navigate,
  });

  const handleReupload = () => {
    uploadRef.current?.click();
  };

  useEffect(() => {
    if (isLoading) return;

    if (imageUrl) {
      setImage(imageUrl);
    } else if (imageUrl === undefined) {
      setTimeout(() => {
        navigate('/');
        toast.error('홈 화면에서 문제 사진을 등록해주세요.');
      }, NAVIGATION_DELAY);
    }
  }, [imageUrl, navigate]);

  useEffect(() => {
    if (blocker.state === 'blocked') {
      if (confirmLeave()) {
        blocker.proceed();
      } else {
        blocker.reset();
      }
    }
  }, [blocker.state]);

  if (isLoading) {
    return <ProblemUploadLoading />;
  }

  return (
    <section className='flex flex-1 flex-col w-full h-full'>
      <SubHeader type='close' title='문제 등록하기' />
      <section className='flex flex-1 flex-col w-full h-fit pb-10'>
        <div className='mt-16 mb-[15px] ml-[15px] flex flex-row'>
          <Info size={16} className='text-primary mt-[4px] mr-[10px]' />
          <p className='text- font-medium'>
            문제는 하나씩만 등록할 수 있어요.
            <br />
            필요한 부분만 선택해주세요.
          </p>
        </div>
        <ImageCropper image={image} cropperRef={cropperRef} />
        <div className='flex justify-center gap-6'>
          <Button
            className='w-[100px] dark:bg-gray7 bg-white text-primary border-1 border-primary hover:bg-primary/75 hover:border-primary/75 hover:text-white'
            size='lg'
            onClick={handleReupload}
          >
            재업로드
          </Button>
          <Button
            onClick={() => {
              getCroppedData(cropper, setImage, mutate);
            }}
            className='w-[100px]'
            size={'lg'}
          >
            확인
          </Button>
          <ImageUpload uploadRef={uploadRef} />
        </div>
      </section>
    </section>
  );
}
