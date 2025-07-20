import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';
import type { userData } from '@/types/user.type';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../api/useLoginMutation';

type LoginFormProps = {
  watch: UseFormWatch<userData>;
  handleSubmit: UseFormHandleSubmit<userData>;
  register: UseFormRegister<userData>;
};

export default function LoginForm({
  watch,
  handleSubmit,
  register,
}: LoginFormProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const navigate = useNavigate();

  const usernameValue = watch('username') ?? '';
  const passwordValue = watch('password') ?? '';

  const login = useLogin(usernameValue, navigate);

  useEffect(() => {
    if (usernameValue.trim() !== '' && passwordValue.trim() !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [usernameValue, passwordValue]);

  return (
    <form
      id='login'
      onSubmit={handleSubmit((data) => {
        login.mutate(data);
        // 로그인 API 문제 발생 시 임시로 다음 페이지도 넘어가게 하는 용도
        // setIsUser(false);
      })}
      className='flex flex-col w-full gap-5 px-[33px]'
    >
      <Input
        id='username'
        placeholder='아이디를 입력하세요'
        className='px-[15px] py-[9px] h-[52px] box-border border-primary border-[1px] rounded-[12px]'
        {...register('username')}
        minLength={3}
        onBlur={() => {
          if (usernameValue !== '' && passwordValue !== '') setIsActive(true);
        }}
      />
      <Input
        type='password'
        id='password'
        placeholder='비밀번호를 입력하세요'
        minLength={4}
        className='px-[15px] py-[9px] h-[52px] box-border border-primary border-[1px] rounded-[12px]'
        {...register('password')}
        onBlur={() => {
          if (usernameValue !== '' && passwordValue !== '') setIsActive(true);
        }}
      />
      <Button
        variant={`${
          isActive ? (login.isPending ? 'disabled' : 'default') : 'disabled'
        }`}
        type={`${isActive ? (login.isPending ? 'button' : 'submit') : 'button'}`}
        className='h-[48px] mb-[55px] mt-[21vh]'
      >
        {login.isPending ? ' · · · ' : '로그인'}
      </Button>
    </form>
  );
}
