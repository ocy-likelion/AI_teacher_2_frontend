type ImageSectionProps = {
  url: string;
  alt: string;
};

export default function ImageSection({ url, alt }: ImageSectionProps) {
  return (
    <section className='flex justify-center border-2 border-primary rounded-[12px] overflow-hidden'>
      <img src={url} alt={alt} className='h-[250px]' />
    </section>
  );
}
