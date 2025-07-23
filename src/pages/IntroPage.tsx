import SubHeader from '@/components/layout/SubHeader';

import OnBoardingIntro from '@/features/users/components/OnBoardingIntro';
import { useEffect, useState } from 'react';
import IntroButtonGroup from '@/components/ui/introButtonGroup';
import IntroInput from '@/components/ui/introInput';
import { Button } from '@/components/ui/button';
import { GRADES_NUM, SCHOOL } from '@/utils/constants/grades';

export default function IntroPage() {
  const [selectedValue, setSelectedValue] = useState<number>(-1);
  const [inputValue, setInputValue] = useState<string>('');
  const [schoolType, setSchoolType] = useState(0);
  const [grade, setGrade] = useState(0);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    grade: 0,
  });

  useEffect(() => {
    if (step === 2) {
      setFormData({
        name: inputValue,
        grade: grade,
      });
    }
  }, [inputValue, step]);

  const handleClick = () => {
    if (selectedValue !== -1 || inputValue !== '') {
      switch (step) {
        case 0:
          setStep(1);
          setSchoolType(selectedValue);
          setGrade(grade + SCHOOL[selectedValue].value);
          setSelectedValue(-1);
          break;

        case 1:
          setStep(2);
          setGrade(grade + GRADES_NUM[selectedValue].value);
          setSelectedValue(-1);
          break;

        case 2:
          setStep(3);
          break;

        case 3:
          console.log(formData);
          break;

        default:
          throw new Error('지정된 단계 이상이 지정되었습니다.');
      }
    }
  };

  return (
    <div className='w-full h-full flex flex-col'>
      <SubHeader type='back' title='' />
      <OnBoardingIntro step={step} />
      <section className='max-h-[400px] flex-grow flex flex-col justify-center items-center gap-[max(20px,5%)] px-[33px]'>
        <IntroButtonGroup
          type={step}
          schoolType={schoolType}
          selectedValue={selectedValue}
          onSelect={setSelectedValue}
        />
        {step === 2 && <IntroInput setInputValue={setInputValue} />}
      </section>
      <section className='px-[33px] mt-auto mb-15'>
        <Button onClick={handleClick} size={'full'}>
          다음
        </Button>
      </section>
    </div>
  );
}
