import OrangeTriangle from '@/assets/images/characters/orange_triangle.svg?react';
import Blue from '@/assets/images/characters/blue.svg?react';
import Green from '@/assets/images/characters/green.svg?react';

export default function OnboardingAnimation() {
  return (
    <>
      <OrangeTriangle className='absolute size-[15vh] left-[60%] top-[-10%] rotate-[10deg] aspect-square drop-shadow-[1rem_-1rem_0_rgba(255,128,45,0.3)] dark:drop-shadow-[1rem_-1rem_0_var(--color-primary2)] animate-up-and-down' />
      <Green className='absolute size-[15vh] left-[10%] top-[30%] rotate-[-15deg] aspect-square drop-shadow-[1rem_-1rem_0_rgba(255,128,45,0.3)] dark:drop-shadow-[1rem_-1rem_0_var(--color-primary2)] animate-up-and-down' />
      <Blue className='absolute size-[15vh] left-[53%] top-[60%] rotate-[5deg] aspect-square drop-shadow-[1rem_-1rem_0_rgba(255,128,45,0.3)] dark:drop-shadow-[1rem_-1rem_0_var(--color-primary2)] animate-up-and-down' />
    </>
  );
}
