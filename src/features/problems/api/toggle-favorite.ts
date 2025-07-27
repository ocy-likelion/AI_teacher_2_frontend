import { httpClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';
import { handleApiError } from '@/utils/handle-api-error';
import { problemListKey } from '@/utils/query-key';
import { useMutation } from '@tanstack/react-query';

const toggleFavorite = async (id: string) => {
  const res = await httpClient.post(`/favorite?problemId=${id}`);
  return res.data;
};

export const useToggleFAvorite = () => {
  return useMutation({
    mutationFn: toggleFavorite,

    onError: (error) => {
      handleApiError(error);
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: problemListKey({ favorite: true }),
      });
      queryClient.invalidateQueries({
        queryKey: problemListKey({ favorite: false }),
      });
    },
  });
};
