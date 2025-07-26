import OrangeTriangle from '@/assets/images/characters/orange_triangle.svg?react';
import OrangeCircle from '@/assets/images/characters/orange_circle.svg?react';
import Green from '@/assets/images/characters/green.svg?react';

type LoadingProps = {
  description?: string;
};

export default function Loading({
  description = '조금만 기다려주세요.',
}: LoadingProps) {
  return (
    <div className='h-full flex flex-col justify-center items-center gap-3'>
      <div className='w-full flex items-center justify-center gap-4'>
        <OrangeTriangle className='w-12 h-12 animate-pop delay-0' />
        <Green className='w-12 h-12 animate-pop delay-200' />
        <OrangeCircle className='w-12 h-12 animate-pop delay-400' />
      </div>
      <p className='text-sm font-semibold'>{description}</p>
    </div>
  );
}
