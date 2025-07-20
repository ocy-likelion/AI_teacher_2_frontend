import ChildCard from './ChildCard';

export default function ChildrenListSection() {
  return (
    <section className='flex flex-col items-center gap-4'>
      <div className='flex flex-col items-center gap-2'>
        <p className='title-md'>우리 아이 정보</p>
        <p className='label text-gray5 dark:text-gray2 text-center'>
          최근 3개월간 자녀가 자주 질문한 개념들을 모았어요. <br />
          태그를 눌러 개념 설명을 확인해보세요.
        </p>
      </div>
      <ChildCard />
    </section>
  );
}
