import ChildCard from './ChildCard';
import { useChildInfo } from '../api/get-child-info';
import { handleApiError } from '@/utils/handle-api-error';
import DataLoading from '@/components/DataLoading';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const concepts = [
  { id: 1, name: '분수' },
  { id: 2, name: '소수점' },
];

export default function ChildrenListSection() {
  const { data, isPending, isError, error } = useChildInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      handleApiError(error);
    }
  }, [isError, error, navigate]);

  if (isPending) {
    return <DataLoading description='아이 정보를 불러오고 있어요...' />;
  }

  if (isError) return null;

  return (
    <section className='flex flex-col items-center gap-4'>
      <div className='flex flex-col items-center gap-2'>
        <p className='title-md'>우리 아이 정보</p>
        <p className='label md:body-sm text-gray5 dark:text-gray2 text-center'>
          최근 3개월간 자녀가 자주 질문한 개념들을 모았어요. <br />
          태그를 눌러 개념 설명을 확인해보세요.
        </p>
      </div>
      <ChildCard
        name={data.result.childName}
        grade={data.result.childGrade}
        concepts={concepts}
      />
    </section>
  );
}
