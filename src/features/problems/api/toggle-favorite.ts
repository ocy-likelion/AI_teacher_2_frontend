import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { httpClient } from '@/lib/api-client';
import { handleApiError } from '@/utils/handle-api-error';
import { problemDetailKey, problemListKey } from '@/utils/query-key';
import {
  type GetProblemListResponse,
  type Problem,
} from '@/types/problem.type';
import { toast } from 'sonner';

// API 호출 함수
const toggleFavorite = async (id: number) => {
  const res = await httpClient.post(`/favorite?problemId=${id}`);
  return res.data;
};

// cache 핸들링 함수 모음
const cancelProblemListQueries = async () => {
  await queryClient.cancelQueries({
    queryKey: problemListKey({ favorite: true }),
  });
  await queryClient.cancelQueries({
    queryKey: problemListKey({ favorite: false }),
  });
};

const getProblemListData = () => {
  const favoriteData = queryClient.getQueryData<{
    pages: GetProblemListResponse[];
    pageParams: any[];
  }>(problemListKey({ favorite: true }));

  const nonFavoriteData = queryClient.getQueryData<{
    pages: GetProblemListResponse[];
    pageParams: any[];
  }>(problemListKey({ favorite: false }));

  return { favoriteData, nonFavoriteData };
};

const updateProblemListCache = (
  id: number,
  newFavoriteValue: boolean,
  target: GetProblemListResponse['data'][number],
) => {
  const favoriteKey = problemListKey({ favorite: true });
  const nonFavoriteKey = problemListKey({ favorite: false });

  queryClient.setQueryData(nonFavoriteKey, (old: any) => {
    if (!old) return old;
    return {
      ...old,
      pages: old.pages.map((page: GetProblemListResponse) => ({
        ...page,
        data: page.data.map((problem) =>
          problem.id === id
            ? { ...problem, favorite: newFavoriteValue }
            : problem,
        ),
      })),
    };
  });

  queryClient.setQueryData(favoriteKey, (old: any) => {
    if (!old) return old;
    return {
      ...old,
      pages: old.pages.map((page: GetProblemListResponse, idx: number) => {
        if (newFavoriteValue && idx === 0) {
          return {
            ...page,
            data: [{ ...target, favorite: true }, ...page.data],
          };
        } else {
          return {
            ...page,
            data: page.data.filter((problem) => problem.id !== id),
          };
        }
      }),
    };
  });
};

const updateProblemDetailCache = (id: number, newFavoriteValue: boolean) => {
  queryClient.setQueryData(problemDetailKey(String(id)), (old: any) => {
    if (!old) return old;
    return { ...old, favorite: newFavoriteValue };
  });
};

const restoreProblemListCache = (
  favoriteData?: unknown,
  nonFavoriteData?: unknown,
) => {
  queryClient.setQueryData(problemListKey({ favorite: true }), favoriteData);
  queryClient.setQueryData(
    problemListKey({ favorite: false }),
    nonFavoriteData,
  );
};

const invalidateProblemList = () => {
  queryClient.invalidateQueries({
    queryKey: problemListKey({ favorite: true }),
  });
  queryClient.invalidateQueries({
    queryKey: problemListKey({ favorite: false }),
  });
};

const invalidateProblemDetail = (id: string) => {
  queryClient.invalidateQueries({
    queryKey: problemDetailKey(id),
  });
};

// toggle 훅
export const useToggleFavorite = () => {
  const mutation = useMutation({
    mutationFn: toggleFavorite,

    onMutate: async (id: number) => {
      await cancelProblemListQueries();

      const { favoriteData, nonFavoriteData } = getProblemListData();
      const target = (nonFavoriteData?.pages ?? [])
        .flatMap((p) => p.data)
        .find((p) => p.id === id);
      const fallbackTarget = queryClient.getQueryData<Problem>(
        problemDetailKey(String(id)),
      );

      const resolvedTarget = target ?? fallbackTarget;
      if (!resolvedTarget) return { favoriteData, nonFavoriteData };

      const newFavoriteValue = !resolvedTarget.favorite;

      updateProblemListCache(id, newFavoriteValue, resolvedTarget);
      updateProblemDetailCache(id, newFavoriteValue);

      return {
        favoriteData,
        nonFavoriteData,
        newFavoriteValue,
      };
    },

    onError: (error, _id, context) => {
      restoreProblemListCache(context?.favoriteData, context?.nonFavoriteData);
      handleApiError(error);
    },

    onSuccess: (_data, id, context) => {
      invalidateProblemList();
      invalidateProblemDetail(String(id));

      if (context?.newFavoriteValue) {
        toast.success('즐겨찾기에 추가했어요.');
      } else {
        toast.success('즐겨찾기에서 제거했어요.');
      }
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
