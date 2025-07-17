import { Badge } from '@/components/ui/badge';
import ImageUploadSection from '@/features/problems/components/ImageUploadSection';
import EditChildInfoForm from '@/features/users/components/EditChildInfo';
import { useModalStore } from '@/stores/modalStore';

const conceptData = [
  {
    id: 1,
    name: '원',
    description: 'description',
  },
  {
    id: 2,
    name: '원의 넓이',
    description: 'description',
  },
];

export default function HomePage() {
  const { openModal } = useModalStore();
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
          {conceptData.map((concept) => (
            <Badge
              key={concept.id}
              className='text-lg cursor-pointer'
              onClick={() =>
                openModal('CONCEPT', {
                  title: concept.name,
                  description: concept.description,
                })
              }
            >
              {concept.name}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
}
