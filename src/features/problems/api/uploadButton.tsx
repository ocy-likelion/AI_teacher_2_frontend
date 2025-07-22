import { Button } from '@/components/ui/button';
import { httpClient } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { toast } from 'sonner';

export default function UploadButton({
  cropper,
  setImage,
}: {
  cropper: Cropper | undefined;
  setImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const getCropData = ({
    cropper,
    setImage,
  }: {
    cropper: Cropper | undefined;
    setImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  }) => {
    if (cropper) {
      const croppedImage = cropper.getCroppedCanvas().toDataURL();
      setImage(croppedImage);
      const formData = new FormData();
      cropper.getCroppedCanvas().toBlob((blob) => {
        if (!blob) return;
        const randomName = `image_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.png`;
        const file = new File([blob], randomName, { type: 'image/png' });
        if (blob) formData.append('file', file);

        useImageUpload.mutate(formData);
      });
    }
  };

  const useImageUpload = useMutation({
    mutationKey: ['imageUpload'],
    mutationFn: async (formData: FormData) => {
      return await httpClient.post('/image/upload', formData);
    },
    onError: (err: AxiosError) => {
      toast.error(
        `문제가 발생했습니다. ${err.message ? err.message : '알 수 없는 오류'}`
      );
      console.error(err);
    },
    onSuccess: (res) => {
      console.log(res);
      toast.info('문제 해설 생성이 완료되었습니다.');
    },
    onMutate: () => {
      toast.info('현재 로딩중');
    },
  });

  return (
    <Button
      onClick={() => {
        getCropData({ cropper, setImage });
        // navigate('/problem/1', {
        //   replace: true,
        //   state: { from: 'upload' },
        // });
      }}
      className='w-[100px]'
      size={'lg'}
    >
      확인
    </Button>
  );
}
