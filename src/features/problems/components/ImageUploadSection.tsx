import useImageStore, { type imageStore } from '@/stores/imageStore';
import { Camera } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ImageUpload from './ImageUploadInput';

export default function ImageUploadSection() {
  const [height, setHeight] = useState<number>();
  const setImageFile = useImageStore((file: imageStore) => file.setImageFile);

  const divRef = useRef<HTMLDivElement>(null);

  const uploadRef = useRef<HTMLInputElement>(null);

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
    <>
      <div
        onClick={() => {
          uploadRef.current?.click();
        }}
        className='text-gray5 flex flex-col flex-grow items-center max-h-[40vh] max-w-full rounded-[24px] dark:text-gray2 inset-shadow-primary cursor-pointer'
      >
        <div ref={divRef} className='flex justify-center flex-grow flex-col'>
          <Camera width={120} height={height} />
          <span className='font-medium text-md'>문제를 등록해보세요</span>
        </div>
      </div>
      <ImageUpload uploadRef={uploadRef} setImageFile={setImageFile} />
    </>
  );
}
