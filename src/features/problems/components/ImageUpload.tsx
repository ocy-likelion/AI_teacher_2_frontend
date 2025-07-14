import type { NavigateFunction } from 'react-router-dom';

export default function ImageUpload(
  inputRef: React.RefObject<HTMLInputElement | null>,
  navigate: NavigateFunction,
  target: string = '/problem/upload'
) {
  const ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // if (target === 'refresh') navigate(0);
      // else navigate(target);
      navigate(target);
    }
  };
  return (
    <input
      type='file'
      accept='image/*'
      capture={'environment'}
      ref={inputRef}
      className='hidden'
      onChange={ChangeEventHandler}
    />
  );
}
