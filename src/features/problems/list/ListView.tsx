import { formatListDate } from '@/utils/date';
import CardWrapper from '../components/CardWrapper';
import Title from '../components/Title';
import { Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import type React from 'react';

type ListViewProps = {
  items: {
    id: number;
    name: string;
    image: string;
    categories: string[];
    favorite: boolean;
    created_at: string;
    updated_at: string;
  }[];
};

export default function ListView({ items }: ListViewProps) {
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('즐겨찾기 토글');
  };
  return (
    <div className='w-full flex flex-col items-center gap-3'>
      {items.map((item) => (
        <Link className='w-full' to={`/problem/${item.id}`} key={item.id}>
          <CardWrapper>
            <div className='relative w-full flex flex-col gap-2 px-10 py-5'>
              <Bookmark
                className='absolute left-0 text-primary'
                size={30}
                fill={item.favorite ? 'currentColor' : 'none'}
                onClick={handleToggle}
              />
              <Title size='md'>{item.name}</Title>
              <p className='body-sm text-gray5 dark:text-gray2 overflow-hidden text-ellipsis whitespace-nowrap'>
                {item.categories.map((category) => (
                  <span key={category} className='ml-1'>
                    #{category}
                  </span>
                ))}
              </p>
              <p className='label text-gray5 dark:text-gray2'>
                {formatListDate(item.created_at)}
              </p>
            </div>
          </CardWrapper>
        </Link>
      ))}
    </div>
  );
}
