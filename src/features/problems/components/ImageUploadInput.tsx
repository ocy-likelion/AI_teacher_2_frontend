import type { NavigateFunction } from 'react-router-dom';

type ImageUploadProps = {
  uploadRef: React.RefObject<HTMLInputElement | null>;
  navigate: NavigateFunction;
};

export default function ImageUpload({ uploadRef, navigate }: ImageUploadProps) {
  const ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // if (target === 'refresh') navigate(0);
      // else navigate(target);
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
