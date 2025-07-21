export default function OnBoardingIntro() {
  let introMessage = [
    <>
      <h1 className='font-korean-title font-medium text-3xl break-keep'>
        아이, 학교는 <span className='text-primary'>어디</span>인가요?
      </h1>
      <p className='font-korean-title font-medium text-sm text-[#6D6D6D]'>
        자녀에게 꼭 맞는 정보를 드릴게요
      </p>
    </>,
    <>
      <h1 className='font-korean-title font-medium text-3xl break-keep'>
        우리 아이 <span className='text-primary'>학년</span>이 어떻게 되나요?
      </h1>
      <p className='font-korean-title font-medium text-sm text-[#6D6D6D]'>
        학년에 맞는 정보로 준비했어요
      </p>
    </>,
    <>
      <h1 className='font-korean-title font-medium text-3xl break-keep'>
        우리 아이<span className='text-primary'>이름</span>이 뭐예요?
      </h1>
      <p className='font-korean-title font-medium text-sm text-[#6D6D6D]'>
        이름을 알려주지면 더 정확해져요
      </p>
    </>,
    <>
      <h1 className='font-korean-title font-medium text-3xl break-keep'>
        아이 정보<span className='text-primary'> 등록 완료!</span>
      </h1>
      <p className='font-korean-title font-medium text-sm text-[#6D6D6D]'>
        일타가 쉽게 설명하는 방법을 알려드릴게요
      </p>
    </>,
  ];
  return (
    <div className='min-h-[115px] px-[31px] mt-[24px] mb-[10vh]'>
      {introMessage[0]}
    </div>
  );
}
