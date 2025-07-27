import { httpClient } from '@/lib/api-client';
import type {
  CursorPaginationParams,
  GetProblemListResponse,
} from '@/types/problem.type';
import { problemListKey } from '@/utils/query-key';
import { useInfiniteQuery } from '@tanstack/react-query';

const getFavoriteList = async ({ pageParam }: CursorPaginationParams) => {
  const res = await httpClient.get<GetProblemListResponse>(
    `/favorite/list?limit=10&memberId=8${pageParam ? `&after_cursor=${pageParam}` : ''}`,
  );

  const updatedData = res.data.data.map((item) => ({
    ...item,
    favorite: true,
  }));

  return {
    ...res.data,
    data: updatedData,
  };
};

export const useFavoriteList = () => {
  return useInfiniteQuery({
    queryKey: problemListKey({ favorite: true }),
    queryFn: getFavoriteList,
    initialPageParam: '',
    getNextPageParam: (lastPage) =>
      lastPage.pagination.hasNextPage
        ? lastPage.pagination.nextCursor
        : undefined,
  });
};
