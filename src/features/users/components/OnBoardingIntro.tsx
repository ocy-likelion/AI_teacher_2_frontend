import { INTROMESSAGE } from '@/utils/constants/IntroMessages';
import { useState } from 'react';

export default function OnBoardingIntro() {
  const [step, setStep] = useState(0);

  return (
    <div className='min-h-[115px] px-[31px] mt-[24px] mb-[10vh]'>
      {INTROMESSAGE[0]}
    </div>
  );
}
