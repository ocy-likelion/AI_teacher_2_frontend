import useImageStore, { type imageStore } from '@/stores/imageStore';
import { useNavigate } from 'react-router-dom';

type ImageUploadProps = {
  uploadRef: React.RefObject<HTMLInputElement | null>;
};

export default function ImageUpload({ uploadRef }: ImageUploadProps) {
  const navigate = useNavigate();
  const setImageFile = useImageStore((state: imageStore) => state.setImageFile);

  const ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      navigate('/problem/upload');
    }
  };
  return (
    <input
      key='upload'
      type='file'
      accept='image/*'
      ref={uploadRef}
      className='hidden'
      onChange={ChangeEventHandler}
    />
  );
}
