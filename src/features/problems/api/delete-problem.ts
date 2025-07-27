import { httpClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';
import { handleApiError } from '@/utils/handle-api-error';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import type { GetProblemListResponse } from '@/types/problem.type';
import { problemListKey } from '@/utils/query-key';

const deleteProblem = async (id: string) => {
  const res = await httpClient.delete(`/problem?problemId=${id}`);
  return res.data;
};

export const useDeleteProblem = () => {
  const keys = [
    problemListKey({ favorite: false }),
    problemListKey({ favorite: true }),
  ];

  return useMutation({
    mutationFn: deleteProblem,

    onMutate: async (id: string) => {
      await Promise.all(
        keys.map((key) => queryClient.cancelQueries({ queryKey: key })),
      );

      const prevData = keys.map((key) => ({
        key,
        data: queryClient.getQueryData<{
          pages: GetProblemListResponse[];
          pageParams: any[];
        }>(key),
      }));

      keys.forEach((key) => {
        queryClient.setQueryData(key, (old: any) => {
          if (!old) return old;
          return {
            ...old,
            pages: old.pages.map((page: GetProblemListResponse) => ({
              ...page,
              data: page.data.filter((problem) => problem.id !== Number(id)),
            })),
          };
        });
      });

      return { prevData };
    },

    onError: (error, _id, context) => {
      context?.prevData?.forEach(({ key, data }) => {
        queryClient.setQueryData(key, data);
      });
      handleApiError(error);
    },

    onSuccess: (data) => {
      toast.success(data.message || '삭제되었습니다.');
    },

    onSettled: () => {
      keys.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: key });
      });
    },
  });
};
