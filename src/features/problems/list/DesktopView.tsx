import type { Problem } from '@/types/problem.type';
import { useToggleFavorite } from '../api/toggle-favorite';
import DesktopItem from './DesktopItem';
import { useDeleteProblem } from '../api/delete-problem';

type DesktopViewProps = {
  items: Problem[];
};

export default function DesktopView({ items }: DesktopViewProps) {
  const { toggle } = useToggleFavorite();
  const { mutate: deleteProblem } = useDeleteProblem();

  return (
    <div className='w-full flex flex-col items-center gap-3 p-2'>
      {items.map((item) => (
        <DesktopItem
          key={item.id}
          item={item}
          onFavorite={toggle}
          onDelete={(id: number) => deleteProblem(String(id))}
        />
      ))}
    </div>
  );
}
