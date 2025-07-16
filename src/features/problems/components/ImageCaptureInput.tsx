import { useNavigate } from 'react-router-dom';

type ImageCaptureProps = {
  cameraRef: React.RefObject<HTMLInputElement | null>;

  onClose: () => void;
};

export default function ImageCapture({
  cameraRef,

  onClose,
}: ImageCaptureProps) {
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
      key='capture'
      type='file'
      accept='image/*'
      ref={cameraRef}
      capture={'environment'}
      className='hidden'
      onChange={ChangeEventHandler}
    />
  );
}
