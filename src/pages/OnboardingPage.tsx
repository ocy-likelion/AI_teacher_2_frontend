import { useForm } from 'react-hook-form';
import OnBoardingIntro from '@/features/users/components/OnBoardingIntro';
import ChildInfoInput from '@/features/users/components/ChildInfoInput';
import type { userData } from '@/types/user.type';

export default function OnboardingPage() {
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
      childGrade: undefined,
    },
    mode: 'onSubmit',
  });

  return (
    <div className='w-full h-full mt-[50px]'>
      {OnBoardingIntro()}
      <ChildInfoInput
        watch={watch}
        control={control}
        handleSubmit={handleSubmit}
        register={register}
      />
    </div>
  );
}
