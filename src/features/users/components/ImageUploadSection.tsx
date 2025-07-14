import { useNavigate } from 'react-router-dom';
import EditChildInfoForm from './EditChildInfo';
import { Camera } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ImageUpload from '@/features/problems/components/ImageUpload';

export default function ImageUploadSection() {
  var divRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();
  var inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const ClickEventHandler = () => {
    inputRef.current?.click();
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
        {ImageUpload(inputRef, navigate, '/problem/upload')}
        <div ref={divRef} className='flex justify-center flex-grow flex-col'>
          <Camera width={120} height={height} />
          <span className='font-medium text-md'>문제를 등록해보세요</span>
        </div>
      </div>
    </div>
  );
}
