import { Badge } from './badge';
import { Button } from './button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';

export default function Tag({ title }: { title: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Badge
          className='text-lg cursor-pointer'
          onClick={() => console.log('배지 클릭')}
        >
          {`#${title}`}
        </Badge>
      </DialogTrigger>
      <DialogContent className='flex flex-col items-center gap-6'>
        <DialogHeader>
          <DialogTitle>{`#${title}`}</DialogTitle>
        </DialogHeader>
        <p className='w-3/4 text-sm'></p>
        <DialogFooter>
          <DialogClose asChild>
            <Button size='lg'>닫기</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
