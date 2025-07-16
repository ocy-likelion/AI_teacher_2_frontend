import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';
import type { userData } from '@/types/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from '../api/login';

type LoginFormProps = {
  watch: UseFormWatch<userData>;
  handleSubmit: UseFormHandleSubmit<userData>;
  register: UseFormRegister<userData>;
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginForm({
  watch,
  handleSubmit,
  register,
  setIsUser,
}: LoginFormProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const navigate = useNavigate();

  const idValue = watch('id');
  const passwordValue = watch('password');

  const login = Login(idValue, setIsUser, navigate);

  return (
    <form
      id='login'
      onSubmit={handleSubmit((data) => login.mutate(data))}
      className='flex flex-col gap-3 px-[25px]'
    >
      <Label htmlFor='id' className='font-korean-title text-xl font-bold'>
        이름
      </Label>
      <Input
        id='id'
        placeholder='이름을 입력하세요.'
        className='px-[15px] py-[9px] h-[52px] box-border mb-2 border-primary border-[1px] rounded-[12px]'
        {...register('id')}
        minLength={3}
        onBlur={() => {
          if (idValue !== '' && passwordValue !== '') setIsActive(true);
        }}
      />
      <Label htmlFor='password' className='font-korean-title text-xl font-bold'>
        비밀번호
      </Label>
      <Input
        type='password'
        id='password'
        placeholder='******'
        minLength={4}
        className='px-[15px] py-[9px] h-[52px] box-border mb-2 border-primary border-[1px] rounded-[12px]'
        {...register('password')}
        onBlur={() => {
          if (idValue !== '' && passwordValue !== '') setIsActive(true);
        }}
      />
      <Button
        variant={`${
          isActive ? (login.isPending ? 'disabled' : 'default') : 'disabled'
        }`}
        type={`${isActive ? (login.isPending ? 'button' : 'submit') : 'button'}`}
        className='h-[48px]'
      >
        {isActive
          ? login.isPending
            ? ' · · · '
            : '로그인'
          : '아이디 및 비밀번호를 입력해주세요.'}
      </Button>
    </form>
  );
}
