import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import LoginForm from '@/features/users/components/LoginForm';
import ChildInfoNameInput from '@/features/users/components/ChildInfoNameInput';
import ChildInfoGradeInput from '@/features/users/components/ChildInfoGradeInput';

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

  useEffect(() => {}, [isUser]);
  var introMessage = isUser ? (
    <>
      <span className='text-primary'>일타</span>에 오신 걸 환영합니다!
    </>
  ) : (
    <>
      안녕하세요!
      <br />
      <span className='text-primary'>일타</span>는 처음 이용하시는 군요?{' '}
    </>
  );

  return (
    <div className='w-full h-full mt-[50px]'>
      <div className='min-h-[115px] px-6 mb-[10vh]'>
        <img
          src='/images/Logo_Img_noBg.svg'
          alt=''
          className='aspect-square size-[49px]'
        />
        <h1 className='font-korean-title font-medium text-3xl'>
          {introMessage}
        </h1>
      </div>
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
