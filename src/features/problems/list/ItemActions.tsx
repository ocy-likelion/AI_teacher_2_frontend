import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical } from 'lucide-react';

type ItemAction = {
  key: string;
  label: string;
  onSelect?: () => void;
  icon?: React.ReactNode;
};

type ItemActionsProps = {
  items: ItemAction[];
  className: string;
};

export default function ItemActions({ items, className }: ItemActionsProps) {
  const handleItemClick = (e: React.MouseEvent, item: ItemAction) => {
    e.stopPropagation();
    if (item.onSelect) item.onSelect();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={className} aria-label='행 동작 메뉴'>
          <EllipsisVertical className='text-gray5 dark:text-gray2' />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        {items.map((item) => (
          <DropdownMenuItem
            onClick={(e) => handleItemClick(e, item)}
            className='flex gap-2'
          >
            {item.icon && <span>{item.icon}</span>}
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
