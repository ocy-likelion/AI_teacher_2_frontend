import { httpClient } from '@/lib/api-client';
import type {
  CursorPaginationParams,
  GetFavoriteListResponse,
} from '@/types/problem.type';
import { problemListKey } from '@/utils/query-key';
import { useInfiniteQuery } from '@tanstack/react-query';

import useUserStore from '@/stores/userStore';

const getFavoriteList = async ({ pageParam }: CursorPaginationParams) => {
  const memberId = useUserStore.getState().user?.memberId;
  if (!memberId) throw new Error('로그인 정보가 없습니다.');
  const res = await httpClient.get<GetFavoriteListResponse>(
    `/favorites/list?limit=10${pageParam ? `&after_cursor=${pageParam}` : ''}`,
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
