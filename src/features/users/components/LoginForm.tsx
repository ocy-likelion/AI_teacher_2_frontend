import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoginHandler } from '../hooks/useLoginFlow';
import type { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import type { userData } from '@/types/types';

// const data = {
//   id: 'gildongmom',
//   password: '1q2w3e4r',
//   childName: '고길동',
//   childGrade: '8',
// };

type LoginFormProps = {
  handleSubmit: UseFormHandleSubmit<userData>;
  register: UseFormRegister<userData>;
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginForm({
  handleSubmit,
  register,
  setIsUser,
}: LoginFormProps) {
  return (
    <form
      id='login'
      onSubmit={handleSubmit((data) => LoginHandler(setIsUser, data))}
      className='flex flex-col gap-3 px-[25px]'
    >
      <Label htmlFor='id' className='font-korean-title text-xl font-bold'>
        이름
      </Label>
      <Input
        id='id'
        placeholder='이름을 입력하세요.'
        className='px-[15px] py-[9px] h-[52px] box-border mb-2 border-primary border-[1px] rounded-[12px]'
        {...register('id', { required: 'ID 입력은 필수입니다.' })}
      />
      <Label htmlFor='password' className='font-korean-title text-xl font-bold'>
        비밀번호
      </Label>
      <Input
        type='password'
        id='password'
        placeholder='******'
        className='px-[15px] py-[9px] h-[52px] box-border mb-2 border-primary border-[1px] rounded-[12px]'
        {...register('password', {
          required: '비밀번호 입력은 필수입니다.',
        })}
      />
      <Button type='submit' className='h-[48px]'>
        로그인
      </Button>
    </form>
  );
}
