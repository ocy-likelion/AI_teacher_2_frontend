import { useSearchParams } from 'react-router-dom';
import Empty from './Empty';
import { useProblemList } from '../api/get-problem-list';
import { useRef } from 'react';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { useFavoriteList } from '../api/get-favorite-list';
import ProblemView from './ProblemView';
import Skeleton from './Skeleton';

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
    rootMargin: '200px 0px',
  });

  if (isPending) return <Skeleton mobileVariant={view} />;
  if (problems.length === 0) {
    return (
      <Empty
        description={
          favorite ? '저장한 문제가 없어요.' : '아직 등록된 문제가 없어요.'
        }
      />
    );
  }

  return (
    <section className='w-full h-full md:overflow-y-auto'>
      <ProblemView items={problems} mobileVariant={view} />
      {isFetchingNextPage && <Skeleton mobileVariant={view} count={2} />}
      <div ref={targetRef} className='h-[1px]' />
    </section>
  );
}
