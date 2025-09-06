import { Skeleton } from '@/components/ui/skeleton';
import CardWrapper from './CardWrapper';

function ListSkeletonItem() {
  return (
    <CardWrapper>
      <div className='w-full flex flex-col gap-2 p-2'>
        <Skeleton className='w-full h-[18px] rounded-[12px]' />
        <Skeleton className='w-1/2 h-[14px] rounded-[12px]' />
        <Skeleton className='w-1/5 h-[12px] rounded-[12px]' />
      </div>
    </CardWrapper>
  );
}

export default function ListSkeleton() {
  return (
    <section className='w-full flex flex-col items-center gap-3 p-2'>
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <ListSkeletonItem key={idx} />
        ))}
    </section>
  );
}
