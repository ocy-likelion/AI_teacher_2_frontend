import { Link } from 'react-router-dom';
import CardWrapper from '../components/CardWrapper';
import { Bookmark } from 'lucide-react';
import Title from '../components/Title';
import { formatListDate } from '@/utils/date';

type GridViewProps = {
  items: {
    id: number;
    name: string;
    image: string;
    categories: string[];
    favorite: boolean;
    created_at: string;
    updated_at: string;
  }[]; // 추후 type으로 정의할 예정
};

export default function GridView({ items }: GridViewProps) {
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('즐겨찾기 토글');
  };
  return (
    <div className='w-full flex justify-center flex-wrap gap-3'>
      {items.map((item) => (
        <Link
          className='relative w-full'
          to={`/problem/${item.id}`}
          key={item.id}
        >
          <CardWrapper padding={false}>
            <div className='w-full h-full flex flex-col gap-2 overflow-hidden'>
              <button className='absolute top-0 left-2 p-2 cursor-pointer transition-transform hover:scale-115 active:scale-115 duration-300 ease-out'>
                <Bookmark
                  className=' text-primary '
                  size={24}
                  fill={item.favorite ? 'currentColor' : 'none'}
                  onClick={handleToggle}
                />
              </button>
              <div className='flex justify-end'>
                <p className='label text-gray5 dark:text-gray2 pt-4 pr-4'>
                  {formatListDate(item.created_at)}
                </p>
              </div>
              <img
                src={item.image}
                alt={Image.name}
                className='border-t border-gray1 dark:border-gray4 flex-1 object-contain h-full w-full'
              />
            </div>
          </CardWrapper>
        </Link>
      ))}
    </div>
  );
}
