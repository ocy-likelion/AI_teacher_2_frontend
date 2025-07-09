import { useState } from 'react';

export default function OnboardingPage() {
  const [isUser, setIsUser] = useState<boolean>(true);

  var introMessage = isUser ? (
    <>
      <span className='text-primary'>일타</span>에 오신 걸 환영합니다!
    </>
  ) : (
    <>
      안녕하세요!
      <br />
      <span className='text-primary'>일타</span>는 처음 이용하시는 군요?{' '}
    </>
  );

  return (
    <div className='w-full h-full mt-[50px] bg-red'>
      <div className='min-h-[115px] bg-black'>
        <img src='' alt='' className='aspect-square size-[49px]' />
        <h1 className='font-korean-title font-medium text-3xl'>
          {introMessage}
        </h1>
      </div>
    </div>
  );
}
