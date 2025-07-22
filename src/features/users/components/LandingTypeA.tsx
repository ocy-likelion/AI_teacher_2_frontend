export default function LandingTypeA() {
  return (
    <section className='relative h-full w-full px-5 '>
      <div className='relative flex flex-col gap-3 z-100'>
        <h1 className='title-md'>
          "엄마, 이거 어떻게 풀어?"
          <br />
          <span className='text-primary'>AI</span>가 부모님께
          <br />
          <span className='text-primary'>설명방법을</span> 알려드려요{''}
        </h1>
        <div className='text-gray5 dark:text-gray2 body-md'>
          어려운 수학 문제, 이제 쉽게 설명해줄 수 있어요
        </div>
      </div>
      <div className='w-[380px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/5 z-0 star-pulse'>
        <img src='/images/Star_Yellow.svg' alt='star' className='w-full' />
      </div>
      {/* 도형들 컨테이너 - 배경 별 안쪽에 배치 */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/5 w-80 h-96 z-10'>
        {/* 초록 사각형 - 왼쪽 위 */}
        <div className='absolute top-13 left-0 rotate-green'>
          <img
            src='/images/characters/green.svg'
            alt='green character'
            className='w-30 h-30 transform rotate-[20deg]'
          />
        </div>

        {/* 노랑 도형 - 오른쪽 위 */}
        <div className='absolute top-20 right-3 rotate-yellow'>
          <img
            src='/images/characters/yellow.svg'
            alt='yellow character'
            className='w-34 h-34 transform rotate-[10deg]'
          />
        </div>

        <div className='absolute bottom-11 left-2/4 -translate-x-1/2 rotate-orange'>
          <img
            src='/images/characters/orange_triangle.svg'
            alt='orange triangle'
            className='w-30 h-30 transform rotate-[-15deg]'
          />
        </div>
      </div>
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 z-10'>
        <div className='flex flex-col items-center gap-4 z-100'>
          <div className='w-12 h-12 rounded-md flex items-center justify-center'>
            <img src='/images/Kakao.svg' alt='kakao' className='w-45 h-45' />
          </div>
          <div className='text-gray5 dark:text-gray2 body-md' >
            아이디로 로그인할래요!
          </div>
        </div>
      </div>
    </section>
  );
}
