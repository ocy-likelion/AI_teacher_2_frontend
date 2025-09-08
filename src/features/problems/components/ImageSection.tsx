type ImageSectionProps = {
  url: string;
  alt: string;
  maxWidth?: number;
  width?: number;
  border?: boolean;
};

export default function ImageSection({
  url,
  alt,
  maxWidth,
  width,
  border,
}: ImageSectionProps) {
  return (
    <div
      className={`flex justify-center overflow-hidden rounded-[12px] shrink-0 ${border ? 'border border-gray1 dark:border-gray7 dark:bg-black' : ''}`}
    >
      <img
        src={url}
        alt={alt}
        style={{
          width: width ? `${width}px` : '100%',
          maxWidth: maxWidth ? `${maxWidth}px` : undefined,
        }}
        className='aspect-square object-contain h-full'
      />
    </div>
  );
}
