import ListSection from '@/features/problems/list/ListSection';
import TabSection from '@/features/problems/list/TabSection';

export default function ProblemHistoryPage() {
  return (
    <div className='w-full h-full flex flex-col items-center gap-3 px-7 py-3'>
      <div className='sticky top-[65px] md:top-0 bg-background-light dark:bg-gray7 z-10 w-full flex flex-col items-center gap-3 shadow-[var(--shadow-search)] dark:shadow-[var(--shadow-search-dark)]'>
        <TabSection />
      </div>
      <ListSection />
    </div>
  );
}
