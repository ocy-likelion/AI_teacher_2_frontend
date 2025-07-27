import ChildCard from './ChildCard';
import { useChildInfo } from '../api/get-child-info';
import { handleApiError } from '@/utils/handle-api-error';
import axios from 'axios';
import ListLoading from '@/components/ui/ListLoading';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const concepts = [
  { id: 1, name: '분수' },
  { id: 2, name: '소수점' },
];

export default function ChildrenListSection() {
  const { data, isPending, isError, error } = useChildInfo(8);
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      handleApiError(error);
      const status = axios.isAxiosError(error) ? error.response?.status : null;

      if (status === 403 || status === 404)
        navigate('/not-found', {
          state: { from: 'api-error' },
        });
      else
        navigate('/error', {
          state: { from: 'api-error' },
        });
    }
  }, [isError, error, navigate]);

  if (isPending) {
    return <ListLoading description='아이 정보를 불러오고 있어요...' />;
  }
  if (isError) return null;

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
