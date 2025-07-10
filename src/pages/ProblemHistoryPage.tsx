import ListSection from '@/features/problems/list/ListSection';
import SearchSection from '@/features/problems/list/SearchSection';
import TabSection from '@/features/problems/list/TabSection';
import { useSearchParams } from 'react-router-dom';

export default function ProblemHistoryPage() {
  const [params] = useSearchParams();

  const q = params.get('q') ?? '';
  const favorite = params.get('favorite') === 'true';
  const view = (params.get('view') as 'list' | 'grid') ?? 'list';

  return (
    <div className='w-full h-full flex flex-col items-center gap-3 px-7 py-3'>
      <SearchSection />
      <TabSection />
      <ListSection q={q} favorite={favorite} view={view} />
    </div>
  );
}
