import { Skeleton } from '@/components/ui/skeleton';
import CardWrapper from '../components/CardWrapper';

type DesktopSkeletonProps = {
  count?: number;
};

export default function DesktopSkeleton({ count }: DesktopSkeletonProps) {
  return (
    <section className='w-full flex flex-col items-center gap-3 p-2'>
      {Array.from({ length: count ?? 5 }).map((_, idx) => (
        <DesktopSkeletonItem key={idx} />
      ))}
    </section>
  );
}

function DesktopSkeletonItem() {
  return (
    <CardWrapper>
      <div className='w-full flex justify-between items-start'>
        <div className='w-full flex items-center gap-6'>
          <Skeleton className='shrink-0 w-[120px] aspect-square' />
          <div className='w-full flex flex-col gap-2'>
            <Skeleton className='w-full h-[18px] rounded-[12px]' />
            <Skeleton className='w-1/2 h-[14px] rounded-[12px]' />
            <Skeleton className='w-1/5 h-[12px] rounded-[12px]' />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
