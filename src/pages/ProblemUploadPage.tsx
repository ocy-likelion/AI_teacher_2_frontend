import SubHeader from '@/components/layout/SubHeader';
import { Button } from '@/components/ui/button';
import ImageUpload from '@/features/problems/components/ImageUploadInput';
// import ImageCropper from '@/features/problems/components/ui/ImageCropper';
import { Info } from 'lucide-react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProblemUploadPage() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <SubHeader type='close' title='문제 등록하기' />
      <div className='mt-16 ml-[15px] flex flex-row'>
        <Info size={16} className='text-primary mt-[4px] mr-[10px]' />
        <p className='text- font-medium'>
          문제는 하나씩만 등록할 수 있어요.
          <br />
          필요한 부분만 선택해주세요.
        </p>
      </div>
      <section className='mt-[15px] w-full h-fit pb-10'>
        <section className='flex justify-center w-full max-h-[40vh] aspect-square bg-black mb-10'>
          <img src='/images/Sample-Image.svg' alt='사진 샘플' />
          {/* <ImageCropper /> */}
        </section>
        <div className='flex justify-center gap-6'>
          <Button
            className='w-[100px] dark:bg-gray7 bg-white text-primary border-1 border-primary hover:bg-primary/75 hover:border-primary/75 hover:text-white'
            size={'lg'}
            onClick={() => inputRef.current?.click()}
          >
            재업로드
          </Button>
          {ImageUpload(inputRef, navigate)}
          <Button
            onClick={() =>
              navigate('/problem/1', {
                replace: true,
                state: { from: 'upload' },
              })
            }
            className='w-[100px]'
            size={'lg'}
          >
            확인
          </Button>
        </div>
      </section>
    </>
  );
}
