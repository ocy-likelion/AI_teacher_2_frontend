import ChildrenListSection from '@/features/users/my-page/ChildrenListSection';
import UserSection from '@/features/users/my-page/UserSection';

export default function MyPage() {
  return (
    <section className='w-full h-full flex flex-col gap-14 p-8 md:py-15 md:overflow-y-auto'>
      <UserSection />
      <ChildrenListSection />
    </section>
  );
}
