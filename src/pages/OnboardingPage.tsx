import { useState } from 'react';
import { useForm } from 'react-hook-form';
import LoginForm from '@/features/users/components/LoginForm';
// import ChildInfoGradeInput from '@/features/users/components/ChildInfoGradeInput';
import OnBoardingIntro from '@/features/users/components/OnBoardingIntro';
import ChildInfoInput from '@/features/users/components/ChildInfoInput';
import type { userData } from '@/types/user.type';

// const data = {
//   id: 'gildongmom',
//   password: '1q2w3e4r',
//   childName: '고길동',
//   childGrade: '8',
// };

export default function OnboardingPage() {
  const [isUser, setIsUser] = useState<boolean>(true);

  const {
    register,
    control,
    watch,
    handleSubmit,
    // formState: { errors },
  } = useForm<userData>({
    defaultValues: {
      username: '',
      password: '',
      childName: '',
      childGrade: '',
    },
    mode: 'onSubmit',
  });

  return (
    <div className='w-full h-full mt-[50px]'>
      {OnBoardingIntro(isUser)}
      {isUser && (
        <LoginForm
          watch={watch}
          handleSubmit={handleSubmit}
          register={register}
          setIsUser={setIsUser}
        />
      )}
      {!isUser && (
        <ChildInfoInput
          watch={watch}
          control={control}
          handleSubmit={handleSubmit}
          register={register}
        />
      )}
    </div>
  );
}
