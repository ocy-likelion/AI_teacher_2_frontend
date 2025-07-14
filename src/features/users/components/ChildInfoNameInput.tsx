import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { userData } from '@/types/types';
import type { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

type ChildInfoNameInputProps = {
  handleSubmit: UseFormHandleSubmit<userData>;
  register: UseFormRegister<userData>;
  setChildNameInput: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ChildInfoNameInput({
  handleSubmit,
  register,
  setChildNameInput,
}: ChildInfoNameInputProps) {
  const ChildNameFormHandler = (
    setChildNameInput: React.Dispatch<React.SetStateAction<boolean>>,
    data: userData
  ) => {
    if (data.childName !== '') setChildNameInput(true);
  };
  return (
    <form
      id='childInfoName'
      className='flex flex-col gap-5 px-[25px]'
      onSubmit={handleSubmit((data) => {
        ChildNameFormHandler(setChildNameInput, data);
      })}
    >
      <Label
        htmlFor='childName'
        className='font-korean-title text-xl font-bold'
      >
        자녀의 이름을 입력해 주세요.
      </Label>
      <Input
        id='childName'
        className='px-[15px] py-[9px] h-[52px] box-border mb-2 border-primary border-[1px] rounded-[12px]'
        placeholder='이름을 입력하세요.'
        {...register('childName', {
          required: '자녀의 이름을 입력해주세요.',
        })}
      />
      <Button type='submit' className='h-[48px]'>
        확인
      </Button>
    </form>
  );
}
