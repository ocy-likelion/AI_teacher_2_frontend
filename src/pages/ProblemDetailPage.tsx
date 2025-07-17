import axios from 'axios';
import { useParams } from 'react-router-dom';
import ServerErrorPage from '@/pages/ServerErrorPage';
import NotFoundPage from '@/pages/NotFoundPage';
import SubHeader from '@/components/layout/SubHeader';
import ConceptList from '@/features/concepts/components/ConceptList';
import CardWrapper from '@/features/problems/components/CardWrapper';
import DetailFooter from '@/features/problems/detail/DetailFooter';
import DetailSection from '@/features/problems/detail/DetailSection';
import ImageSection from '@/features/problems/detail/ImageSection';
import Title from '@/features/problems/components/Title';
import Loading from '@/components/ui/Loading';
import { formatDetailDate } from '@/utils/date';
import { useProblemDetail } from '@/features/problems/api/get-problem-detail';
import { handleApiError } from '@/utils/handle-api-error';

export default function ProblemDetailPage() {
  const { _id } = useParams();

  const { data, isPending, isError, error } = useProblemDetail(_id!);

  if (isError) {
    handleApiError(error);

    const status = axios.isAxiosError(error) ? error.response?.status : null;
    if (status === 404) return <NotFoundPage />;
    return <ServerErrorPage />;
  }

  if (isPending) return <Loading />;

  return (
    <section className='w-full h-full flex flex-col'>
      <SubHeader type='back' title='해설 보기' />
      <main className='flex-1 flex flex-col gap-4 py-3 px-6'>
        <p className='text-right label text-gray5 dark:text-gray2'>
          {formatDetailDate(data.createdAt)}
        </p>
        <ImageSection url={data.imageUrl} alt={String(data.id)} />
        <DetailSection>
          <Title size='lg'>문제</Title>
          <CardWrapper>{data.ocrResult}</CardWrapper>
        </DetailSection>
        <DetailSection>
          <Title
            size='lg'
            description='해시태그를 누르면 자세한 설명을 볼 수 있어요'
          >
            핵심 개념
          </Title>
          <CardWrapper>
            <ConceptList concepts={data.concepts} />
          </CardWrapper>
        </DetailSection>
        <DetailSection>
          <Title size='lg'>이렇게 설명해볼까요?</Title>
          <CardWrapper>{data.llmResult}</CardWrapper>
        </DetailSection>
      </main>
      <DetailFooter id={_id!} isFavorite={data.favorite} />
    </section>
  );
}
