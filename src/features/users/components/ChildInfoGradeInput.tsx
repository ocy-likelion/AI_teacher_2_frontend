import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Controller,
  type Control,
  type UseFormHandleSubmit,
} from 'react-hook-form';
import { selectItemsLists } from './SelectItemsLists';
import { Button } from '@/components/ui/button';
import type { userData } from '@/types/types';
import { ChildGradeFormHandler } from '../hooks/useLoginFlow';
import { useNavigate } from 'react-router-dom';

type ChildInfoGradeInputProps = {
  handleSubmit: UseFormHandleSubmit<userData>;
  control: Control<userData>;
};

export default function ChildInfoGradeInput({
  handleSubmit,
  control,
}: ChildInfoGradeInputProps) {
  const navigate = useNavigate();

  return (
    <form
      id='childInfoGrade'
      className='flex flex-col gap-5 px-[25px]'
      onSubmit={handleSubmit((data) => {
        console.log(data);
        ChildGradeFormHandler(data, navigate);
      })}
    >
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
            <SelectTrigger className={`min-h-[52px] w-full rounded-[12px] `}>
              <SelectValue placeholder='학년을 선택하세요' />
            </SelectTrigger>
            <SelectContent className='rounded-[12px]'>
              {selectItemsLists}
            </SelectContent>
          </Select>
        )}
      />
      <Button type='submit' className='h-[48px]'>
        확인
      </Button>
    </form>
  );
}
