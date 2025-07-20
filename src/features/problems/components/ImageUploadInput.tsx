import { useNavigate } from 'react-router-dom';

type ImageUploadProps = {
  uploadRef: React.RefObject<HTMLInputElement | null>;
  setImageFile: (file: File | undefined) => void;
};

export default function ImageUpload({
  uploadRef,
  setImageFile,
}: ImageUploadProps) {
  const navigate = useNavigate();

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
