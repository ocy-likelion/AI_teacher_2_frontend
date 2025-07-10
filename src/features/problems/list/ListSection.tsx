import { problems } from '../mock/dummy';
import Empty from './Empty';
import GridView from './GridView';
import ListView from './ListView';

type ListSectionProps = {
  q?: string;
  favorite?: boolean;
  view: 'list' | 'grid';
};

export default function ListSection({
  q,
  favorite = false,
  view,
}: ListSectionProps) {
  if (problems.length === 0) {
    return <Empty description='하단의 버튼을 눌러 문제를 등록해보세요' />;
  }
  return (
    <section className='w-full'>
      {view === 'list' ? (
        <ListView items={problems} />
      ) : (
        <GridView items={problems} />
      )}
    </section>
  );
}
