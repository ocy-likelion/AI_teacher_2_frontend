import IntroImageSection from '@/features/users/components/IntroImageSection';
import IntroLoginFunction from '@/features/users/components/IntroLoginSection';

export default function IntroPage() {
  return (
    <section className='relative h-full w-full px-5 py-10 '>
      <IntroImageSection />
      <IntroLoginFunction />
    </section>
  );
}
