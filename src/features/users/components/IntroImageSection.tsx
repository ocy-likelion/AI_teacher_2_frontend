import IntroImages from '@/components/introImages';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function IntroImageSection() {
  const isLong = useMediaQuery(
    '(orientation: landscape) and (max-height: 850px)',
  );
  // const isLandscape = useMediaQuery('(min-aspect-ratio: 1/1)');

  // const isHide = isLong && isLandscape;
  return (
    <section className='flex flex-col md:my-auto md:px-20 md:pt-15 justify-center flex-1'>
      <section className='flex flex-col will-change-transform pl-5'>
        <h1 className='title-md md:text-center'>
          "엄마, 이거 어떻게 풀어?"
          <br />
          <span className='text-primary'>AI</span>가 부모님께
          <br className='md:hidden' />
          <span className='text-primary'> 설명 방법</span>을 알려드려요
        </h1>
        <p className='text-gray5 dark:text-gray2 body-md md:text-center'>
          어려운 수학 문제, 이제 쉽게 설명해줄 수 있어요
        </p>
      </section>
      {!isLong && <IntroImages />}
    </section>
  );
}
