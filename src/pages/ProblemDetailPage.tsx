import SubHeader from '@/components/layout/SubHeader';
import KeywordList from '@/features/keywords/components/KeywordList';
import DescriptionCard from '@/features/problems/components/ui/DescriptionCard';
import DetailFooter from '@/features/problems/components/DetailFooter';
import DetailSection from '@/features/problems/components/DetailSection';
import ImageSection from '@/features/problems/components/ImageSection';
import Title from '@/features/problems/components/ui/Title';
import { formatDetailDate } from '@/utils/date';

const data = {
  id: 1,
  name: '*포포즈(four fours)게임은 숫자 4 4개를 가지고 수를 맞추는 게임으로, 영국에서 만들어져 미국에서 유행한 수학 퍼즐게임입니다. 1단원에서 공부한 내용을 바탕으로 퍼즐을 풀어봅시다.\n*숫자 4 4개와 사칙계산 기호를 사용하여 숫자를 만들어봅시다.',
  image: '/images/mock.png',
  categories: [
    '포포즈 게임',
    '자연수',
    '혼합 계산',
    '괄호',
    '사칙연산',
    '해시태그2',
    '해시태그3',
    '해시태그4',
    '해시태그5',
  ],
  favorite: true,
  answer:
    'STEP 1. 어쩌고 저쩌고\n어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고어쩌고저쩌고어쩌고어쩌고저쩌고어쩌고어쩌고저쩌고어쩌고어쩌고저쩌고어쩌고어쩌고저쩌고어쩌고어쩌고저쩌고어쩌고어쩌고저쩌고어쩌고어쩌고저쩌고어쩌고\n\nSTEP 2. 어쩌고 저쩌고\n어쩌고저쩌고어쩌고어쩌고저쩌고어쩌',
  created_at: '2025-07-02 10:20:12.123 +0000',
  updated_at: '2025-07-02 10:20:12.123 +0000',
};

export default function ProblemDetailPage() {
  return (
    <section className='w-full h-full flex flex-col'>
      <SubHeader type='back' title='해설 보기' />
      <main className='flex-1 flex flex-col gap-4 py-3 px-6'>
        <p className='text-right label text-gray5 dark:text-gray2'>
          {formatDetailDate(data.created_at)}
        </p>
        <ImageSection url={data.image} alt={data.name} />
        <DetailSection>
          <Title size='lg'>문제</Title>
          <DescriptionCard>{data.name}</DescriptionCard>
        </DetailSection>
        <DetailSection>
          <Title
            size='lg'
            description='해시태그를 누르면 자세한 설명을 볼 수 있어요'
          >
            핵심 개념
          </Title>
          <DescriptionCard>
            <KeywordList concepts={data.categories} />
          </DescriptionCard>
        </DetailSection>
        <DetailSection>
          <Title size='lg'>이렇게 설명해볼까요?</Title>
          <DescriptionCard>{data.answer}</DescriptionCard>
        </DetailSection>
      </main>
      <DetailFooter isFavorite={data.favorite} />
    </section>
  );
}
