import SubHeader from '@/components/layout/SubHeader';
import OnBoardingIntro from '@/features/users/components/OnBoardingIntro';

export default function IntroPage() {
  return (
    <div className='w-full h-full'>
      <SubHeader type='back' title='' />

      <OnBoardingIntro />
    </div>
  );
}
