type ImageSectionProps = {
  url: string;
  alt: string;
};

export default function ImageSection({ url, alt }: ImageSectionProps) {
  return (
    <section className='flex justify-center overflow-hidden'>
      <img
        src={url}
        alt={alt}
        className='aspect-square object-contain h-full w-full max-w-[500px]'
      />
    </section>
  );
}
