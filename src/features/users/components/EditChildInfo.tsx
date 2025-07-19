import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { GRADE_OPTIONS } from '@/utils/constants/grades';
import { SquarePen } from 'lucide-react';
import { useState, useEffect } from 'react';
import useUserStore from '@/stores/userStore';
import { useUpdateCurrentChild } from '../api/get-user-info';

export default function EditChildInfoForm() {
  const { user } = useUserStore();

  const { updateCurrentChild, isLoading } = useUpdateCurrentChild();

  const [childName, setChildName] = useState<string>(
    user?.childName ? user.childName : '고길동'
  );
  const [tempName, setTempName] = useState<string>("");
  const [childGrade, setChildGrade] = useState<string>("1");

  useEffect(() => {
    if (user?.childGrade !== undefined) {
      setChildGrade(user.childGrade.toString());
    }
  }, [user?.childGrade]);

  const handleUpdateChild = () => {
    const updatedName = tempName || childName;

    updateCurrentChild({
      name: updatedName,
      grade: parseInt(childGrade),
    });
    setChildName(updatedName);
  };

  return (
    <div className='flex flex-row h-[35px] font-korean-title font-bold text-2xl gap-[7px] mb-3'>
      <h2>안녕하세요</h2>
      <div className='flex flex-row cursor-pointer'>
        <div className='flex justify-center'>
          <Dialog>
            <DialogTrigger asChild>
              <Button size='sm_link' variant='link'>
                <h2 className='text-primary'>{childName}</h2>
                <SquarePen
                  color='#ff7710'
                  size={16.25}
                  className='-ml-1 -mt-5'
                />
              </Button>
            </DialogTrigger>
            <DialogContent className='flex flex-col items-center gap-6'>
              <DialogHeader>
                <DialogTitle>자녀 정보 수정</DialogTitle>
              </DialogHeader>
              <div className='w-full flex flex-col items-center gap-2'>
                <Input
                  className='w-3/4 border-primary'
                  placeholder='이름을 입력하세요'
                  defaultValue={childName}
                  onChange={(e) => setTempName(e.target.value)}
                />
                <Select value={childGrade} onValueChange={setChildGrade}>
                  <SelectTrigger className='w-3/4'>
                    <SelectValue placeholder='학년을 선택하세요' />
                  </SelectTrigger>
                  <SelectContent>
                    {GRADE_OPTIONS.map(({ label, value }) => (
                      <SelectItem key={value} value={value.toString()}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    onClick={handleUpdateChild}
                    size='lg'
                    type='submit'
                    disabled={isLoading}
                  >
                    {isLoading ? '저장 중...' : '수정하기'}
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <h2>부모님!</h2>
    </div>
  );
}