import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { userData } from '@/types/user.type';
import {
  Controller,
  type Control,
  type UseFormHandleSubmit,
  type UseFormRegister,
  type UseFormWatch,
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { selectItemsLists } from './SelectItemsLists';
import { useEffect, useState } from 'react';
import { SetUser } from '../api/update-user-info';

type ChildInfoNameInputProps = {
  watch: UseFormWatch<userData>;
  control: Control<userData>;
  handleSubmit: UseFormHandleSubmit<userData>;
  register: UseFormRegister<userData>;
};

export default function ChildInfoInput({
  watch,
  control,
  handleSubmit,
  register,
}: ChildInfoNameInputProps) {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<boolean>(false);
  const ChildNameFormHandler = (data: userData) => {
    if (data.childName !== '') {
      console.log(data);
    }
    if (data.childGrade !== '') {
      SetUser({
        id: data.username,
        childName: data.childName,
        childGrade: data.childGrade,
      });
      navigate('/');
    }
  };

  const childNameValue = watch('childName');
  const childGradeValue = watch('childGrade');

  useEffect(() => {
    if (childNameValue?.trim() !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [childNameValue]);

  return (
    <form
      id='childInfoName'
      className='flex flex-col gap-5 px-[25px]'
      onSubmit={handleSubmit((data) => {
        ChildNameFormHandler(data);
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
        maxLength={6}
        {...register('childName', {
          required: '자녀의 이름을 입력해주세요.',
        })}
        onBlur={() => setIsActive(true)}
      />
      {childNameValue !== '' && isActive && (
        <>
          <Label
            htmlFor='childGrade'
            className='font-korean-title text-xl font-bold'
          >
            자녀의 학년을 입력해 주세요.
          </Label>
          <Controller
            name='childGrade'
            control={control}
            rules={{ required: '학년을 반드시 선택해야 합니다.' }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  className={`min-h-[52px] w-full rounded-[12px] `}
                >
                  <SelectValue placeholder='학년을 선택하세요' />
                </SelectTrigger>
                <SelectContent className='rounded-[12px]'>
                  {selectItemsLists}
                </SelectContent>
              </Select>
            )}
          />
          <Button
            variant={`${childGradeValue ? 'default' : 'disabled'}`}
            type={`${isActive ? 'submit' : 'button'}`}
            className='h-[48px]'
          >
            {`${childGradeValue ? '확인' : '학년을 선택해주세요.'}`}
          </Button>
        </>
      )}
    </form>
  );
}
