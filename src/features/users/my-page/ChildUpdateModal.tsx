import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select';
import type { BaseModalProps } from '@/types/modal.type';
import type { UpdateChildRequest } from '@/types/user.type';
import { GRADE_OPTIONS } from '@/utils/constants/grades';
import { Controller, useForm } from 'react-hook-form';

interface ChildUpdateModal extends BaseModalProps {
  name: string;
  grade: number;
  onConfirm: (data: UpdateChildRequest) => void;
}

type ChildUpdateForm = {
  name: string;
  grade: string;
};

export default function ChildUpdateModal({
  name,
  grade,
  onConfirm,
  onClose,
}: ChildUpdateModal) {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<ChildUpdateForm>({
    defaultValues: { name, grade: String(grade) },
    mode: 'onChange',
  });

  const onSubmit = (data: ChildUpdateForm) => {
    if (name === data.name && grade === Number(data.grade)) {
      onClose();
      return;
    }

    onConfirm({
      name: data.name,
      grade: Number(data.grade),
    });
    onClose();
  };

  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogContent className='flex flex-col items-center gap-4'>
        <DialogHeader>
          <DialogTitle>자녀 정보 수정</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-full flex flex-col items-center gap-5'
        >
          <section className='w-3/4 flex flex-col items-center gap-3'>
            <Input
              {...register('name', { required: true })}
              placeholder='자녀의 이름을 입력해주세요.'
              className='body-sm'
            />
            <Controller
              name='grade'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='학년을 선택해주세요' />
                  </SelectTrigger>
                  <SelectContent avoidCollisions={false} className='w-full'>
                    <SelectGroup>
                      {GRADE_OPTIONS.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={String(option.value)}
                          className='body-sm'
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </section>
          <DialogFooter>
            <Button
              type='submit'
              size='sm'
              className='body-sm'
              variant={isValid ? 'default' : 'disabled'}
            >
              수정하기
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
