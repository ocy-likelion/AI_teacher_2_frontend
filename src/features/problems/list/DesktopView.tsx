import type { Problem } from '@/types/problem.type';
import DesktopItem from './DesktopItem';

type DesktopViewProps = {
  items: Problem[];
};

export default function DesktopView({ items }: DesktopViewProps) {
  return (
    <div className='w-full flex flex-col items-center gap-3 p-2'>
      {items.map((item) => (
        <DesktopItem key={item.id} item={item} />
      ))}
    </div>
  );
}
