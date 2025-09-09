import MarkdownViewer from '@/components/MarkdownViewer';
import CardWrapper from '../components/CardWrapper';
import ImageSection from '../components/ImageSection';
import Title from '../components/Title';
import DetailSection from './DetailSection';
import type { Problem } from '@/types/problem.type';
import ConceptList from '@/features/concepts/components/ConceptList';

type DetailContentProps = {
  problem: Problem;
};

export default function DetailContent({ problem }: DetailContentProps) {
  return (
    <section className='flex-1 flex flex-col gap-4 py-3 px-6 md:overflow-y-auto'>
      <ImageSection
        url={problem.imageUrl}
        alt={String(problem.id)}
        maxWidth={500}
      />
      <DetailSection>
        <Title size='lg'>문제</Title>
        <CardWrapper>
          <MarkdownViewer>{problem.summary}</MarkdownViewer>
        </CardWrapper>
      </DetailSection>
      {problem.concepts.length > 0 && (
        <DetailSection>
          <Title
            size='lg'
            description='해시태그를 누르면 자세한 설명을 볼 수 있어요'
          >
            핵심 개념
          </Title>
          <CardWrapper>
            <ConceptList concepts={problem.concepts} />
          </CardWrapper>
        </DetailSection>
      )}
      <DetailSection>
        <Title size='lg'>이렇게 설명해볼까요?</Title>
        <CardWrapper className='prose !max-w-none w-full mx-0 prose-sm sm:prose lg:prose-lg dark:prose-invert prose-li:m-0 prose-p:m-0'>
          <MarkdownViewer>{problem.explanation}</MarkdownViewer>
        </CardWrapper>
      </DetailSection>
    </section>
  );
}
