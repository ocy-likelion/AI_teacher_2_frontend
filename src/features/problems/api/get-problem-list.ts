import { httpClient } from '@/lib/api-client';
import {
  type CursorPaginationParams,
  type GetProblemListResponse,
} from '@/types/problem.type';
import { useInfiniteQuery } from '@tanstack/react-query';

const getProblemList = async ({ pageParam }: CursorPaginationParams) => {
  const res = await httpClient.get<GetProblemListResponse>(
    `/problem/list?limit=10&memberId=1${pageParam ? `&after_cursor=${pageParam}` : ''}`
  );
  return res.data;
};

export const useProblemList = () => {
  return useInfiniteQuery({
    queryKey: ['problemList'],
    queryFn: getProblemList,
    initialPageParam: '',
    getNextPageParam: (lastPage) =>
      lastPage.pagination.hasNextPage
        ? lastPage.pagination.nextCursor
        : undefined,
  });
};
