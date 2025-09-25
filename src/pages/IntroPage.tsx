import IntroImageSection from '@/features/users/components/IntroImageSection';
import IntroLoginFunction from '@/features/users/components/IntroLoginSection';

export default function IntroPage() {
  return (
    <section className='relative h-full w-full pr-40 pl-5 py-10 flex'>
      <IntroImageSection />
      <IntroLoginFunction />
    </section>
  );
}
