import Yellow from '@/assets/images/characters/yellow.svg?react';
import OrangeTriangle from '@/assets/images/characters/orange_triangle.svg?react';

type ProfileProps = {
  imageUrl?: string;
  size?: 'small';
};

export default function Profile({ imageUrl, size }: ProfileProps) {
  const isSmall = size === 'small';

  const containerSize = isSmall ? 'w-[60px] h-[60px]' : 'w-[120px] h-[120px]';
  const imageSize = isSmall ? 'w-[40px] h-[40px]' : 'w-[80px] h-[80px]';

  return (
    <div
      className={`bg-white dark:bg-gray1 ${containerSize} flex items-center justify-center shadow-[var(--shadow)] dark:shadow-[var(--shadow-dark)] rounded-full`}
    >
      {imageUrl ? (
        <img src={imageUrl} alt='profile' className={`${imageSize}`} />
      ) : isSmall ? (
        <Yellow className={`${imageSize}`} />
      ) : (
        <OrangeTriangle className={`${imageSize}`} />
      )}
    </div>
  );
}
