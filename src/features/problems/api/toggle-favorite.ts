import {
  useMutation,
  type InfiniteData,
  type QueryKey,
} from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { httpClient } from '@/lib/api-client';
import { handleApiError } from '@/utils/handle-api-error';
import { problemDetailKey, problemListKey } from '@/utils/query-key';
import {
  type ToggleFavoriteResponse,
  type GetProblemListResponse,
  type Problem,
  type FavoriteToggleSource,
  type CursorPaginationParams,
} from '@/types/problem.type';
import { toast } from 'sonner';

// API 호출 함수
const toggleFavorite = async (id: number) => {
  const res = await httpClient.post<ToggleFavoriteResponse>(
    `/favorites?problemId=${id}`,
  );
  return res.data;
};

const updateListQuery = (
  key: QueryKey,
  id: number,
  updateFn: (p: Problem[]) => Problem[],
) => {
  queryClient.setQueryData(
    key,
    (prev: InfiniteData<GetProblemListResponse, CursorPaginationParams>) => {
      if (!prev?.pages?.length) return prev;
      const pages = [...prev.pages];
      const idx = pages.findIndex((page) =>
        page.data.some((problem) => problem.id === id),
      );

      if (idx < 0) return prev;

      const page = pages[idx];
      const updated = updateFn(page.data);

      pages[idx] = { ...page, data: updated };
      return { ...prev, pages };
    },
  );
};

// toggle 훅
export const useToggleFavorite = (source: FavoriteToggleSource) => {
  const mutation = useMutation({
    mutationFn: toggleFavorite,

    onMutate: async (id: number) => {
      const detailKey = problemDetailKey(id);
      const listKey = problemListKey({ favorite: false });
      const favoriteKey = problemListKey({ favorite: true });
      let prevData;

      if (source === 'detail') {
        await queryClient.cancelQueries({ queryKey: detailKey, exact: true });
        prevData = queryClient.getQueryData(detailKey);
        queryClient.setQueryData(detailKey, (prev: Problem) =>
          prev ? { ...prev, favorite: !prev.favorite } : prev,
        );
      }

      if (source === 'list') {
        await queryClient.cancelQueries({ queryKey: listKey, exact: true });
        prevData = queryClient.getQueryData(listKey);
        updateListQuery(listKey, id, (data) =>
          data.map((problem) =>
            problem.id === id
              ? { ...problem, favorite: !problem.favorite }
              : problem,
          ),
        );
      }

      if (source === 'favorite') {
        await queryClient.cancelQueries({ queryKey: favoriteKey, exact: true });
        prevData = queryClient.getQueryData(favoriteKey);
        updateListQuery(favoriteKey, id, (data) =>
          data.filter((problem) => problem.id !== id),
        );
      }

      return {
        prevData,
        detailKey,
        listKey,
        favoriteKey,
        rollbackKey:
          source === 'detail'
            ? detailKey
            : source === 'favorite'
              ? favoriteKey
              : listKey,
      };
    },

    onError: (error, _id, context) => {
      queryClient.setQueryData(context?.rollbackKey!, context?.prevData);
      handleApiError(error);
    },

    onSuccess: (data, id, context) => {
      const favorited = data.favorited;

      queryClient.invalidateQueries({
        queryKey: problemListKey({ favorite: true }),
        exact: true,
      });

      queryClient.setQueryData(context.detailKey, (prev: Problem) =>
        prev ? { ...prev, favorite: favorited } : prev,
      );

      updateListQuery(context.listKey, id, (data) =>
        data.map((problem) =>
          problem.id === id ? { ...problem, favorite: favorited } : problem,
        ),
      );

      toast.success(
        favorited ? '즐겨찾기에 추가했어요.' : '즐겨찾기에서 제거했어요.',
      );
    },
  });

  return {
    ...mutation,
    toggle: (id: number) => {
      if (!mutation.isPending) {
        mutation.mutate(id);
      }
    },
  };
};
