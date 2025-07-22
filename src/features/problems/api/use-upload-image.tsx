import { httpClient } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type UseUploadImageProps = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  controllerRef: React.RefObject<AbortController | null>;
  isLoadingRef: React.RefObject<boolean>;
};

export const useUploadImage = ({
  setIsLoading,
  controllerRef,
  isLoadingRef,
}: UseUploadImageProps) => {
  const navigate = useNavigate();

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

  const { mutate } = useMutation({
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
        toast.error(
          `문제가 발생했습니다. ${(err as AxiosError).message || '알 수 없는 오류'}`,
        );
      }
      console.error(err);
    },
    onSuccess: (res: any) => {
      console.log(res);
      handleUploadEnd();
      const data = res.data;
      toast.info('문제 해설 생성이 완료되었습니다.');
      navigate('/history', {
        replace: true,
        state: {
          problemData: data?.problemData,
          explanationData: data?.explanationData,
          from: 'loading',
        },
      });
    },
    onMutate: () => {
      toast.info('현재 로딩중');
    },
  });

  const getCroppedData = (
    cropper: Cropper | undefined,
    setImage: React.Dispatch<React.SetStateAction<string | undefined>>,
  ) => {
    if (cropper) {
      const croppedImage = cropper.getCroppedCanvas().toDataURL();
      setImage(croppedImage);
      const formData = new FormData();
      cropper.getCroppedCanvas().toBlob((blob) => {
        if (!blob) return;
        const randomName = `image_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.png`;
        const file = new File([blob], randomName, { type: 'image/png' });
        if (blob) formData.append('file', file);

        mutate(formData);
      });
    }
  };

  return { getCroppedData };
};
