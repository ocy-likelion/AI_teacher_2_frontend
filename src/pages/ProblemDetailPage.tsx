import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';
import SubHeader from '@/components/layout/SubHeader';
import ConceptList from '@/features/concepts/components/ConceptList';
import CardWrapper from '@/features/problems/components/CardWrapper';
import DetailFooter from '@/features/problems/detail/DetailFooter';
import DetailSection from '@/features/problems/detail/DetailSection';
import ImageSection from '@/features/problems/components/ImageSection';
import Title from '@/features/problems/components/Title';
import Loading from '@/components/Loading';
import { formatDetailDate } from '@/utils/date';
import { useProblemDetail } from '@/features/problems/api/get-problem-detail';
import { handleApiError } from '@/utils/handle-api-error';
import { useEffect } from 'react';

export default function ProblemDetailPage() {
  const { _id } = useParams();
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
      <SubHeader
        type='back'
        title='해설 보기'
        onBackClick={() => {
          navigate('/history');
        }}
      />
      <main className='flex-1 flex flex-col gap-4 py-3 px-6'>
        <p className='text-right label text-gray5 dark:text-gray2'>
          {formatDetailDate(data.createdAt)}
        </p>
        <ImageSection
          url={data.imageUrl}
          alt={String(data.id)}
          maxWidth={500}
        />
        <DetailSection>
          <Title size='lg'>문제</Title>
          <CardWrapper>
            <Markdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex]}
            >
              {data.ocrResult}
            </Markdown>
          </CardWrapper>
        </DetailSection>
        {data.concepts.length > 0 && (
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
        )}
        <DetailSection>
          <Title size='lg'>이렇게 설명해볼까요?</Title>
          <CardWrapper className='prose !max-w-none w-full mx-0 prose-sm sm:prose lg:prose-lg dark:prose-invert prose-li:m-0 prose-p:m-0'>
            <Markdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex]}
            >
              {data.llmResult}
            </Markdown>
          </CardWrapper>
        </DetailSection>
      </main>
      <DetailFooter id={_id!} isFavorite={data.favorite} />
    </section>
  );
}
