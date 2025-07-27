import { useState, useEffect } from 'react';
import SubHeader from '@/components/layout/SubHeader';
import OrangeCircle from '@/assets/images/characters/orange_circle.svg?react';
import Blue from '@/assets/images/characters/blue.svg?react';
import Green from '@/assets/images/characters/green.svg?react';

type StepData = {
  title: string;
  subtitle: string;
  content: string;
};

const DEFAULT_ANIMATION_DELAY = 0.1;
const STEP_DISPLAY_TIME = 5000;

export default function ProblemUploadLoading() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps: StepData[] = [
    {
      title: 'AI가 해설을 만들고있어요!',
      subtitle: '',
      content: 'generating',
    },
    {
      title: '문제를 분석하고 있어요',
      subtitle: '',
      content: 'analyzing',
    },
    {
      title: '이해하기 쉬운 설명이 도착해요',
      subtitle: '',
      content: 'completed',
    },
  ];

  useEffect(() => {
    if (currentStep < 2) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, STEP_DISPLAY_TIME);

      return () => clearTimeout(timer);
    } else if (currentStep === 2) {
      const timer = setTimeout(() => {
        setCurrentStep(0);
      }, STEP_DISPLAY_TIME);

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className='w-full h-full flex flex-col'>
      <SubHeader type='back' title='' />

      <div className='flex-1 flex flex-col items-center justify-center text-center h-full -mt-30'>
        <div className='flex flex-col items-center justify-center gap-4 w-full max-w-md space-y-8'>
          <h1 className='text-xl font-bold '>{steps[currentStep].title}</h1>
          <div className='flex flex-col items-center space-y-6'>
            <div className='flex space-x-4'>
              <Green className='w-12 h-12 animate-bounce' />
              <OrangeCircle
                className='w-12 h-12 animate-bounce'
                style={{ animationDelay: `${DEFAULT_ANIMATION_DELAY}s` }}
              />
              <Blue
                className='w-12 h-12 animate-bounce'
                style={{ animationDelay: `${DEFAULT_ANIMATION_DELAY * 2}s` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
