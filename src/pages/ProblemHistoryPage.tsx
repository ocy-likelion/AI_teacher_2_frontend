import ListSection from '@/features/problems/list/ListSection';
import SearchSection from '@/features/problems/list/SearchSection';
import TabSection from '@/features/problems/list/TabSection';

export default function ProblemHistoryPage() {
  return (
    <div className='w-full h-full flex flex-col items-center gap-3 px-7 py-3'>
      <div className='sticky top-[65px] bg-background-light dark:bg-gray7 z-10 w-full flex flex-col items-center gap-3 shadow-[var(--shadow-search)] dark:shadow-[var(--shadow-search-dark)]'>
        <SearchSection />
        <TabSection />
      </div>
      <ListSection />
    </div>
  );
}
