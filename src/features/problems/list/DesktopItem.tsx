import type { Problem } from '@/types/problem.type';
import { Link } from 'react-router-dom';
import ImageSection from '../components/ImageSection';
import CardWrapper from '../components/CardWrapper';
import Title from '../components/Title';
import { formatListDate } from '@/utils/date';
import { Bookmark, Trash2 } from 'lucide-react';
import ItemActions from './ItemActions';

type DesktopItemProps = {
  item: Problem;
  onFavorite: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function DesktopItem({
  item,
  onFavorite,
  onDelete,
}: DesktopItemProps) {
  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleToggle = () => {
    onFavorite(item.id);
  };

  return (
    <Link to={`/problem/${item.id}`} className='hidden md:block w-full'>
      <CardWrapper>
        <div className='w-full flex justify-between items-start'>
          <div className='w-full flex items-center gap-6'>
            <ImageSection
              url={item.imageUrl}
              alt={item.ocrResult}
              width={120}
              border={true}
            />
            <div className='w-full flex flex-col gap-2'>
              <Title size='md' isMarkdown={true}>
                {item.ocrResult}
              </Title>
              <p className='body-sm md:body-md text-gray5 dark:text-gray2 overflow-hidden text-ellipsis whitespace-wrap line-clamp-1'>
                {item.concepts.map((concept) => (
                  <span key={concept.id} className='ml-1'>
                    #{concept.name}
                  </span>
                ))}
              </p>
              <p className='label md:font-medium md:body-sm text-gray5 dark:text-gray2'>
                {formatListDate(item.createdAt)}
              </p>
            </div>
          </div>
          <ItemActions
            items={[
              {
                key: 'delete',
                label: '삭제하기',
                icon: <Trash2 className='text-primary' />,
                onSelect: handleDelete,
              },
              {
                key: 'favorite',
                label: `${item.favorite ? '해제하기' : '저장하기'}`,
                icon: (
                  <Bookmark
                    className='text-primary'
                    fill={item.favorite ? 'currentColor' : 'none'}
                  />
                ),
                onSelect: handleToggle,
              },
            ]}
            className='cursor-pointer rounded-sm hover:bg-gray1 dark:hover:bg-gray5'
          />
        </div>
      </CardWrapper>
    </Link>
  );
}
