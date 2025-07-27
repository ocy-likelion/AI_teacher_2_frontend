import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { UseFormRegister, UseFormWatch } from 'react-hook-form';
import type { userData } from '@/types/user.type';
import { toast } from 'sonner';

type LoginFormProps = {
  watch: UseFormWatch<userData>;
  register: UseFormRegister<userData>;
  onSubmit: () => void;
  isPending: boolean;
};

export default function LoginForm({
  watch,
  register,
  onSubmit,
  isPending,
}: LoginFormProps) {
  const usernameValue = watch('username') ?? '';
  const passwordValue = watch('password') ?? '';
  const isActive = usernameValue.trim() !== '' && passwordValue.trim() !== '';

  const handleInputError = (
    e: React.FormEvent<HTMLInputElement>,
    type: string,
  ) => {
    e.preventDefault();
    if (type === 'id') {
      toast.error(
        '아이디는 영어 또는 영어+숫자의 조합으로 3자 이상 작성해야 합니다.',
      );
    } else if (type === 'password') {
      toast.error(
        '비밀번호는 영어와 숫자의 조합으로 4자 이상 작성해야 합니다.',
      );
    }
  };

  return (
    <form
      id='login'
      onSubmit={onSubmit}
      className='flex flex-1 flex-col w-full gap-5 px-[33px]'
    >
      <Input
        id='username'
        placeholder='아이디를 입력하세요'
        pattern='^(?=.*[a-zA-Z])[a-zA-Z0-9]*'
        onInvalid={(e) => handleInputError(e, 'id')}
        className='px-[15px] py-[9px] h-[52px] box-border border-primary border-[1px] rounded-[12px]'
        {...register('username')}
        minLength={3}
      />
      <Input
        type='password'
        id='password'
        pattern='^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]*'
        onInvalid={(e) => handleInputError(e, 'password')}
        placeholder='비밀번호를 입력하세요'
        minLength={4}
        className='px-[15px] py-[9px] h-[52px] box-border border-primary border-[1px] rounded-[12px]'
        {...register('password')}
      />
      <Button
        variant={isActive ? (isPending ? 'disabled' : 'default') : 'disabled'}
        type={isActive && !isPending ? 'submit' : 'button'}
        className='h-[48px] mt-auto'
      >
        {isPending ? '로그인 중' : '로그인'}
      </Button>
    </form>
  );
}
