import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';
import type { Problem } from '@/types/problem.type';
import CardWrapper from '../components/CardWrapper';
import Title from '../components/Title';
import { formatListDate } from '@/utils/date';

type MobileItemProps = {
  item: Problem;
  variant: 'list' | 'grid';
  onFavoriteClick: (id: number) => void;
};

type BodyProps = {
  item: Problem;
  onFavorite: (e: React.MouseEvent) => void;
};

export default function MobileItem({
  item,
  variant,
  onFavoriteClick,
}: MobileItemProps) {
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onFavoriteClick(item.id);
  };

  const Body = variant === 'list' ? ListBody : GridBody;

  return (
    <Link className='w-full' to={`/problem/${item.id}`} key={item.id}>
      <CardWrapper padding={variant === 'list'}>
        <Body item={item} onFavorite={handleToggle} />
      </CardWrapper>
    </Link>
  );
}

function ListBody({ item, onFavorite }: BodyProps) {
  return (
    <div className='relative w-full flex flex-col gap-2 px-12 py-2'>
      <FavoriteButton
        favorite={item.favorite}
        onClick={onFavorite}
        size={30}
        className='absolute top-0 left-0 z-10'
      />
      <Title size='md' isMarkdown={true}>
        {item.summary}
      </Title>
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
  );
}

function GridBody({ item, onFavorite }: BodyProps) {
  return (
    <div className='relative w-full h-full flex flex-col gap-2 overflow-hidden'>
      <FavoriteButton
        favorite={item.favorite}
        onClick={onFavorite}
        size={24}
        className='absolute top-0 left-2 z-10'
      />
      <div className='flex justify-end'>
        <p className='label text-gray5 dark:text-gray2 pt-4 pr-4'>
          {formatListDate(item.activatedAt)}
        </p>
      </div>
      <img
        src={item.imageUrl}
        alt={Image.name}
        className='border-t border-gray1 dark:border-gray4 flex-1 aspect-square object-contain h-full w-full'
      />
    </div>
  );
}

function FavoriteButton({
  favorite: favorite,
  onClick,
  size,
  className,
}: {
  favorite: boolean;
  onClick: (e: React.MouseEvent) => void;
  size: number;
  className?: string;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`cursor-pointer p-2 rounded-md transition-transform hover:scale-105 active:scale-105 ${className ?? ''}`}
    >
      <Bookmark
        className='text-primary'
        size={size}
        fill={favorite ? 'currentColor' : 'none'}
      />
    </button>
  );
}
