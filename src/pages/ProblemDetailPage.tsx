import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import DetailFooter from '@/features/problems/detail/DetailFooter';
import Loading from '@/components/Loading';
import { useProblemDetail } from '@/features/problems/api/get-problem-detail';
import { handleApiError } from '@/utils/handle-api-error';
import { useEffect } from 'react';
import DetailContent from '@/features/problems/detail/DetailContent';
import DetailInfo from '@/features/problems/detail/DetailInfo';

export default function ProblemDetailPage() {
  const { _id } = useParams();
  const id = Number(_id);
  const navigate = useNavigate();
  const { data, isPending, isError, error } = useProblemDetail(_id!);

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

  if (isPending) return <Loading />;
  if (isError || !data) return null;

  return (
    <section className='w-full h-full flex flex-col'>
      <DetailInfo id={id} favorite={data.favorite} date={data.activatedAt} />
      <DetailContent problem={data} />
      <DetailFooter id={id} isFavorite={data.favorite} />
    </section>
  );
}
