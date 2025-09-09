import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical } from 'lucide-react';

export type ItemAction = {
  key: string;
  label: string;
  onSelect?: () => void;
  icon?: React.ReactNode;
};

type ItemActionsProps = {
  items: ItemAction[];
  disabled?: boolean;
};

export default function ItemActions({
  items,
  disabled = false,
}: ItemActionsProps) {
  const [open, setOpen] = useState(false);

  const handleItemSelect = (item: ItemAction) => {
    setOpen(false);
    if (item.onSelect) item.onSelect();
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild disabled={disabled}>
        <button
          className='cursor-pointer rounded-sm hover:bg-gray1 dark:hover:bg-gray5'
          aria-label='드롭다운 메뉴'
          disabled={disabled}
        >
          <EllipsisVertical className='text-gray5 dark:text-gray2' />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        {items.map((item) => (
          <DropdownMenuItem
            key={item.key}
            onSelect={() => handleItemSelect(item)}
            onClick={(e) => {
              e.stopPropagation();
            }}
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
