import { httpClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';
import { handleApiError } from '@/utils/handle-api-error';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

const deleteProblem = async (id: string) => {
  const res = await httpClient.delete(`/problem?problemId=${id}`);
  return res.data;
};

export const useDeleteProblem = () => {
  return useMutation({
    mutationFn: deleteProblem,
    onSuccess: (data) => {
      toast.success(data.message || '삭제되었습니다.');

      queryClient.invalidateQueries({
        queryKey: ['problemList'],
      });
    },
    onError: (error) => {
      handleApiError(error);
    },
  });
};
