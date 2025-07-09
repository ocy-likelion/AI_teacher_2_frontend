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
import { useState, type JSX } from 'react';

export default function EditChildInfoForm() {
  const [childName, setChildName] = useState<string>('고길동');
  const [tempName, setTempName] = useState<string>('');
  const [childGrade, setChildGrade] = useState<string>('4');
  var selectItemsLists: JSX.Element[] = GRADE_OPTIONS.map(
    ({ label, value }) => (
      <SelectItem key={value} value={value}>
        {label}
      </SelectItem>
    )
  );

  const clickHandler = () => {
    setChildName(tempName);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='sm_link' variant='link'>
          <h2 className='text-primary'>{childName}</h2>
          <SquarePen color='#ff7710' size={16.25} className='-ml-1 -mt-5' />
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
            <SelectContent>{selectItemsLists}</SelectContent>
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
  );
}
