import Yellow from '@/assets/images/characters/yellow.svg?react';
import Green from '@/assets/images/characters/green.svg?react';
import OrangeTriangle from '@/assets/images/characters/orange_triangle.svg?react';
import Star from '@/assets/images/Star_Yellow.svg?react';

export default function IntroImages() {
  return (
    <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/5 w-80 h-96 z-10 md:-translate-y-3/5'>
      <div className='pointer-events-none w-[380px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 star-pulse'>
        <Star className='w-full z-0' />
      </div>
      <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/5 w-80 h-96 z-10'>
        <div className='absolute top-10 left-0 rotate-green'>
          <Green className='w-30 h-30 transform rotate-[20deg]' />
        </div>

        <div className='absolute top-13 right-3 rotate-yellow'>
          <Yellow className='w-34 h-34 transform rotate-[10deg]' />
        </div>

        <div className='absolute bottom-11 left-2/4 -translate-x-1/2 rotate-orange'>
          <OrangeTriangle className='w-30 h-30 transform rotate-[-15deg]' />
        </div>
      </section>{' '}
    </section>
  );
}
