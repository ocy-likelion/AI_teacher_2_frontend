import { httpClient } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { toast } from 'sonner';
import { type NavigateFunction } from 'react-router-dom';
import axios from 'axios';
import { handleApiError } from '@/utils/handle-api-error';
import { queryClient } from '@/lib/react-query';

type UseUploadImageProps = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  controllerRef: React.RefObject<AbortController | null>;
  isLoadingRef: React.RefObject<boolean>;
  navigate: NavigateFunction;
};

export const useUploadImage = ({
  setIsLoading,
  controllerRef,
  isLoadingRef,
  navigate,
}: UseUploadImageProps) => {
  const handleUploadStart = (controller: AbortController) => {
    controllerRef.current = controller;
    isLoadingRef.current = true;
    setIsLoading(true);
  };

  const handleUploadEnd = () => {
    controllerRef.current = null;
    isLoadingRef.current = false;
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
      handleUploadEnd();
      if (axios.isCancel(err)) {
        toast.error('요청을 취소하셨습니다.');
      } else {
        handleApiError(err);
      }
    },
    onSuccess: (res: { data: { id: number } }) => {
      console.log(res);
      handleUploadEnd();
      const id = res.data.id;
      toast.info('문제 해설 생성이 완료되었습니다.');
      navigate(`/problem/${id ? id : '179'}`, {
        replace: true,
      });
    },
    onMutate: () => {
      toast.info('현재 로딩중');
      queryClient.invalidateQueries({ queryKey: ['problemList'] });
      queryClient.invalidateQueries({ queryKey: ['problemDetail'] });
    },
  });

  // const getCroppedData = (
  //   cropper: Cropper | undefined,
  //   setImage: React.Dispatch<React.SetStateAction<string | undefined>>,
  // ) => {
  //   if (cropper) {
  //     const croppedImage = cropper.getCroppedCanvas().toDataURL();
  //     setImage(croppedImage);
  //     const formData = new FormData();
  //     cropper.getCroppedCanvas().toBlob((blob) => {
  //       if (!blob) return;
  //       const randomName = `image_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.png`;
  //       const file = new File([blob], randomName, { type: 'image/png' });
  //       if (blob) formData.append('file', file);

  //       mutate(formData);
  //     });
  //   }
  // };

  // return { getCroppedData };
};
