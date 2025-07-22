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
import ProblemUploadComponent from '../features/problems/components/ProblemUploadLoading';
import UploadButton from '@/features/problems/components/UploadButton';

export default function ProblemUploadPage() {
  const navigate = useNavigate();

  // 상태 정의 - 카멜 케이스 사용
  const imageFile = useImageStore((state: imageStore) => state.imageUrl);
  const [image, setImage] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // refs 정의
  const cropperRef = useRef<ReactCropperElement>(null);
  const uploadRef = useRef<HTMLInputElement>(null);

  // 상수 정의 - 대문자 스네이크 케이스
  const NAVIGATION_DELAY = 0;

  // 크롭 데이터 가져오기 함수
  const cropper = cropperRef.current?.cropper;

  // 재업로드 버튼 클릭 처리
  const handleReupload = () => {
    uploadRef.current?.click();
  };

  // 이미지 파일 효과 처리
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

  // 로딩에서 뒤로가기 처리
  const handleBackFromLoading = () => {
    setIsLoading(false);
  };

  // 로딩 중이면 로딩 컴포넌트 표시
  if (isLoading) {
    return <ProblemUploadComponent onBack={handleBackFromLoading} />;
  }

  // 기본 업로드 UI 렌더링
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
          <UploadButton
            cropper={cropper}
            setImage={setImage}
            setIsLoading={setIsLoading}
          />
          <ImageUpload uploadRef={uploadRef} />
        </div>
      </section>
    </section>
  );
}
