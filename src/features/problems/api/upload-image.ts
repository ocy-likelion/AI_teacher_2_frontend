import { httpClient } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { toast } from 'sonner';
import { type NavigateFunction } from 'react-router-dom';
import axios from 'axios';
import { handleApiError } from '@/utils/handle-api-error';
import { queryClient } from '@/lib/react-query';
import { problemListKey } from '@/utils/query-key';

type UseUploadImageProps = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  controllerRef: React.RefObject<AbortController | null>;
  navigate: NavigateFunction;
};

export const useUploadImage = ({
  setIsLoading,
  controllerRef,
  navigate,
}: UseUploadImageProps) => {
  const handleUploadStart = (controller: AbortController) => {
    controllerRef.current = controller;
    setIsLoading(true);
  };

  const handleUploadEnd = () => {
    controllerRef.current = null;
    setIsLoading(false);
  };

  return useMutation({
    mutationKey: ['imageUpload'],
    mutationFn: async (formData: FormData) => {
      const controller = new AbortController();
      handleUploadStart(controller);
      const res = await httpClient.post('/image/upload', formData, {
        signal: controller.signal,
      });
      return res;
    },
    onError: (err: AxiosError) => {
      if (axios.isCancel(err)) {
        controllerRef.current = null;
        toast.error('요청을 취소하셨습니다.');
      } else {
        handleUploadEnd();
        handleApiError(err);
      }
    },
    onSuccess: (res: { data: { id: number } }) => {
      console.log(res);
      handleUploadEnd();
      const id = res.data.id;
      toast.info('문제 해설 생성이 완료되었습니다.');
      navigate(`${id ? `/problem/${id}` : '/history'}`, {
        replace: true,
      });
    },
    onMutate: () => {
      queryClient.invalidateQueries({
        queryKey: problemListKey({ favorite: false }),
      });
      queryClient.invalidateQueries({
        queryKey: problemListKey({ favorite: true }),
      });
    },
  });
};
