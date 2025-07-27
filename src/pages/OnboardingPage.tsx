import SubHeader from '@/components/layout/SubHeader';
import { useEffect, useState } from 'react';
import IntroButtonGroup from '@/components/ui/introButtonGroup';
import IntroInput from '@/components/ui/introInput';
import { Button } from '@/components/ui/button';
import { GRADES_NUM, SCHOOL } from '@/utils/constants/grades';
import OnboardingIntro from '@/components/ui/OnboardingIntro';
import OnboardingAnimation from '@/components/ui/OnboardingAnimation';
import validateInput from '@/utils/validateInput';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function OnboardingPage() {
  const [selectedValue, setSelectedValue] = useState<number>(-1);
  const [inputValue, setInputValue] = useState<string>('');
  const [schoolType, setSchoolType] = useState(0);
  const [grade, setGrade] = useState(0);
  const [step, setStep] = useState(0);
  const [buttonText, setButtonText] = useState('다음');
  const [formData, setFormData] = useState({
    name: '',
    grade: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (step === 2) {
      setFormData({
        name: inputValue,
        grade: grade,
      });
      setButtonText('완료');
    } else if (step === 3) {
      setButtonText('시작하기');
    }
  }, [inputValue, step]);

  const handleClick = () => {
    if (selectedValue !== -1) {
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
          break;

        case 2:
          if (validateInput(inputValue)) setStep(3);
          else toast.error('2자 이상의 한글 또는 영어를 입력해주세요');
          break;

        case 3:
          // 여기서 API 연동 TODO
          console.log(formData);
          break;

        default:
          throw new Error('지정된 단계 이상이 선택되었습니다.');
      }
    }
  };

  const onBackClick = () => {
    switch (step) {
      case 1:
        setSelectedValue(-1);
        setGrade(0);
        setSchoolType(0);
        setStep(0);
        break;

      case 2:
        setStep(1);
        setSelectedValue(-1);
        setGrade(grade - GRADES_NUM[selectedValue].value);
        break;

      case 3:
        setInputValue('');
        setStep(2);
        break;

      default:
        navigate(-1);
        break;
    }
  };

  return (
    <div
      className={`w-full h-full relative flex flex-col ${step === 3 ? 'bg-[rgba(255,128,45,0.3)] dark:bg-background-dark' : ''} overflow-hidden`}
    >
      <SubHeader
        type='back'
        title=''
        childConfirm={step === 3 ? true : false}
        onBackClick={onBackClick}
      />
      <OnboardingIntro step={step} />
      <section className='relative max-h-[400px] flex-grow flex flex-col justify-center items-center gap-[max(20px,5%)] px-[33px] mb-10'>
        {step < 2 && (
          <IntroButtonGroup
            type={step}
            schoolType={schoolType}
            selectedValue={selectedValue}
            onSelect={setSelectedValue}
          />
        )}
        {step === 2 && <IntroInput setInputValue={setInputValue} />}
        {step === 3 && <OnboardingAnimation />}
      </section>
      <section className='px-[33px] relative w-full mt-auto mb-15'>
        <Button onClick={handleClick} size={'onboarding'}>
          {buttonText}
        </Button>
      </section>
    </div>
  );
}
