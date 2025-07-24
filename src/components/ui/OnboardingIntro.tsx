import { INTROMESSAGE } from '@/utils/constants/IntroMessages';

type OnBoardingIntroProp = { step: number };

export default function OnboardingIntro({ step }: OnBoardingIntroProp) {
  return (
    <div className='min-h-[115px] px-[31px] mt-[24px] mb-[10vh]'>
      <section className='h-fit'>
        <div className='w-full h-2 bg-gray-200 rounded'>
          <div
            className='h-full bg-[#FF802D] transition-all duration-300 rounded'
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
        <label
          htmlFor='step'
          className='preahvihear-regular text-[13px] block text-right mt-[5px] mr-[2px]'
        >
          {step} / 3
        </label>
      </section>
      <h1 className='font-korean-title font-medium text-3xl break-keep mb-[13px] mt-[8vh]'>
        {INTROMESSAGE[step].main}
      </h1>
      <h5 className='font-korean-title font-medium text-sm text-[#6D6D6D]'>
        {INTROMESSAGE[step].sub}
      </h5>
    </div>
  );
}
