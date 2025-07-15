import Tag from '@/components/ui/tag';
import EditChildInfoForm from '@/features/users/components/EditChildInfo';
import ImageUploadSection from '@/features/users/components/ImageUploadSection';

export default function HomePage() {
  return (
    <>
      <div className='flex max-w-full min-h-[30vh] px-[25px] box-border mt-[10vh]'>
        <div className='w-full flex flex-col flex-grow'>
          <EditChildInfoForm />
          <ImageUploadSection />
        </div>
      </div>
      <div className='mx-[29px] max-w-full min-h-[55px] mt-[53px] flex flex-grow flex-col'>
        <h2 className='font-korean-title font-bold text-2xl'>
          자녀분이 어려워하는 <span className='text-primary'>주제</span>예요!
        </h2>
        <div className='flex mt-5 gap-5 flex-wrap'>
          <Tag title='원' />
          <Tag title='원의 넓이' />
        </div>
      </div>
    </>
  );
}
