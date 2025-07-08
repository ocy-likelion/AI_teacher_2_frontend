import { Badge } from '@/components/ui/badge';
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
import { Camera, SquarePen } from 'lucide-react';

export default function HomePage() {
  return (
    <div className='relative'>
      <div className='max-w-full aspect-[325/225] px-[25px] box-border mt-[83px]'>
        <div className='w-full flex flex-col h-full'>
          <div className='flex flex-row h-[35px] font-korean-title font-bold text-2xl gap-[7px] mb-3'>
            <h2>안녕하세요</h2>
            <div className='flex flex-row cursor-pointer'>
              <h2 className='text-primary'>고길동</h2>
              <SquarePen color='#ff7710' size={16.25} className='' />
            </div>
            <h2>부모님!</h2>
          </div>
          <div className='text-gray5 flex flex-col flex-grow items-center justify-center max-h-full max-w-full rounded-[24px] border-[1px] border-primary'>
            <Camera width={120} height={75} className='' />
            <span className='font-medium text-sm cursor-default'>
              문제를 등록해보세요
            </span>
          </div>
        </div>
      </div>
      <div className='mx-[29px] max-w-full h-[225px] mt-[53px]'>
        <h2 className='font-korean-title font-bold text-2xl'>
          자녀분이 어려워하는 <span className='text-primary'>주제</span>예요!
        </h2>
        <div className='flex mt-5 gap-5'>
          <Dialog>
            <DialogTrigger asChild>
              <Badge
                className='text-lg cursor-pointer'
                onClick={() => console.log('배지 클릭')}
              >
                #원
              </Badge>
            </DialogTrigger>
            <DialogContent className='flex flex-col items-center gap-6'>
              <DialogHeader>
                <DialogTitle>#원</DialogTitle>
              </DialogHeader>
              <p className='w-3/4 text-sm'>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </p>
              <DialogFooter>
                <DialogClose asChild>
                  <Button size='lg'>닫기</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Badge
                className='text-lg cursor-pointer'
                onClick={() => console.log('배지 클릭')}
              >
                #원의 넓이
              </Badge>
            </DialogTrigger>
            <DialogContent className='flex flex-col items-center gap-6'>
              <DialogHeader>
                <DialogTitle>#원의 넓이</DialogTitle>
              </DialogHeader>
              <p className='w-3/4 text-sm'>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </p>
              <DialogFooter>
                <DialogClose asChild>
                  <Button size='lg'>닫기</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className='w-full h-[284px] bg-primary absolute botton-0'></div>
    </div>
  );
}
