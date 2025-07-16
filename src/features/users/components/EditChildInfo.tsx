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
import { useState } from 'react';
import { toast } from 'sonner';
import { SetUser } from '../api/update-user-info';
import { GetUser } from '../api/get-user-info';

export default function EditChildInfoForm() {
  const userData = GetUser();

  const [childName, setChildName] = useState<string>(
    userData?.childName ? userData.childName : '고길동'
  );
  const [tempName, setTempName] = useState<string>('');
  const [childGrade, setChildGrade] = useState<string>('4');

  // 이후 여기서 member의 childName 및 childGrade를 변경하는 axios를 호출할 예정
  // 자녀 학년은 직관적으로 변경되는 사항이 없기 때문에 바로 적용, 자녀 이름은 홈페이지에 바로 표시되기에 tempName 상태 활용
  const clickHandler = () => {
    if (userData) {
      SetUser({
        id: userData.id,
        childName: tempName,
        childGrade: childGrade,
      });
      setChildName(tempName);
    } else {
      setChildName(tempName);
    }
    toast.info('자녀의 이름이 변경되었습니다!');
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
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button onClick={clickHandler} size='lg' type='submit'>
                    수정하기
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
