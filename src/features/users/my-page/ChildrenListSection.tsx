import ChildCard from './ChildCard';
import { useChildInfo } from '../api/get-child-info';
import { handleApiError } from '@/utils/handle-api-error';
import axios from 'axios';
import NotFoundPage from '@/pages/NotFoundPage';
import ServerErrorPage from '@/pages/ServerErrorPage';
import Loading from '@/components/ui/Loading';

const concepts = [
  { id: 1, name: '분수' },
  { id: 2, name: '소수점' },
];

export default function ChildrenListSection() {
  const { data, isPending, isError, error } = useChildInfo(8);

  if (isError) {
    handleApiError(error);

    const status = axios.isAxiosError(error) ? error.response?.status : null;
    if (status === 404) return <NotFoundPage />;
    return <ServerErrorPage />;
  }

  if (isPending) return <Loading />;

  return (
    <section className='flex flex-col items-center gap-4'>
      <div className='flex flex-col items-center gap-2'>
        <p className='title-md'>우리 아이 정보</p>
        <p className='label text-gray5 dark:text-gray2 text-center'>
          최근 3개월간 자녀가 자주 질문한 개념들을 모았어요. <br />
          태그를 눌러 개념 설명을 확인해보세요.
        </p>
      </div>
      <ChildCard name={data.name} grade={data.grade} concepts={concepts} />
    </section>
  );
}
