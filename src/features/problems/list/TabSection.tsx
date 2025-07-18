import { Badge } from '@/components/ui/badge';
import { LayoutGrid, StretchHorizontal } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export default function TabSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get('view') || 'list';
  const isFavorite = searchParams.get('favorite') === 'true';
  const q = searchParams.get('q');

  const handleFavoriteChange = (favorite: boolean) => {
    if (isFavorite === favorite && !q) return;

    const newParams = new URLSearchParams(searchParams);
    newParams.delete('q');

    if (favorite) {
      newParams.set('favorite', 'true');
    } else newParams.delete('favorite');

    setSearchParams(newParams);
  };

  const handleViewChange = (type: 'list' | 'grid') => {
    if (view === type) return;

    const newParams = new URLSearchParams(searchParams);
    newParams.set('view', type);
    setSearchParams(newParams);
  };

  return (
    <section className='w-full flex justify-between items-center py-3'>
      <div className='flex gap-3'>
        <Badge
          className={`badge cursor-pointer ${isFavorite ? 'bg-primary2 text-black' : ''} transition-transform active:scale-105 duration-300 ease-out`}
          onClick={() => handleFavoriteChange(false)}
        >
          전체
        </Badge>
        <Badge
          className={`badge cursor-pointer ${!isFavorite ? 'bg-primary2 text-black' : ''} transition-transform active:scale-105 duration-300 ease-out`}
          onClick={() => handleFavoriteChange(true)}
        >
          즐겨찾기
        </Badge>
      </div>
      <div className='flex gap-2'>
        <StretchHorizontal
          className={`cursor-pointer ${view === 'list' ? 'text-primary' : ''} transition-transform active:scale-105 duration-300 ease-out`}
          onClick={() => handleViewChange('list')}
        />
        <LayoutGrid
          className={`cursor-pointer ${view === 'grid' ? 'text-primary' : ''} transition-transform active:scale-105 duration-300 ease-out`}
          onClick={() => handleViewChange('grid')}
        />
      </div>
    </section>
  );
}
