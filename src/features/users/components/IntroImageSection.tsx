import IntroImages from '@/components/introImages';

export default function IntroImageSection() {
  return (
    <>
      <section className='relative flex flex-col gap-3 z-50 will-change-transform md:items-center'>
        <h1 className='title-md z-50 md:text-center'>
          "엄마, 이거 어떻게 풀어?"
          <br />
          <span className='text-primary'>AI</span>가 부모님께
          <br className='md:hidden' />
          <span className='text-primary'> 설명 방법</span>을 알려드려요
        </h1>
        <p className='text-gray5 dark:text-gray4 body-md z-50 '>
          어려운 수학 문제, 이제 쉽게 설명해줄 수 있어요
        </p>
      </section>
      <IntroImages />
    </>
  );
}
