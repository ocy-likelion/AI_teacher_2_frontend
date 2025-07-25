import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { httpClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';
import type { CreateChildRequest } from '@/types/user.type';
import { handleApiError } from '@/utils/handle-api-error';
import { useNavigate } from 'react-router-dom';

const createChildInfo = async (data: CreateChildRequest) => {
  const res = await httpClient.post(`/member`, data);
  return res.data;
};

export const useCreateChildInfo = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({ data }: { data: CreateChildRequest }) =>
      createChildInfo(data),

    onSuccess: () => {
      toast.success('자녀 정보가 생성되었습니다.');
      navigate('/');
    },

    onError: (error) => {
      handleApiError(error);
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['child'],
      });
    },
  });
};
