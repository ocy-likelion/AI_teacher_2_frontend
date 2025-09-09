import type { Problem } from '@/types/problem.type';
import { useToggleFavorite } from '../api/toggle-favorite';
import MobileItem from './MobileItem';

type MobileViewProps = {
  items: Problem[];
  variant: 'list' | 'grid';
};

export default function MobileView({ items, variant }: MobileViewProps) {
  const { toggle } = useToggleFavorite();

  return (
    <div className='w-full flex flex-col items-center gap-3 p-2'>
      {items.map((item) => (
        <MobileItem
          key={item.id}
          item={item}
          variant={variant}
          onFavoriteClick={toggle}
        />
      ))}
    </div>
  );
}
