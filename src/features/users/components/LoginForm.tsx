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
import { useMutation } from '@tanstack/react-query';
import { httpClient } from '@/lib/api-client';
import { useNavigate } from 'react-router-dom';
import useUserStore, { type userStore } from '@/stores/useUserStore';
import { toast } from 'sonner';

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
  const setUser = useUserStore((store: userStore) => store.setUser);
  const user = useUserStore((store: userStore) => store.user);

  const login = useMutation({
    mutationFn: async (data: userData) => {
      const formData = new FormData();
      formData.append('username', data.id);
      formData.append('password', data.password);

      const JsonData = Object.fromEntries(formData.entries());
      return await httpClient.post('/member/login', JSON.stringify(JsonData), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: (res) => {
      //현재 res값으로 로그인이 성공했다는 메시지만 return되므로
      //위의 data.id와 data.password를 따로 변수에 저장 후 전역 관리
      //홈페이지에 '김길동'으로 표시된다면 로그인이 성공했다고 생각하면 됨
      setUser({ id: idValue, childName: '김길동' });
      console.log(res);
      console.log(user);
      toast.success('로그인 성공');
      navigate('/');
    },
    onError: (err) => {
      console.error(err);
      toast.error('잘못 입력된 아이디 또는 비밀번호입니다.');
      if (confirm('회원가입 하시겠습니까?')) setIsUser(false);
    },
  });

  const idValue = watch('id');
  const passwordValue = watch('password');

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
        type='submit'
        className='h-[48px]'
      >
        {login.isPending ? ' · · · ' : '로그인'}
      </Button>
    </form>
  );
}
