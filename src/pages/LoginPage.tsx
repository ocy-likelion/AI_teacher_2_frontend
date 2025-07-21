import SubHeader from '@/components/layout/SubHeader';
import LoginForm from '@/features/users/components/LoginForm';
import type { userData } from '@/types/user.type';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
  const {
    register,
    watch,
    handleSubmit,
    // formState: { errors },
  } = useForm<userData>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  return (
    <section className='h-[calc(100%-55px)]'>
      <SubHeader type='back' title='' />
      <div className='w-full h-full pt-[15px] pb-[55px] flex flex-1 flex-col items-center-safe'>
        <img
          src='/images/logo/Logo_Img_noBg.svg'
          alt='일타_로고.svg'
          className='size-25 mx-auto'
        />
        <h3 className='mt-2 title-md '>
          <span className='text-primary'>일타</span>에 오신걸 환영해요!
        </h3>
        <p className='text-[#6D6D6D] dark:text-[#FDFBF9] body-sm mt-[13px] mb-[13vh]'>
          아이의 궁금증, 함께 풀어드릴게요
        </p>
        <LoginForm
          watch={watch}
          handleSubmit={handleSubmit}
          register={register}
        />
      </div>
    </section>
  );
}
