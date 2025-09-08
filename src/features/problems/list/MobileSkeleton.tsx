import { Skeleton } from '@/components/ui/skeleton';
import CardWrapper from '../components/CardWrapper';

type MobileSkeletonProps = {
  variant: 'list' | 'grid';
  count?: number;
};

export default function MobileSkeleton({
  variant,
  count,
}: MobileSkeletonProps) {
  return (
    <section className='w-full flex flex-col items-center gap-3 p-2'>
      {Array.from({ length: count ?? (variant === 'list' ? 5 : 2) }).map(
        (_, idx) => (
          <MobileSkeletonItem key={idx} variant={variant} />
        ),
      )}
    </section>
  );
}

function MobileSkeletonItem({ variant }: Pick<MobileSkeletonProps, 'variant'>) {
  const SkeletonBody = variant === 'list' ? ListBody : GridBody;

  return (
    <CardWrapper padding={variant === 'list'}>
      <SkeletonBody />
    </CardWrapper>
  );
}

function GridBody() {
  return (
    <div className='w-full h-full flex flex-col gap-2 overflow-hidden p-3'>
      <div className='w-full h-[20px] flex justify-end'>
        <Skeleton className='w-1/3' />
      </div>
      <Skeleton className='flex-1 aspect-square' />
    </div>
  );
}

function ListBody() {
  return (
    <div className='w-full flex flex-col gap-2 p-2'>
      <Skeleton className='w-full h-[18px] rounded-[12px]' />
      <Skeleton className='w-1/2 h-[14px] rounded-[12px]' />
      <Skeleton className='w-1/5 h-[12px] rounded-[12px]' />
    </div>
  );
}
