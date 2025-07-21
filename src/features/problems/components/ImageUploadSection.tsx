import { useRef } from 'react';
import ImageUpload from './ImageUploadInput';

export default function ImageUploadSection() {
  const uploadRef = useRef<HTMLInputElement>(null);

  return (
    <section className='w-full animate-float-up'>
      <div
        onClick={() => {
          uploadRef.current?.click();
        }}
        className='px-3 py-5 flex flex-col items-center gap-3 rounded-[16px] shadow-[var(--shadow)] dark:shadow-[var(--shadow-dark)] cursor-pointer active:scale-95 transition-transform duration-200'
      >
        <div className='flex flex-col items-center gap-1'>
          <img
            src='/images/Icon_Plus.svg'
            alt='add icon'
            className='w-11 h-11'
          />
          <h3 className='text-lg font-semibold'>무엇이 궁금하신가요?</h3>
        </div>
        <p className='text-center text-[11px] text-gray5 dark:text-gray2'>
          해설이 필요한 문제를 직접 찍거나 <br />
          앨범에서 선택해 주세요
        </p>
      </div>
      <ImageUpload uploadRef={uploadRef} />
    </section>
  );
}
