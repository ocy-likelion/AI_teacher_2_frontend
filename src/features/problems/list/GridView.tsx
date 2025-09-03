import { Link } from 'react-router-dom';
import CardWrapper from '../components/CardWrapper';
import { Bookmark } from 'lucide-react';
import { formatListDate } from '@/utils/date';
import type { Problem } from '@/types/problem.type';
import { useToggleFavorite } from '../api/toggle-favorite';

type GridViewProps = {
  items: Problem[];
};

export default function GridView({ items }: GridViewProps) {
  const { toggle } = useToggleFavorite();

  const handleToggle = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(id);
  };

  return (
    <div className='w-full flex justify-center flex-wrap gap-3'>
      {items.map((item) => {
        return (
          <Link
            className='relative w-full'
            to={`/problem/${item.id}`}
            key={item.id}
          >
            <CardWrapper padding={false}>
              <div className='w-full h-full flex flex-col gap-2 overflow-hidden'>
                <button
                  onClick={(e) => handleToggle(e, item.id)}
                  className='absolute top-0 left-2 p-2 cursor-pointer transition-transform hover:scale-115 active:scale-115 duration-300 ease-out'
                >
                  <Bookmark
                    className=' text-primary '
                    size={24}
                    fill={item.favorite ? 'currentColor' : 'none'}
                  />
                </button>
                <div className='flex justify-end'>
                  <p className='label text-gray5 dark:text-gray2 pt-4 pr-4'>
                    {formatListDate(item.createdAt)}
                  </p>
                </div>
                <img
                  src={item.imageUrl}
                  alt={Image.name}
                  className='border-t border-gray1 dark:border-gray4 flex-1 object-contain h-full w-full'
                />
              </div>
            </CardWrapper>
          </Link>
        );
      })}
    </div>
  );
}
