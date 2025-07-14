import type { NavigateFunction } from 'react-router-dom';

export default function ImageCapture(
  cameraRef: React.RefObject<HTMLInputElement | null>,
  navigate: NavigateFunction
) {
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
