import SubHeader from '@/components/layout/SubHeader';
import DetailFooter from '@/features/problems/components/DetailFooter';
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
      <main className='flex-1 flex-col items-center py-3 px-6'>
        <p>{formatDetailDate(data.created_at)}</p>
        <div>
          <img src={data.image} alt={data.name} />
        </div>
        <div>
          <h3>문제</h3>
          <p className='whitespace-pre-wrap'>{data.name}</p>
        </div>
        <div>
          <h3>핵심 개념</h3>
          <p>해시태그를 누르면 자세한 설명을 볼 수 있어요</p>
          <ul className='flex items-center flex-wrap gap-x-2 gap-y-0.5'>
            {data.categories.map((category) => (
              <li key={category}>#{category}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>이렇게 설명해볼까요?</h3>
          <p className='whitespace-pre-wrap'>{data.answer}</p>
        </div>
      </main>
      <DetailFooter isFavorite={false} />
    </section>
  );
}
