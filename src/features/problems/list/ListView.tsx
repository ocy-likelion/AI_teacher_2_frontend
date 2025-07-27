import { formatListDate } from '@/utils/date';
import CardWrapper from '../components/CardWrapper';
import Title from '../components/Title';
import { Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import type React from 'react';
import type { Problem } from '@/types/problem.type';
import { useToggleFavorite } from '../api/toggle-favorite';

type ListViewProps = {
  items: Problem[];
};

export default function ListView({ items }: ListViewProps) {
  const { toggle } = useToggleFavorite();

  const handleToggle = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(id);
  };
  return (
    <div className='w-full flex flex-col items-center gap-3'>
      {items.map((item) => (
        <Link className='w-full' to={`/problem/${item.id}`} key={item.id}>
          <CardWrapper>
            <div className='relative w-full flex flex-col gap-2 px-10 py-2'>
              <Bookmark
                className='absolute left-0 text-primary'
                size={30}
                fill={item.favorite ? 'currentColor' : 'none'}
                onClick={(e) => handleToggle(e, item.id)}
              />
              <Title size='md'>{item.summary}</Title>
              <p className='body-sm text-gray5 dark:text-gray2 overflow-hidden text-ellipsis whitespace-nowrap'>
                {item.concepts.map((concept) => (
                  <span key={concept.id} className='ml-1'>
                    #{concept.name}
                  </span>
                ))}
              </p>
              <p className='label text-gray5 dark:text-gray2'>
                {formatListDate(item.activatedAt)}
              </p>
            </div>
          </CardWrapper>
        </Link>
      ))}
    </div>
  );
}
