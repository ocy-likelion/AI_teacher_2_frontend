import { httpClient } from '@/lib/api-client';
import type {
  CursorPaginationParams,
  GetFavoriteListResponse,
} from '@/types/problem.type';
import { problemListKey } from '@/utils/query-key';
import { useInfiniteQuery } from '@tanstack/react-query';

const getFavoriteList = async ({ pageParam }: CursorPaginationParams) => {
  const res = await httpClient.get<GetFavoriteListResponse>(
    `/favorites/list?limit=10&memberId=8${pageParam ? `&after_cursor=${pageParam}` : ''}`,
  );

  const updatedData = res.data.data.map((item) => ({
    ...item,
    favorite: true,
    id: item.problemId,
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
