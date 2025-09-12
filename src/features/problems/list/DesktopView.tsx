import type { Problem } from '@/types/problem.type';
import DesktopItem from './DesktopItem';
import { useSearchParams } from 'react-router-dom';

type DesktopViewProps = {
  items: Problem[];
};

export default function DesktopView({ items }: DesktopViewProps) {
  const [params] = useSearchParams();
  const favorite = params.get('favorite') === 'true';

  return (
    <div className='w-full flex flex-col items-center gap-3 p-2'>
      {items.map((item) => (
        <DesktopItem
          key={item.id}
          item={item}
          source={favorite ? 'favorite' : 'list'}
        />
      ))}
    </div>
  );
}
