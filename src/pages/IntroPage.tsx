import IntroImageSection from '@/features/users/components/IntroImageSection';
import IntroLoginFunction from '@/features/users/components/IntroLoginSection';
import LogoHeader from '@/assets/images/logo/Logo_Header.svg?react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function IntroPage() {
  const isMd = useMediaQuery('(min-width: 768px)');

  return (
    <section className='md:min-h-dvh md:max-h-dvh w-full flex flex-col pt-10 md:justify-end items-center md:not-dark:bg-gray1 md:dark:bg-background-dark '>
      <section className='w-fit flex flex-col flex-1 md:dark:bg-background-dark-secondary md:rounded-t-[12px] not-dark:bg-white '>
        {isMd && (
          <section className='pl-4 pt-3'>
            <LogoHeader className='scale-105' />
          </section>
        )}
        <IntroImageSection />
        <IntroLoginFunction />
      </section>
    </section>
  );
}
