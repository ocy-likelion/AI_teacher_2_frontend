import ListSection from '@/features/problems/list/ListSection';
import SearchSection from '@/features/problems/list/SearchSection';
import TabSection from '@/features/problems/list/TabSection';

export default function ProblemHistoryPage() {
  return (
    <div className='w-full h-full flex flex-col items-center gap-3 px-7 py-3'>
      <div className='bg-backgound-light dark:bg-gray7 z-10 w-full flex flex-col items-center gap-3'>
        <SearchSection />
        <TabSection />
      </div>
      <ListSection />
    </div>
  );
}
