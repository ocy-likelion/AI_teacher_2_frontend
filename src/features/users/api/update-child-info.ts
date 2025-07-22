import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { httpClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';
import type { UpdateChildRequest } from '@/types/user.type';
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

    onSuccess: () => {
      toast.success('자녀 정보가 수정되었습니다.');
      queryClient.invalidateQueries({
        queryKey: ['child'],
      });
    },
    onError: (error) => {
      handleApiError(error);
    },
  });
};
