import ImageUploadSection from '@/features/problems/components/ImageUploadSection';

type GuideCardProps = {
  imageUrl: string;
  description: string;
};

const guideItems = [
  {
    id: 1,
    imageUrl: '/images/Icon_Camera.svg',
    description: '문제가 잘 보이게\n촬영해주세요',
  },
  {
    id: 2,
    imageUrl: '/images/Icon_Scissors.svg',
    description: '한 문제만\n잘라주세요.',
  },
];

export default function HomePage() {
  return (
    <section className='w-full h-full py-8 px-7 flex flex-col items-center gap-4'>
      <div className='relative w-full flex flex-col gap-2'>
        <h2 className='break-keep title-sm'>
          수학 문제, 혼자 고민하지 마세요
          <br />
          <span className='text-primary'>사진</span> 한 장이면 충분해요
        </h2>
        <div className='flex'>
          <p className='flex-1 break-keep text-[14px] text-gray6 dark:text-gray2'>
            수학 문제를 AI가 쉽게 설명해드려요.
          </p>
          <img
            src='/images/characters/yellow.svg'
            alt='yellow mon'
            className='w-20 h-20 translate-y-[-20%]'
          />
        </div>
      </div>
      <ImageUploadSection />
      <section className='w-full flex items-center gap-5'>
        {guideItems.map((item) => (
          <GuideCard
            key={item.id}
            imageUrl={item.imageUrl}
            description={item.description}
          />
        ))}
      </section>
    </section>
  );
}

function GuideCard({ imageUrl, description }: GuideCardProps) {
  return (
    <div className='w-full flex flex-col items-center gap-1 px-3 py-4 rounded-[16px] shadow-[var(--shadow)] dark:shadow-[var(--shadow-dark)]'>
      <img src={imageUrl} alt='guide image' className='w-11 h-11' />
      <p className='text-[14px] text-center whitespace-pre-line'>
        {description}
      </p>
    </div>
  );
}
