export default function OnBoardingIntro() {
  let introMessage = (
    <>
      안녕하세요!
      <br />
      <span className='text-primary'>일타</span>는 처음 이용하시는 군요?
    </>
  );
  return (
    <div className='min-h-[115px] px-6 mb-[10vh]'>
      <img
        src='/images/logo/Logo_Img_noBg.svg'
        alt=''
        className='aspect-square size-[49px]'
      />
      <h1 className='font-korean-title font-medium text-3xl break-keep'>
        {introMessage}
      </h1>
    </div>
  );
}
