import type { Problem } from '@/types/problem.type';
import { useToggleFavorite } from '../api/toggle-favorite';
import MobileItem from './MobileItem';
import { useSearchParams } from 'react-router-dom';

type MobileViewProps = {
  items: Problem[];
  variant: 'list' | 'grid';
};

export default function MobileView({ items, variant }: MobileViewProps) {
  const [params] = useSearchParams();
  const favorite = params.get('favorite') === 'true';
  const { toggle } = useToggleFavorite(favorite ? 'favorite' : 'list');

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
