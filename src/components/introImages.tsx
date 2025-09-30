import Yellow from '@/assets/images/characters/yellow.svg?react';
import Green from '@/assets/images/characters/green.svg?react';
import OrangeTriangle from '@/assets/images/characters/orange_triangle.svg?react';
import StarOrange from '@/assets/images/Star_Orange.svg?react';

export default function IntroImages() {
  return (
    <section className='relative h-fit mt-5 pointer-events-none'>
      <StarOrange className='w-full max-w-96 h-full ' />
      <section className='absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-2/5 w-80 h-96'>
        <div className='absolute top-13 left-3 rotate-green'>
          <Green className='w-30 h-30 transform rotate-[20deg]' />
        </div>

        <div className='absolute top-17 right-3 rotate-yellow'>
          <Yellow className='w-34 h-34 transform rotate-[10deg]' />
        </div>

        <div className='absolute bottom-13 left-2/4 -translate-x-1/2 rotate-orange'>
          <OrangeTriangle className='w-30 h-30 transform rotate-[-15deg]' />
        </div>
      </section>
    </section>
  );
}
