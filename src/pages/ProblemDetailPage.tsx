import axios from 'axios';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';
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

// 인라인 수식 처리를 위해 추가 (추후 수식을 $$ 형식으로 받으면 삭제 예정)
export function sanitizeMathMarkdown(raw: string): string {
  return (
    raw
      // 블록 수식 형태 (예: //( ... ) 또는 (//))
      .replace(/\(\/\/\)/g, '$$') // (//) → $$
      .replace(/\/\/\)/g, '$$') // //) → $$
      .replace(/\(\/\/\s*/g, '$$') // (// → $$
      .replace(/\/\/\s*\)/g, '$$') // //) → $$

      // 인라인 수식 형태: \( ... \) → $ ... $
      .replace(/\\\(/g, '$')
      .replace(/\\\)/g, '$')

      // 혹시 escape 때문에 생긴 \\( ... \\) → $ ... $
      .replace(/\\\\\(/g, '$')
      .replace(/\\\\\)/g, '$')

      // 기타 흔한 오타 처리 (예: ^? → ^{?})
      .replace(/\^(\?)/g, '^{$1}')

      // 마무리: 여분의 줄 정리
      .trim()
  );
}

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
          <CardWrapper>
            <Markdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex]}
            >
              {sanitizeMathMarkdown(data.ocrResult)}
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
          <CardWrapper className='prose prose-sm sm:prose lg:prose-lg dark:prose-invert prose-li:m-0 prose-p:m-0'>
            <Markdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex]}
            >
              {sanitizeMathMarkdown(data.llmResult)}
            </Markdown>
          </CardWrapper>
        </DetailSection>
      </main>
      <DetailFooter id={_id!} isFavorite={data.favorite} />
    </section>
  );
}
