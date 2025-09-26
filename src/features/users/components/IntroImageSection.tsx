import IntroImages from '@/components/introImages';
import Yellow from '@/assets/images/characters/yellow.svg?react';
import Green from '@/assets/images/characters/green.svg?react';
import OrangeTriangle from '@/assets/images/characters/orange_triangle.svg?react';

export default function IntroImageSection() {
  return (
    <section className='flex flex-col md:my-auto px-20 py-15 '>
      <section className='flex flex-col will-change-transform '>
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
      <IntroImages />
    </section>
  );
}
