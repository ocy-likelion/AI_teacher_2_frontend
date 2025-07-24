import type { UseMutateFunction } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export default function getCroppedData(
  cropper: Cropper | undefined,
  setImage: React.Dispatch<React.SetStateAction<string | undefined>>,
  mutate: UseMutateFunction<
    {
      data: {
        id: number;
      };
    },
    AxiosError<unknown, any>,
    FormData,
    void
  >,
) {
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
}
