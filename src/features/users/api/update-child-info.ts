import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { httpClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';
import type { Child, UpdateChildRequest } from '@/types/user.type';
import { handleApiError } from '@/utils/handle-api-error';

const updateChildInfo = async (memberId: number, data: UpdateChildRequest) => {
  const res = await httpClient.put(`/member/${memberId}`, data);
  return res.data;
};

export const useUpdateChildInfo = () => {
  return useMutation({
    mutationFn: ({
      memberId,
      data,
    }: {
      memberId: number;
      data: UpdateChildRequest;
    }) => updateChildInfo(memberId, data),

    onMutate: async ({ memberId: _memberId, data }) => {
      await queryClient.cancelQueries({ queryKey: ['child'] });

      const prevData = queryClient.getQueryData<Child>(['child']);

      queryClient.setQueryData(['child'], (old: any) => {
        if (!old) return old;

        return {
          ...old,
          name: data.name,
          grade: data.grade,
        };
      });

      return { prevData };
    },

    onSuccess: () => {
      toast.success('자녀 정보가 수정되었습니다.');
    },

    onError: (error, _variables, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(['child'], context.prevData);
      }
      handleApiError(error);
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['child'],
      });
    },
  });
};
