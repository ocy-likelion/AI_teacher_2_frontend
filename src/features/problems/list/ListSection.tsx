import { useSearchParams } from 'react-router-dom';
import Empty from './Empty';
import GridView from './GridView';
import ListView from './ListView';
import { useProblemList } from '../api/get-problem-list';
import { useRef } from 'react';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import Loading from '@/components/ui/Loading';
import ListLoading from './ListLoading';

export default function ListSection() {
  const [params] = useSearchParams();

  // 즐겨찾기, 검색 조회 API 연동 시 사용
  //const q = params.get('q') ?? '';
  //const favorite = params.get('favorite') === 'true';
  const view = (params.get('view') as 'list' | 'grid') ?? 'list';

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } =
    useProblemList();

  const problems = data?.pages.flatMap((page) => page.data) ?? [];
  const targetRef = useRef<HTMLDivElement | null>(null);

  useInfiniteScroll({
    targetRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage && !isFetchingNextPage,
  });

  if (isPending) return <Loading />;
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
