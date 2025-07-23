import { INTROMESSAGE } from '@/utils/constants/IntroMessages';

type OnBoardingIntroProp = { step: number };

export default function OnBoardingIntro({ step }: OnBoardingIntroProp) {
  return (
    <div className='min-h-[115px] px-[31px] mt-[24px] mb-[10vh]'>
      <section className='h-fit'>
        <progress
          id='step'
          className='w-full transition-transform duration-300'
          value={step === 0 ? step + 1 : step}
          max={3}
        ></progress>
        <label
          htmlFor='step'
          className='preahvihear-regular text-[13px] block text-right mt-[5px] mr-[2px]'
        >
          {step === 0 ? step + 1 : step} / 3
        </label>
      </section>
      {INTROMESSAGE[step]}
    </div>
  );
}
