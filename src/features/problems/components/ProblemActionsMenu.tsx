import ItemActions from '@/components/ItemActions';
import { Bookmark, Trash2 } from 'lucide-react';
import { useProblemActions } from '../hooks/useProblemActions';
import type { FavoriteToggleSource } from '@/types/problem.type';

type ProblemActionsMenuProps = {
  id: number;
  favorite: boolean;
  source: FavoriteToggleSource;
  onDelete?: () => void;
};

export default function ProblemActionsMenu({
  id,
  favorite,
  source,
  onDelete,
}: ProblemActionsMenuProps) {
  const { isDeleting, handleDeleteClick, handleFavoriteClick } =
    useProblemActions(id, source);

  const menu = [
    {
      key: 'delete',
      label: '삭제하기',
      icon: <Trash2 className='text-primary' />,
      onSelect: () => handleDeleteClick(onDelete),
    },
    {
      key: 'favorite',
      label: `${favorite ? '해제하기' : '저장하기'}`,
      icon: (
        <Bookmark
          className='text-primary'
          fill={favorite ? 'currentColor' : 'none'}
        />
      ),
      onSelect: handleFavoriteClick,
    },
  ];

  return <ItemActions items={menu} disabled={isDeleting} />;
}
