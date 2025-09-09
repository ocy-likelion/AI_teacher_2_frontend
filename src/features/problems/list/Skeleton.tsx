import { useMediaQuery } from '@/hooks/useMediaQuery';
import DesktopSkeleton from './DesktopSkeleton';
import MobileSkeleton from './MobileSkeleton';

type SkeletonProps = {
  mobileVariant: 'list' | 'grid';
  count?: number;
};

export default function Skeleton({ mobileVariant, count }: SkeletonProps) {
  const isMdUp = useMediaQuery('(min-width: 768px)');

  if (isMdUp) return <DesktopSkeleton count={count} />;
  else return <MobileSkeleton variant={mobileVariant} count={count} />;
}
