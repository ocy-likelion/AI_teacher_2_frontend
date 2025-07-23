import SubHeader from '@/components/layout/SubHeader';

import OnBoardingIntro from '@/features/users/components/OnBoardingIntro';
import { useState } from 'react';
import IntroButtonGroup from '@/components/ui/introButtonGroup';
import IntroInput from '@/components/ui/introInput';

export default function IntroPage() {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [step, setStep] = useState(0);

  return (
    <div className='w-full h-full flex flex-col'>
      <SubHeader type='back' title='' />
      <OnBoardingIntro step={step} />
      <div className='max-h-[400px] flex-grow flex flex-col justify-center items-center gap-[max(20px,5%)] px-[33px]'>
        <IntroButtonGroup
          type={step}
          selectedValue={selectedValue}
          onSelect={setSelectedValue}
        />
        {step === 2 && <IntroInput />}
      </div>
    </div>
  );
}
