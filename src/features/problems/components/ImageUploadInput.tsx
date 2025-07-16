import { useNavigate } from 'react-router-dom';

type ImageUploadProps = {
  uploadRef: React.RefObject<HTMLInputElement | null>;
  onClose: () => void;
};

export default function ImageUpload({ uploadRef, onClose }: ImageUploadProps) {
  const navigate = useNavigate();
  const ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // if (target === 'refresh') navigate(0);
      // else navigate(target);
      navigate('/problem/upload');
      onClose();
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
