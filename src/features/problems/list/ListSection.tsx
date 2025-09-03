import { useSearchParams } from 'react-router-dom';
import Empty from './Empty';
import GridView from './GridView';
import ListView from './ListView';
import { useProblemList } from '../api/get-problem-list';
import { useRef } from 'react';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import ListLoading from '@/components/ListLoading';
import { useFavoriteList } from '../api/get-favorite-list';

export default function ListSection() {
  const [params] = useSearchParams();

  const favorite = params.get('favorite') === 'true';
  const view = (params.get('view') as 'list' | 'grid') ?? 'list';

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } =
    favorite ? useFavoriteList() : useProblemList();

  const problems = data?.pages.flatMap((page) => page.data) ?? [];
  const targetRef = useRef<HTMLDivElement | null>(null);

  useInfiniteScroll({
    targetRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage && !isFetchingNextPage,
  });

  if (isPending)
    return (
      <section className='w-full h-full flex flex-col justify-center items-center'>
        <ListLoading description='해설 기록을 가져오는 중이에요...' />
      </section>
    );
  if (problems.length === 0) {
    return <Empty description='아직 등록된 문제가 없어요.' />;
  }

  const ViewComponent = view === 'list' ? ListView : GridView;
  return (
    <section className='w-full'>
      <ViewComponent items={problems} />
      {isFetchingNextPage && <ListLoading />}
      <div ref={targetRef} className='h-[1px]' />
    </section>
  );
}
