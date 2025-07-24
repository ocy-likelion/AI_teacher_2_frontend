import { httpClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';
import { handleApiError } from '@/utils/handle-api-error';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import type { GetProblemListResponse } from '@/types/problem.type';

const deleteProblem = async (id: string) => {
  const res = await httpClient.delete(`/problem?problemId=${id}`);
  return res.data;
};

export const useDeleteProblem = () => {
  return useMutation({
    mutationFn: deleteProblem,

    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ['problemList'] });

      const prevData = queryClient.getQueryData<{
        pages: GetProblemListResponse[];
        pageParams: any[];
      }>(['problemList']);

      queryClient.setQueryData(['problemList'], (old: any) => {
        if (!old) return old;

        return {
          ...old,
          pages: old.pages.map((page: GetProblemListResponse) => ({
            ...page,
            data: page.data.filter((problem) => problem.id !== Number(id)),
          })),
        };
      });

      return { prevData };
    },

    onError: (error, _id, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(['problemList'], context.prevData);
      }
      handleApiError(error);
    },

    onSuccess: (data) => {
      toast.success(data.message || '삭제되었습니다.');
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['problemList'] });
    },
  });
};
