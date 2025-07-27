import OrangeCircle from '@/assets/images/characters/orange_circle.svg?react';
import Blue from '@/assets/images/characters/blue.svg?react';
import Green from '@/assets/images/characters/green.svg?react';

type EmptyProps = {
  description: string;
};

export default function Empty({ description }: EmptyProps) {
  return (
    <div className='flex-1 flex flex-col justify-center items-center gap-2'>
      <div className='w-full flex items-center justify-center gap-1'>
        <Green className='w-12 h-12 ' />
        <OrangeCircle className='w-12 h-12' />
        <Blue className='w-12 h-12' />
      </div>
      <p className='text-sm font-semibold'>{description}</p>
    </div>
  );
}
