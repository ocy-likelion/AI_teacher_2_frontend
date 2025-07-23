import { INTROMESSAGE } from '@/utils/constants/IntroMessages';

type OnBoardingIntroProp = { step: number };

export default function OnBoardingIntro({ step }: OnBoardingIntroProp) {
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
      {INTROMESSAGE[step]}
    </div>
  );
}
