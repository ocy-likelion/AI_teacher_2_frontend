import { Skeleton } from '@/components/ui/skeleton';
import CardWrapper from './CardWrapper';

function GridSkeletonItem() {
  return (
    <CardWrapper padding={false}>
      <div className='w-full h-full flex flex-col gap-2 overflow-hidden p-3'>
        <div className='w-full h-[20px] flex justify-end'>
          <Skeleton className='w-1/3' />
        </div>
        <Skeleton className='flex-1 aspect-square' />
      </div>
    </CardWrapper>
  );
}

export default function GridSkeleton() {
  return (
    <section className='w-full flex flex-col items-center gap-3 p-2'>
      {Array(2)
        .fill(0)
        .map((_, idx) => (
          <GridSkeletonItem key={idx} />
        ))}
    </section>
  );
}
