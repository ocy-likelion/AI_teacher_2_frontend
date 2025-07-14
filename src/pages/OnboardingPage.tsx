import { useState } from 'react';
import { useForm } from 'react-hook-form';
import LoginForm from '@/features/users/components/LoginForm';
import ChildInfoNameInput from '@/features/users/components/ChildInfoNameInput';
import ChildInfoGradeInput from '@/features/users/components/ChildInfoGradeInput';
import OnBoardingIntro from '@/features/users/components/OnBoardingIntro';

// const data = {
//   id: 'gildongmom',
//   password: '1q2w3e4r',
//   childName: '고길동',
//   childGrade: '8',
// };

export default function OnboardingPage() {
  const [isUser, setIsUser] = useState<boolean>(true);
  const [childNameInput, setChildNameInput] = useState<boolean>(false);

  const {
    register,
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: { id: '', password: '', childName: '', childGrade: '' },
    mode: 'onSubmit',
  });

  return (
    <div className='w-full h-full mt-[50px]'>
      {OnBoardingIntro(isUser)}
      {!!isUser && (
        <LoginForm
          handleSubmit={handleSubmit}
          register={register}
          setIsUser={setIsUser}
        />
      )}
      {!isUser && !childNameInput && (
        <ChildInfoNameInput
          handleSubmit={handleSubmit}
          register={register}
          setChildNameInput={setChildNameInput}
        />
      )}
      {!!childNameInput && (
        <ChildInfoGradeInput handleSubmit={handleSubmit} control={control} />
      )}
    </div>
  );
}
