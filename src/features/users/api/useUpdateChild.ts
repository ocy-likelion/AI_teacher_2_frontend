import { httpClient } from '@/lib/api-client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SetUser } from './update-user-info';
import { GetUser } from './get-user-info';
import { toast } from 'sonner';
import type { AxiosError } from 'axios';

type UpdateChildRequest = {
  name: string;
  grade: number;
};

const updateChild = async (memberId: number, data: UpdateChildRequest) => {
  return await httpClient.put(`/member/${memberId}`, data);
};

export const useUpdateChild = () => {
  const queryClient = useQueryClient();
  const currentUser = GetUser();

  return useMutation({
    mutationFn: ({
      memberId,
      data,
    }: {
      memberId: number;
      data: UpdateChildRequest;
    }) => updateChild(memberId, data),

    onSuccess: (res) => {
      if (currentUser) {
        SetUser({
          id: currentUser.id,
          childName: res.data.name,
          childGrade: res.data.grade || null,
        });
      }

      // React Query 캐시 무효화 (필요시)
      queryClient.invalidateQueries({ queryKey: ['child'] });

      toast.success('자녀 정보가 수정되었습니다.');
    },
    onError: (err: AxiosError) => {
      if (err.response?.status === 400) {
        toast.error('입력 정보를 확인해주세요.');
      } else if (err.response?.status === 401) {
        toast.error('로그인이 필요합니다.');
      } else if (err.response?.status === 403) {
        toast.error('수정 권한이 없습니다.');
      } else if (err.response?.status === 404) {
        toast.error('사용자를 찾을 수 없습니다.');
      } else {
        toast.error('수정에 실패했습니다.');
      }
    },
  });
};

export const useUpdateCurrentChild = () => {
  const updateChildMutation = useUpdateChild();

  // TODO : 임시로 8번 고정 (카카오 로그인 적용시 변경 예정)
  const updateCurrentChild = (data: UpdateChildRequest) => {
    updateChildMutation.mutate({
      memberId: 8,
      data,
    });
  };

  return {
    updateCurrentChild,
    isLoading: updateChildMutation.isPending,
    error: updateChildMutation.error,
  };
};
