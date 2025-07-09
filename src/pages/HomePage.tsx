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
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Camera, SquarePen } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  var divRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const resizeObserver: ResizeObserver = new ResizeObserver(() => {
      if (divRef.current) {
        const divHeight: number = divRef.current.offsetHeight;
        setHeight(Math.floor(divHeight / 2.3));
      }
    });

    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className='relative'>
      <div className='max-w-full aspect-[325/225] px-[25px] box-border mt-[83px]'>
        <div className='w-full flex flex-col h-full'>
          <div className='flex flex-row h-[35px] font-korean-title font-bold text-2xl gap-[7px] mb-3'>
            <h2>안녕하세요</h2>
            <div className='flex flex-row cursor-pointer'>
              <div className='flex justify-center'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size='sm_link' variant='link'>
                      <h2 className='text-primary'>고길동</h2>
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
                      />
                      <Select>
                        <SelectTrigger className='w-3/4'>
                          <SelectValue placeholder='학년을 선택하세요' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='1'>초등 1학년</SelectItem>
                          <SelectItem value='2'>초등 2학년</SelectItem>
                          <SelectItem value='3'>초등 3학년</SelectItem>
                          <SelectItem value='4'>초등 4학년</SelectItem>
                          <SelectItem value='5'>초등 5학년</SelectItem>
                          <SelectItem value='6'>초등 6학년</SelectItem>
                          <SelectItem value='7'>중등 1학년</SelectItem>
                          <SelectItem value='8'>중등 2학년</SelectItem>
                          <SelectItem value='9'>중등 3학년</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button size='lg'>수정하기</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <h2>부모님!</h2>
          </div>
          <Link
            to='/problem/upload'
            className='text-gray5 flex flex-col flex-grow items-center max-h-full max-w-full rounded-[24px] dark:text-gray2 inset-shadow-primary'
          >
            <div
              ref={divRef}
              className='flex justify-center flex-grow flex-col '
            >
              <Camera width={120} height={height} />
              <span className='font-medium text-md cursor-default'>
                문제를 등록해보세요
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className='mx-[29px] max-w-full min-h-[55px] mt-[53px] flex flex-grow flex-col'>
        <h2 className='font-korean-title font-bold text-2xl'>
          자녀분이 어려워하는 <span className='text-primary'>주제</span>예요!
        </h2>
        <div className='flex mt-5 gap-5 flex-wrap'>
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
      {/* <div className='w-full h-[284px] bg-primary absolute botton-0'></div> */}
    </div>
  );
}
