import ChildUpdateModal from '@/features/users/my-page/ChildUpdateModal';
import ChildrenListSection from '@/features/users/my-page/ChildrenListSection';
import UserSection from '@/features/users/my-page/UserSection';

export default function MyPage() {
  return (
    <section className='w-full h-full flex flex-col gap-14 p-4'>
      <UserSection />
      <ChildrenListSection />
    </section>
  );
}
