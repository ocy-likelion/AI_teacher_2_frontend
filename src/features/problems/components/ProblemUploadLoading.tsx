import { useState, useEffect } from 'react';
import type { JSX } from 'react';
import { ChevronLeft } from 'lucide-react';

// Props 타입 정의 - 컴포넌트명 + Props
type ProblemUploadComponentProps = {
  onBack?: () => void;
};

// 단계별 데이터 타입
type StepData = {
  title: string;
  subtitle: string;
  content: string;
};

export default function ProblemUploadComponent({
  onBack = () => {},
}: ProblemUploadComponentProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);

  // 상수 정의
  const DEFAULT_ANIMATION_DELAY = 0.1;
  const STEP_DISPLAY_TIME = 5000; // 각 스텝 10초씩

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

  // 자동으로 단계 진행
  useEffect(() => {
    if (currentStep < 2) {
      // 0단계, 1단계 각각 3초씩 진행
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, STEP_DISPLAY_TIME);

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  // 컨텐츠 렌더링 함수
  const renderContent = (): JSX.Element | null => {
    const step = steps[currentStep];

    switch (step.content) {
      case 'generating':
        return (
          <div className='flex flex-col items-center space-y-6'>
            <div className='flex space-x-4'>
              <img
                src='/images/characters/green.svg'
                alt='AI Icon 1'
                className='w-12 h-12 animate-bounce'
              />
              <img
                src='/images/characters/orange_circle.svg'
                alt='AI Icon 2'
                className='w-12 h-12 animate-bounce'
                style={{ animationDelay: `${DEFAULT_ANIMATION_DELAY}s` }}
              />
              <img
                src='/images/characters/blue.svg'
                alt='AI Icon 3'
                className='w-12 h-12 animate-bounce'
                style={{ animationDelay: `${DEFAULT_ANIMATION_DELAY * 2}s` }}
              />
            </div>
          </div>
        );

      case 'analyzing':
        return (
          <div className='flex flex-col items-center space-y-6'>
            <div className='flex space-x-4'>
              <img
                src='/images/characters/green.svg'
                alt='AI Icon 1'
                className='w-12 h-12 animate-bounce'
              />
              <img
                src='/images/characters/orange_circle.svg'
                alt='AI Icon 2'
                className='w-12 h-12 animate-bounce'
                style={{ animationDelay: `${DEFAULT_ANIMATION_DELAY}s` }}
              />
              <img
                src='/images/characters/blue.svg'
                alt='AI Icon 3'
                className='w-12 h-12 animate-bounce'
                style={{ animationDelay: `${DEFAULT_ANIMATION_DELAY * 2}s` }}
              />
            </div>
          </div>
        );

      case 'completed':
        return (
          <div className='flex flex-col items-center space-y-6'>
            <div className='flex space-x-4'>
              <img
                src='/images/characters/green.svg'
                alt='AI Icon 1'
                className='w-12 h-12 animate-bounce'
              />
              <img
                src='/images/characters/orange_circle.svg'
                alt='AI Icon 2'
                className='w-12 h-12 animate-bounce'
                style={{ animationDelay: `${DEFAULT_ANIMATION_DELAY}s` }}
              />
              <img
                src='/images/characters/blue.svg'
                alt='AI Icon 3'
                className='w-12 h-12 animate-bounce'
                style={{ animationDelay: `${DEFAULT_ANIMATION_DELAY * 2}s` }}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='w-full h-full flex flex-col'>
      {/* 헤더 */}
      <div className='flex items-center p-4'>
        <button className='mr-4' onClick={onBack}>
          <ChevronLeft className='w-6 h-6 text-gray-600' />
        </button>
      </div>

      {/* 메인 컨텐츠 */}
      <div className='flex-1 flex flex-col items-center justify-center text-center h-full -mt-30'>
        <div className='flex flex-col items-center justify-center gap-4 w-full max-w-md space-y-8'>
          <h1 className='text-xl font-bold '>{steps[currentStep].title}</h1>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
