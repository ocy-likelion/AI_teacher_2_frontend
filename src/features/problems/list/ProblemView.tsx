import { useMediaQuery } from '@/hooks/useMediaQuery';
import type { Problem } from '@/types/problem.type';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

type ProblemViewProps = {
  items: Problem[];
  mobileVariant: 'list' | 'grid';
};

export default function ProblemView({
  items,
  mobileVariant,
}: ProblemViewProps) {
  const isMdUp = useMediaQuery('(min-width: 768px)');

  if (isMdUp) return <DesktopView items={items} />;
  return <MobileView items={items} variant={mobileVariant} />;
}
