import SubHeader from '@/components/layout/SubHeader';
import { Button } from '@/components/ui/button';
import ImageCropper from '@/features/problems/components/ImageCropper';
import ImageUpload from '@/features/problems/components/ImageUploadInput';
import useImageStore, { type imageStore } from '@/stores/imageStore';
import { Info } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { ReactCropperElement } from 'react-cropper';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import ProblemUploadLoading from '../features/problems/components/ProblemUploadLoading';
import getCroppedData from '@/features/problems/api/get-cropped-data';
import { useUploadImage } from '@/features/problems/api/use-upload-image';

const NAVIGATION_DELAY = 0;

export default function ProblemUploadPage() {
  const navigate = useNavigate();

  const imageFile = useImageStore((state: imageStore) => state.imageUrl);

  const [image, setImage] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const cropperRef = useRef<ReactCropperElement>(null);
  const uploadRef = useRef<HTMLInputElement>(null);
  const controllerRef = useRef<AbortController | null>(null);
  const isLoadingRef = useRef(false);
  const isHandlingPopRef = useRef(false);

  const cropper = cropperRef.current?.cropper;

  const { mutate } = useUploadImage({
    setIsLoading,
    controllerRef,
    isLoadingRef,
    navigate,
  });

  const handleReupload = () => {
    uploadRef.current?.click();
  };

  useEffect(() => {
    if (imageFile) {
      setImage(imageFile);
    } else if (imageFile === undefined) {
      setTimeout(() => {
        navigate('/');
        toast.error('유효하지 않은 접근이 감지되어 홈으로 이동합니다.');
      }, NAVIGATION_DELAY);
    }
  }, [imageFile, navigate]);

  useEffect(() => {
    window.history.pushState({ preventBack: true }, '', location.href);

    const onPopState = () => {
      if (!isLoadingRef.current || isHandlingPopRef.current) return;

      isHandlingPopRef.current = true; // ✅ confirm 중복 방지

      const check = confirm(
        '사이트 이탈 시 변경사항이 저장되지 않습니다. 정말 나가시겠습니까?',
      );

      if (check) {
        controllerRef.current?.abort();
        navigate('/', { replace: true });
      } else {
        // ❗ forward() 후 다시 popstate가 뜨지 않도록 잠깐 막기
        setTimeout(() => {
          isHandlingPopRef.current = false;
        }, 100); // 브라우저 forward 타이밍보다 살짝 늦게
        window.history.forward();
      }
    };

    window.addEventListener('popstate', onPopState);

    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  if (isLoading) {
    return <ProblemUploadLoading />;
  }

  return (
    <section className='flex flex-1 flex-col w-full h-full'>
      <SubHeader
        type='close'
        title='문제 등록하기'
        onBackClick={() => navigate('/')}
      />
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
