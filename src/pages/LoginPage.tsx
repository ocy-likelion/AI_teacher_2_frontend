import SubHeader from '@/components/layout/SubHeader';
import Loading from '@/components/Loading';
import { useLogin } from '@/features/users/api/useLoginMutation';
import LoginForm from '@/features/users/components/LoginForm';
import type { userData } from '@/types/user.type';
import { useForm } from 'react-hook-form';
import Logo from '@/assets/images/logo/Logo_Img_noBg.svg?react';

export default function LoginPage() {
  const { register, watch, handleSubmit } = useForm<userData>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const login = useLogin();

  const handleLogin = (data: userData) => {
    login.mutate(data);
  };

  if (login.isPending) return <Loading />;

  return (
    <section className='h-[calc(100%-55px)]'>
      <SubHeader type='back' title='' />
      <div className='w-full h-full pt-[15px] pb-[55px] flex flex-1 flex-col items-center-safe'>
        <Logo className='mx-auto size-25' />
        <h3 className='mt-2 title-md '>
          <span className='text-primary'>일타</span>에 오신걸 환영해요!
        </h3>
        <p className='text-[#6D6D6D] dark:text-[#FDFBF9] body-sm mt-[13px] mb-[13vh]'>
          아이의 궁금증, 함께 풀어드릴게요
        </p>
        <LoginForm
          watch={watch}
          register={register}
          onSubmit={handleSubmit(handleLogin)}
          isPending={login.isPending}
        />
      </div>
    </section>
  );
}
